# AIMS — System Architecture & Implementation Guide

## Overview

AIMS (Academic Infrastructure Management System) is a Next.js 15 web application using the App Router. It is designed as a role-based academic management portal with clean architecture, ready for Supabase backend integration.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Theme | next-themes (Light/Dark) |
| Forms | React state (ready for react-hook-form) |
| Backend (future) | Supabase (Auth + DB + Storage) |

---

## Project Structure

```
/src
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Landing page
│   ├── login/                # Login page
│   ├── signup/               # Signup page (role-based)
│   ├── branches/
│   │   ├── cse/              # CSE branch page
│   │   ├── it/               # IT branch page
│   │   └── elex/             # Electronics branch page
│   └── dashboard/
│       ├── student/          # Student dashboard
│       └── teacher/          # Teacher dashboard
│
├── components/               # Reusable UI components
│   ├── navbar.tsx            # Top navigation bar
│   ├── theme-toggle.tsx      # Light/Dark theme toggle
│   ├── theme-provider.tsx    # next-themes provider
│   ├── chatbot-widget.tsx    # Floating chatbot
│   └── branch-page-template.tsx  # Shared branch page layout
│
├── api/                      # API placeholder modules
│   ├── auth.ts               # Auth operations
│   ├── users.ts              # User profile operations
│   ├── faculty.ts            # Faculty data operations
│   ├── timetable.ts          # Timetable operations
│   ├── resources.ts          # Resource upload/download
│   ├── labs.ts               # Lab availability/booking
│   └── tickets.ts            # Support tickets/complaints
│
├── lib/
│   └── supabaseClient.ts     # Supabase client (placeholder)
│
└── services/
    ├── authService.ts        # Auth service abstraction
    └── resourceService.ts    # Resource service abstraction

/public
└── assets/                   # Static assets (served from CDN)
    ├── college/              # College/block images
    │   ├── it_block.jpg      # IT Block hero image
    │   └── campus.jpg        # Campus overview
    ├── faculty/              # Faculty profile photos
    │   ├── sharma.jpg
    │   ├── rao.jpg
    │   └── ...
    ├── ui/                   # UI assets
    │   └── logo.png
    ├── illustrations/        # Section illustrations
    └── chatbot/
        └── chatbotData.json  # FAQ data for chatbot
```

---

## Role-Based System

### User Roles

| Role | Access |
|------|--------|
| `student` | Student Dashboard, Resources, Labs, Complaints, ID Card, Timetable |
| `teacher` | Teacher Dashboard, Upload Resources, Student List, Notices, Tickets |
| `admin` | (Future) Full access to all management features |

### Authentication Flow

```
User visits /login or /signup
    │
    ├── /signup → Role selection (student/teacher)
    │       ├── Student: name, roll, branch, semester, email, password
    │       └── Teacher: name, dept, subjects, email, password, teacherAccessKey
    │
    ├── Login → email + password → Supabase Auth
    │       └── On success → redirect based on role
    │               ├── student → /dashboard/student
    │               └── teacher → /dashboard/teacher
    │
    └── Protected routes → check auth → redirect to /login if unauthenticated
```

### Teacher Access Key Logic

- A `teacher_keys` table in Supabase stores pre-issued unique keys.
- When a teacher signs up, the `teacherAccessKey` is validated against this table.
- If valid and unused → mark as used, create teacher account.
- If invalid or already used → reject signup.
- Keys are generated and distributed by the admin/faculty office.

```
Admin generates key → Stores in teacher_keys table
Teacher receives key → Enters during signup
System validates → Marks as used → Creates account
```

---

## Asset Strategy

### Static Assets → `/public/assets/`

All static UI images are stored locally for performance:

| Path | Purpose |
|------|---------|
| `/assets/college/it_block.jpg` | Hero section background |
| `/assets/college/campus.jpg` | Campus overview |
| `/assets/faculty/sharma.jpg` | Dr. Anil Sharma photo |
| `/assets/faculty/*.jpg` | All faculty photos |
| `/assets/ui/logo.png` | AIMS logo |

**Why local?** Faster load, CDN caching, no API calls.

### Dynamic Media → Supabase Storage

| Bucket | Content | Access |
|--------|---------|--------|
| `faculty-videos` | Faculty intro MP4 videos | Public |
| `guide-videos` | Campus/navigation guide videos | Public |
| `resources` | PDFs, notes, assignments | Authenticated |

**Why Supabase Storage?** Handles large files, user uploads, access control.

---

## Theme System

### Implementation

- Uses `next-themes` with `ThemeProvider` wrapping the app in `layout.tsx`.
- `attribute="class"` — adds `.dark` class to `<html>`.
- `ThemeToggle` component handles switching with animated Moon/Sun icons.
- Preference persisted in `localStorage`.

