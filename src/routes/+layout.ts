import { createBrowserClient } from '@supabase/ssr'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { browser } from '$app/environment'

export const load = async ({ fetch, data, depends }) => {
  depends('supabase:auth')

  const supabase = createBrowserClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      global: {
        fetch
      },
      cookies: {
        get: (key) => {
          if (!browser) return undefined
          const cookies = document.cookie.split('; ')
          const cookie = cookies.find(c => c.startsWith(`${key}=`))
          return cookie ? cookie.split('=')[1] : undefined
        },
        set: (key, value, options) => {
          if (!browser) return
          let cookie = `${key}=${value}`
          if (options?.maxAge) cookie += `; Max-Age=${options.maxAge}`
          if (options?.path) cookie += `; Path=${options.path}`
          document.cookie = cookie
        },
        remove: (key, options) => {
          if (!browser) return
          document.cookie = `${key}=; Max-Age=0${options?.path ? `; Path=${options.path}` : ''}`
        }
      }
    }
  )

  return {
    supabase,
    session: data?.session ?? null
  }
} 