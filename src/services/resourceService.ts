// Resource service abstraction
// TODO: Wire up to api/resources.ts after Supabase integration

export const ResourceService = {
  getAll: async (department?: string, semester?: string) => {
    // TODO: Call fetchResources from api/resources.ts
    return []
  },
  upload: async (file: File, meta: Record<string, unknown>) => {
    // TODO: Call uploadResource from api/resources.ts
    return null
  },
  getDownloadUrl: async (filename: string) => {
    // TODO: Replace with Supabase Storage URL
    return null
  }
}
