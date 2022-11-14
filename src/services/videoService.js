import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = 'https://hoovadhctbprsllyuvzf.supabase.co'
const PUBLIC_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvb3ZhZGhjdGJwcnNsbHl1dnpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzODA1MTgsImV4cCI6MTk4Mzk1NjUxOH0.HXGlo1v8Oe3dcTr2TY76mqlfyrmnoBaRG36ImGL1_1g'
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from('video').select('*')
        }
    }
}
