import { createClient } from '@supabase/supabase-js'

const normalizeSupabaseUrl = (rawUrl?: string | null) => {
  if (!rawUrl) return rawUrl
  const trimmed = rawUrl.trim()
  if (trimmed.includes('.supabase.com')) {
    console.warn(
      'Supabase project URLs use the .supabase.co domain. Automatically replacing .com with .co.'
    )
    return trimmed.replace('.supabase.com', '.supabase.co')
  }
  return trimmed
}

const supabaseUrl = normalizeSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL)
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  }
})
