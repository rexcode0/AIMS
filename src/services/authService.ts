// Auth service abstraction
// TODO: Wire up to api/auth.ts functions after Supabase integration

export const AuthService = {
  login: async (email: string, password: string) => {
    // TODO: Call loginUser from api/auth.ts
    return { success: false, message: 'Auth not yet integrated' }
  },
  logout: async () => {
    // TODO: Call logoutUser from api/auth.ts
    return { success: false }
  },
  getCurrentUser: async () => {
    // TODO: Call getCurrentUser from api/auth.ts
    return null
  }
}
