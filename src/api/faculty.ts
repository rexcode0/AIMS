// Faculty API placeholder
// TODO: Connect to Supabase

export async function fetchFacultyByDepartment(department: string) {
  // TODO: Connect Supabase - select from faculty table where department = ?
  console.log('fetchFacultyByDepartment called', department)
  return []
}

export async function fetchFacultyById(id: string) {
  // TODO: Connect Supabase - select from faculty table where id = ?
  console.log('fetchFacultyById called', id)
  return null
}

export async function fetchFacultyVideoUrl(filename: string) {
  // TODO: Replace with Supabase Storage URL
  // return `${SUPABASE_STORAGE_BASE}/faculty-videos/${filename}`
  console.log('fetchFacultyVideoUrl called', filename)
  return null
}
