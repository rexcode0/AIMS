// Timetable API placeholder
// TODO: Connect to Supabase

export async function fetchTimetable(userId: string, role: 'student' | 'teacher') {
  // TODO: Connect Supabase - select from timetable table
  console.log('fetchTimetable called', userId, role)
  return []
}

export async function updateTimetable(id: string, data: Record<string, unknown>) {
  // TODO: Connect Supabase - update timetable table
  console.log('updateTimetable called', id, data)
  return { data: null, error: null }
}
