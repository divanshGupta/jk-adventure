import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uvromjfsujbaultukyka.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2cm9tamZzdWpiYXVsdHVreWthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMTI1NzEsImV4cCI6MjA2ODU4ODU3MX0.TGhrXg4wCXApe2U5Yax0yZ6CPaIQBMUYsHwJ_F2R4xY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)