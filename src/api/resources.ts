// Resources & Timetable API placeholder
// TODO: Connect to Supabase backend
// Supabase tables: resources | timetables | students
// Supabase buckets: resources | timetables | student-photos

export async function fetchResources(department?: string, semester?: string) {
  // TODO: Connect Supabase - select from resources table
  // supabase.from('resources').select('*').eq('department', department).eq('semester', semester)
  console.log('fetchResources called', department, semester)
  return []
}

export async function uploadResource(file: File, metadata: Record<string, unknown>) {
  // TODO: Connect Supabase Storage - upload to resources bucket
  // const { data: storageData } = await supabase.storage.from('resources').upload(file.name, file)
  // await supabase.from('resources').insert({ ...metadata, file_url: storageData.path })
  console.log('uploadResource called', file.name, metadata)
  return { data: null, error: null }
}

export async function getResourceDownloadUrl(filename: string) {
  // TODO: Replace with Supabase Storage public URL
  // return supabase.storage.from('resources').getPublicUrl(filename).data.publicUrl
  console.log('getResourceDownloadUrl called', filename)
  return null
}

/**
 * Upload student list CSV. CSV format: roll_no,name,year,branch
 * TODO: Parse CSV and upsert rows into students table
 * TODO: Supabase Storage bucket: timetables (for CSV archive)
 */
export async function uploadStudentCSV(
  file: File,
  department: string
): Promise<{ success: boolean; message: string; rowsInserted?: number }> {
  // TODO: Connect to Supabase backend
  // 1. Upload to storage: supabase.storage.from('timetables').upload(`students/${file.name}`, file)
  // 2. Parse CSV and insert: supabase.from('students').upsert(rows)
  console.log('uploadStudentCSV called:', file.name, department)
  return { success: false, message: 'TODO: Connect to Supabase backend' }
}

/**
 * Fetch timetable for a branch/semester.
 * TODO: supabase.storage.from('timetables').getPublicUrl(path).data.publicUrl
 */
export async function fetchTimetable(branch: string, semester: string): Promise<string | null> {
  // TODO: Connect to Supabase backend
  // Returns public URL to timetable PDF/image
  console.log('fetchTimetable called:', branch, semester)
  return null
}

/**
 * Upload timetable file (PDF or image) for a branch/semester.
 * TODO: supabase.storage.from('timetables').upload(`${branch}_${semester}.pdf`, file)
 */
export async function uploadTimetable(
  file: File,
  branch: string,
  semester: string,
  type: 'class' | 'lab'
): Promise<{ success: boolean; url?: string }> {
  // TODO: Connect to Supabase backend
  console.log('uploadTimetable called:', file.name, branch, semester, type)
  return { success: false }
}