### Color Palette

| Token | Light | Dark |
|-------|-------|------|
| Background | Warm Ivory | Deep Charcoal |
| Primary | Muted Teal | Bright Teal |
| Accent | Soft Teal | Dark Teal |
| Foreground | Deep Graphite | Warm Ivory |

---

## Chatbot Logic

### Current Implementation

The chatbot uses simple keyword matching against a FAQ dataset:

```
User message → lowercase → keyword scan → match found → return answer
                                        → no match → default response
```

FAQ data location: `/public/assets/chatbot/chatbotData.json`

### Future Enhancement

```
// TODO: Load from chatbotData.json dynamically
// TODO: Integrate LLM API (e.g., OpenAI, Gemini) for natural language understanding
// TODO: Connect to Supabase for FAQ management
```

---

## Dashboard Architecture

### Student Dashboard Modules

| Module | Description |
|--------|-------------|
| Timetable | Weekly schedule by day |
| Resources | View/download study materials |
| Labs | Check availability, request booking |
| Complaints | Raise tickets, track status |
| Digital ID Card | QR-enabled virtual ID |
| Notifications | System alerts |
| Profile | View/edit personal info |

### Teacher Dashboard Modules

| Module | Description |
|--------|-------------|
| Timetable | Teaching schedule with class info |
| Upload Resources | Upload PDFs/PPTs to Supabase |
| Student List | Filterable by year, searchable |
| Notices | Post announcements |
| Tickets | View/resolve student complaints |
| Profile | Faculty profile management |

---

## API Module Pattern

All API files follow this pattern:

```ts
// TODO: Connect to Supabase
export async function fetchXxx(params) {
  // import { supabase } from '@/lib/supabaseClient'
  // const { data, error } = await supabase.from('table').select('*')
  return null
}
```

This ensures:
- Clear TODO comments for integration points
- TypeScript type safety
- Easy find & replace when connecting Supabase

---

## Branch Page Architecture

All three branch pages (CSE/IT/ELEX) use the shared `BranchPageTemplate` component:

```
/branches/cse/page.tsx → data object → <BranchPageTemplate {...cseData} />
/branches/it/page.tsx  → data object → <BranchPageTemplate {...itData} />
/branches/elex/page.tsx → data object → <BranchPageTemplate {...elexData} />
```

Each data object includes:
- Department info, highlights, programs
- Faculty list (with photo path TODOs + video URL TODOs)
- Lab list
- Achievements

---

## Adding Faculty Photos

1. Place photos in `/public/assets/faculty/`
2. Find the `photoPath` TODO comments in branch pages
3. Replace avatar placeholder with `<img src={f.photoPath} ... />`

---

## Security Considerations (for Supabase integration)

- Use RLS (Row Level Security) on all Supabase tables
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to the client
- Validate teacher access keys server-side only
- Use Supabase Auth middleware to protect dashboard routes
- Rate-limit signup to prevent abuse

---

## Future Roadmap

- [ ] Complete Supabase Auth integration
- [ ] Real-time notifications via Supabase Realtime
- [ ] PDF generation for Digital ID Card
- [ ] Faculty video player with Supabase Storage
- [ ] Admin dashboard for super-user management
- [ ] Email notifications via Supabase Edge Functions
- [ ] PWA support for mobile access
- [ ] Advanced chatbot with LLM integration

---

## Chatbot Architecture (Enhanced — Companion Features)

### Data Source: `chatbotData.json`

```json
{
  "faqs": [
    {
      "id": "cse_lab",
      "keywords": ["cse lab", "computer science lab", ...],
      "question": "Where is CSE Lab?",
      "answer": "...",
      "video": "cse_lab_navigation.mp4",      // → guide-videos bucket
      "videoLabel": "▶ Navigate to CSE Lab",
      "link": "/branches/cse",
      "linkLabel": "Open CSE Department"
    }
  ],
  "suggestions": ["Where is CSE Lab?", "Who is IT HOD?", ...],
  "defaultResponse": "...",
  "greeting": "..."
}
```

### Response Types
Each chatbot response can include:
- **Answer text** — always shown
- **Navigation video button** → expands to show video placeholder (Supabase `guide-videos` bucket TODO)
- **Department link button** → navigates to branch page or dashboard

### Keyword Matching Engine
```
User input → .toLowerCase() → scan all `keywords[]` arrays → first match → return response
```

### Suggestion Chips
On first open, before any message is sent, suggestion chips are shown:
- Pre-built from `chatbotData.suggestions[]`
- Clicking a chip is equivalent to typing and sending that question

