// Auth API placeholder
// TODO: Connect to Supabase Auth

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupStudentData {
  name: string
  rollNumber: string
  branch: string
  semester: string
  email: string
  password: string
  role: 'student'
}

export interface SignupTeacherData {
  name: string
  department: string
  subjects: string[]
  email: string
  password: string
  teacherAccessKey: string
  role: 'teacher'
}

export async function loginUser(credentials: LoginCredentials) {
  // TODO: Connect Supabase Auth
  // const { data, error } = await supabase.auth.signInWithPassword(credentials)
  console.log('loginUser called', credentials)
  return { data: null, error: null }
}

export async function signupStudent(data: SignupStudentData) {
  // TODO: Connect Supabase Auth + insert into students table
  console.log('signupStudent called', data)
  return { data: null, error: null }
}

export async function signupTeacher(data: SignupTeacherData) {
  // TODO: Connect Supabase Auth + insert into teachers table
  // TODO: Validate teacherAccessKey against teacher_keys table
  console.log('signupTeacher called', data)
  return { data: null, error: null }
}

export async function logoutUser() {
  // TODO: Connect Supabase Auth
  // const { error } = await supabase.auth.signOut()
  console.log('logoutUser called')
  return { error: null }
}

export async function getCurrentUser() {
  // TODO: Connect Supabase Auth
  // const { data: { user } } = await supabase.auth.getUser()
  return null
}
