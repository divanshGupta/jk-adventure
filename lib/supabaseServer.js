// lib/supabaseServer.js
import { createServerClient } from "@supabase/ssr";
import { serialize } from "cookie";

export const getSupabaseServerClient = (ctx) => {
  const { req, res } = ctx;

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        // New API: getAll / setAll
        getAll() {
          const source = req?.cookies ?? {};
          return Object.entries(source).map(([name, value]) => ({ name, value }));
        },
        setAll(cookies) {
          // Write all returned cookies to the response header
          res.setHeader(
            "Set-Cookie",
            cookies.map(({ name, value, options }) => serialize(name, value, options))
          );
        },
      },
    }
  );
};
