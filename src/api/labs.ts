// Labs API placeholder
// TODO: Connect to Supabase

export async function fetchLabs() {
  // TODO: Connect Supabase - select from labs table
  console.log('fetchLabs called')
  return []
}

export async function fetchLabAvailability(labId: string, date: string) {
  // TODO: Connect Supabase - select from lab_bookings table
  console.log('fetchLabAvailability called', labId, date)
  return []
}

export async function bookLab(labId: string, data: Record<string, unknown>) {
  // TODO: Connect Supabase - insert into lab_bookings table
  console.log('bookLab called', labId, data)
  return { data: null, error: null }
}
