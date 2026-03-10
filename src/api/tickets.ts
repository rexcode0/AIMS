// Tickets/Complaints API placeholder
// TODO: Connect to Supabase backend
// Supabase table: tickets (id, student_roll_no, category, subject, description, status, created_at, updated_at)
// Important rule: Only STUDENTS can mark their own complaints as resolved.
// Teachers can view and update tickets to "In Progress" — NOT "Resolved".

export async function fetchTickets(userId: string, role: 'student' | 'teacher') {
  // TODO: Connect Supabase - select from tickets table based on role
  // Students: .eq('student_roll_no', userId)
  // Teachers: .eq('assigned_to', userId) or all tickets in department
  console.log('fetchTickets called', userId, role)
  return []
}

export async function createTicket(data: Record<string, unknown>) {
  // TODO: Connect Supabase - insert into tickets table
  // supabase.from('tickets').insert({ ...data, status: 'Pending', created_at: new Date() })
  console.log('createTicket called', data)
  return { data: null, error: null }
}

/**
 * Update ticket status.
 * NOTE: Teachers can only set status to "In Progress".
 * Only students (the original submitter) can mark a ticket "Resolved".
 * TODO: Enforce this rule with Supabase Row Level Security (RLS) policies.
 */
export async function updateTicketStatus(
  ticketId: string,
  status: 'Pending' | 'In Progress' | 'Resolved',
  updatedBy: string,
  role: 'student' | 'teacher'
) {
  // TODO: Connect Supabase - update tickets table
  // RLS policy: students can update their own tickets; teachers cannot set Resolved
  console.log('updateTicketStatus called', ticketId, status, updatedBy, role)
  return { data: null, error: null }
}

/**
 * Submit a new complaint (alias for createTicket with better type safety).
 * TODO: Connect to Supabase backend
 */
export async function submitComplaint(complaint: {
  category: string;
  subject: string;
  description: string;
  studentRollNo: string;
}): Promise<{ success: boolean; ticketId?: string; message: string }> {
  // TODO: Connect to Supabase backend
  // supabase.from('tickets').insert({ ...complaint, status: 'Pending' })
  console.log('submitComplaint called:', complaint)
  return { success: false, message: 'TODO: Connect to Supabase backend' }
}
