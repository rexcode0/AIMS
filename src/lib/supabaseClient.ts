// Supabase client placeholder
// TODO: Initialize Supabase client when ready

// import { createClient } from '@supabase/supabase-js'
//
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//
// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Storage bucket references (for documentation purposes):
// - faculty-videos: Faculty introduction videos
// - guide-videos: Navigation/guide videos
// - resources: PDFs, notes, uploadable resources

export const SUPABASE_STORAGE_BASE = 'https://YOUR_PROJECT.supabase.co/storage/v1/object/public'

export const STORAGE_BUCKETS = {
  FACULTY_VIDEOS: 'faculty-videos',
  GUIDE_VIDEOS: 'guide-videos',
  RESOURCES: 'resources',
}

// Example URL helpers (to be activated after Supabase setup)
// export function getFacultyVideoUrl(filename: string) {
//   return `${SUPABASE_STORAGE_BASE}/${STORAGE_BUCKETS.FACULTY_VIDEOS}/${filename}`
// }
//
// export function getResourceUrl(filename: string) {
//   return `${SUPABASE_STORAGE_BASE}/${STORAGE_BUCKETS.RESOURCES}/${filename}`
// }