### UI Features
- Minimize/expand toggle (retains chat history)
- Typing indicator animation (3 bouncing dots)
- Pulse ring on FAB when chat is closed

---

## CSV Ingestion System (Teacher Features)

### Marks CSV Upload
Format: `roll_no,subject,marks,semester`

Flow:
```
Teacher selects subject + test name
→ uploads CSV file
→ API route: /api/marks/upload
→ TODO: Parse CSV rows
→ TODO: insert into unit_test_marks table
→ TODO: archive CSV in Supabase marks-uploads bucket
```

### Student List CSV Upload
Format: `roll_no,name,year,branch`

Flow:
```
Teacher uploads CSV
→ API route: /api/students/upload
→ TODO: upsert into students table
→ TODO: archive in timetables bucket (CSV folder)
```

---

## Campus Navigation Video System

Videos stored in Supabase `guide-videos` bucket:

| Video Filename | Covers |
|----------------|--------|
| `cse_lab_navigation.mp4` | How to reach CSE Lab A & B |
| `it_lab_navigation.mp4` | How to reach IT Networking Lab |
| `elex_lab_navigation.mp4` | How to reach Electronics Lab |
| `hod_cabin_navigation.mp4` | How to reach HOD cabins by floor |
| `seminar_hall_navigation.mp4` | How to reach Seminar Hall |

To add a video:
1. Upload to `guide-videos` bucket in Supabase
2. Add entry in `chatbotData.json` with `"video": "filename.mp4"`
3. The chatbot widget will show a [▶ Play] button automatically

---

## Unit Test Marks Architecture

### Student View
- Student Dashboard → "Unit Test Marks" tab
- Shows all marks for the student's roll number
- Filter by subject using dropdown
- Progress bar per mark (green ≥80%, amber ≥60%, red <60%)
- TODO: Call `fetchStudentMarks(rollNo)` from `/src/api/marks.ts`

### Teacher Upload
- Teacher Dashboard → "Upload / CSV" → "Marks CSV" tab
- CSV format guide displayed inline
- TODO: Call `uploadMarksCSV(file, teacherId, subject, testName)` from `/src/api/marks.ts`

### Complaint Resolution Rule
- **Students** can mark their own complaints as Resolved
- **Teachers** can only Acknowledge a ticket → sets status to "In Progress"
- Enforced in UI (teacher view has no "Resolved" button)
- TODO: Enforce with Supabase RLS once backend is connected

---

## Semester Results Architecture

AIMS does **not** store university marksheets. The Semester Results section:
1. Explains this clearly with an info card
2. Shows a semester selector (1st–8th) for context
3. Provides a prominent CTA: **"View Official University Result →"**
4. TODO: Replace `href="#"` with actual university portal URL

---

## Branch Page Architecture (Updated)

Each branch page now has 6 sections:

```
1. Hero             — Name, tagline, about, highlights grid
2. HOD Section      — Photo/initials + Crown badge, bio, cabin, office hours
3. Programs         — All offered programs
4. Faculty Grid     — Photo + name + subjects + "View Intro Video" button
5. Labs             — Availability by lab with seat count
6. Achievements     — Accreditations, awards, stats
```

### HOD Data Shape
```ts
{
  name: "Dr. Anil Sharma",
  designation: "Professor & Head of Department — CSE",
  bio: "...",
  initials: "AS",
  photoPath: "/assets/faculty/sharma.jpg",  // TODO: local asset
  cabin: "Room 301, 3rd Floor",
  officeHours: "Mon–Fri, 10:00 AM – 12:00 PM"
}
```

### Faculty Intro Video Modal
- "View Intro Video" button per faculty card opens animated modal overlay
- Modal shows: faculty avatar, name, designation, subjects
- Video placeholder (aspect-video container) with TODO Supabase URL comment:
  ```
  // TODO: https://PROJECT.supabase.co/storage/v1/object/public/faculty-videos/{name}_intro.mp4
  ```

---

## Asset Management Summary

| Asset Type | Location | Notes |
|-----------|----------|-------|
| Faculty photos | `/public/assets/faculty/` | Local `.jpg` files |
| College logo | `/public/assets/ui/logo.png` | Used in ID card PDF |
| Chatbot data | `/public/assets/chatbot/chatbotData.json` | Navigation Q&A |
| Navigation videos | Supabase `guide-videos` | Public bucket |
| Faculty intro videos | Supabase `faculty-videos` | Public bucket |
| Student PDFs/notes | Supabase `resources` | Auth-gated |
| Timetable files | Supabase `timetables` | Auth-gated |
| Student photos | Supabase `student-photos` | Auth-gated |
| Marks CSV archive | Supabase `marks-uploads` | Auth-gated |
