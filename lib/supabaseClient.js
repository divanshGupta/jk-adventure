// lib/supabaseClient.js
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Safe in the browser; @supabase/ssr guards window usage.
// If you prefer, you can also import this dynamically where needed.
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);
