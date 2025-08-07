import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iirtdpdkjhqkweggyckt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpcnRkcGRramhxa3dlZ2d5Y2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NzEyODksImV4cCI6MjA3MDE0NzI4OX0.1-6uarUpxooNJlh2f5M6I1BiFr7vRht5JAZ5l96Tzy8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)