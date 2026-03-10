# Supabase Integration Guide for AIMS

## Overview

This guide provides step-by-step instructions to manually integrate Supabase into the AIMS (Academic Infrastructure Management System) project.

---

## 1. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign in.
2. Click **"New Project"**.
3. Fill in:
   - **Project name**: `aims-production`
   - **Database password**: (generate a strong password)
   - **Region**: Choose closest to your users
4. Wait for the project to provision (~2 minutes).

---

## 2. Get API Keys

1. In your Supabase dashboard → **Project Settings → API**
2. Copy:
   - `NEXT_PUBLIC_SUPABASE_URL` — the Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` — the anon/public key
3. Add to your `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

---

## 3. Install Supabase SDK

```bash
bun add @supabase/supabase-js
```

---

## 4. Initialize Supabase Client

Edit `/src/lib/supabaseClient.ts`:

```ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

---

## 5. Set Up Authentication

In Supabase Dashboard → **Authentication → Settings**:
- Enable **Email/Password** provider
- Set **Site URL**: `http://localhost:3000` (dev) or your production domain
- Enable email confirmation if required

---

## 6. Database Tables

Run these SQL statements in **Supabase SQL Editor**:

### Profiles Table
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  full_name TEXT,
  role TEXT CHECK (role IN ('student', 'teacher')),
  email TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Students Table
```sql
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  roll_number TEXT UNIQUE NOT NULL,
  branch TEXT NOT NULL,
  semester TEXT,
  section TEXT,
  year TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Teachers Table
```sql
CREATE TABLE teachers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  department TEXT NOT NULL,
  designation TEXT,
  subjects TEXT[],
  access_key_used TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Teacher Access Keys Table
```sql
CREATE TABLE teacher_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  is_used BOOLEAN DEFAULT FALSE,
  used_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Timetable Table
```sql
CREATE TABLE timetable (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  day TEXT NOT NULL,
  time_start TIME NOT NULL,
  time_end TIME NOT NULL,
  subject TEXT NOT NULL,
  faculty_id UUID REFERENCES teachers(id),
  room TEXT,
  class_name TEXT,
  branch TEXT,
  semester TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Resources Table
```sql
CREATE TABLE resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  subject TEXT,
  semester TEXT,
  department TEXT,
  file_path TEXT, -- Supabase Storage path
  file_type TEXT,
  file_size BIGINT,
  uploaded_by UUID REFERENCES teachers(id),
  download_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Labs Table
```sql
CREATE TABLE labs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  floor TEXT,
  capacity INTEGER,
  equipment TEXT,
  is_available BOOLEAN DEFAULT TRUE,
  current_class TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Tickets Table
```sql
CREATE TABLE tickets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ticket_number TEXT UNIQUE NOT NULL,
  student_id UUID REFERENCES students(id),
  category TEXT,
  subject TEXT,
  description TEXT,
  status TEXT DEFAULT 'Pending' CHECK (status IN ('Pending', 'In Progress', 'Resolved')),
  assigned_to UUID REFERENCES teachers(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Notices Table
```sql
CREATE TABLE notices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT,
  audience TEXT,
  priority TEXT DEFAULT 'Normal',
  posted_by UUID REFERENCES teachers(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 7. Storage Buckets

Create these buckets in **Supabase Storage** (Dashboard → Storage → New Bucket):

| Bucket Name      | Public | Purpose                                  |
|------------------|--------|------------------------------------------|
| `faculty-videos` | ✅ Yes | Faculty intro videos (`.mp4`)           |
| `guide-videos`   | ✅ Yes | Campus navigation videos (`.mp4`)       |
| `resources`      | ❌ No  | Student PDFs, notes, lab manuals        |
| `timetables`     | ❌ No  | Class and lab timetable files           |
| `student-photos` | ❌ No  | Student ID card photos (`.jpg`, `.png`) |
| `marks-uploads`  | ❌ No  | CSV archive for uploaded marks          |

### Example public URLs after setup:
```
Faculty intro: https://PROJECT.supabase.co/storage/v1/object/public/faculty-videos/sharma_intro.mp4
Navigation:    https://PROJECT.supabase.co/storage/v1/object/public/guide-videos/cse_lab_navigation.mp4
Student photo: https://PROJECT.supabase.co/storage/v1/object/public/student-photos/CSE2022047.jpg
```

---

## 7a. Additional Database Tables (Companion Features)

### Unit Test Marks Table
```sql
CREATE TABLE unit_test_marks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  roll_no TEXT NOT NULL,
  subject TEXT NOT NULL,
  test_name TEXT NOT NULL,
  marks INTEGER NOT NULL,
  max_marks INTEGER DEFAULT 20,
  semester TEXT,
  uploaded_by UUID REFERENCES teachers(id),
  uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast student mark lookups
CREATE INDEX idx_marks_roll_no ON unit_test_marks(roll_no);
```

---


## 8. Storage Bucket Policies

For the `resources` bucket, add an RLS policy in Supabase:

```sql
-- Allow authenticated users to read resources
CREATE POLICY "Authenticated users can view resources"
ON storage.objects FOR SELECT
USING (bucket_id = 'resources' AND auth.role() = 'authenticated');

-- Allow teachers to upload resources
CREATE POLICY "Teachers can upload resources"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'resources' AND auth.role() = 'authenticated');
```

---

## 9. Connect API Files

After setup, update each file in `/src/api/`:

### `src/api/auth.ts`
```ts
import { supabase } from '@/lib/supabaseClient'

export async function loginUser(credentials) {
  const { data, error } = await supabase.auth.signInWithPassword(credentials)
  return { data, error }
}
```

### `src/api/resources.ts`
```ts
import { supabase } from '@/lib/supabaseClient'
import { STORAGE_BUCKETS, SUPABASE_STORAGE_BASE } from '@/lib/supabaseClient'

export async function uploadResource(file, metadata) {
  const { data, error } = await supabase.storage
    .from(STORAGE_BUCKETS.RESOURCES)
    .upload(file.name, file)
  return { data, error }
}
```

---

## 10. Enable Realtime (Optional)

For live notifications and timetable updates:

```sql
ALTER PUBLICATION supabase_realtime ADD TABLE notices;
ALTER PUBLICATION supabase_realtime ADD TABLE tickets;
```

---

## Summary Checklist

- [ ] Supabase project created
- [ ] API keys added to `.env.local`
- [ ] `@supabase/supabase-js` installed
- [ ] `supabaseClient.ts` initialized
- [ ] Auth enabled (Email/Password)
- [ ] All database tables created
- [ ] Storage buckets created
- [ ] Bucket policies configured
- [ ] API files connected
- [ ] Test authentication flow
- [ ] Test file upload/download
