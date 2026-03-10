// Users API placeholder
// TODO: Connect to Supabase

export async function fetchUserProfile(userId: string) {
  // TODO: Connect Supabase - select from profiles table
  console.log('fetchUserProfile called', userId)
  return null
}

export async function updateUserProfile(userId: string, data: Record<string, unknown>) {
  // TODO: Connect Supabase - update profiles table
  console.log('updateUserProfile called', userId, data)
  return { data: null, error: null }
}

export async function fetchStudentList(department?: string, year?: string) {
  // TODO: Connect Supabase - select from students table with filters
  console.log('fetchStudentList called', department, year)
  return []
}
