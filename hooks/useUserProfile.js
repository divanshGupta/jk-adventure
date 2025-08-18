import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function useUserProfile() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("id, name, phone, email, role")
        .eq("id", userId)
        .single(); // ✅ prevent hanging

      if (error) throw error;
      setUser(data);
    } catch (err) {
      console.error("Error fetching profile:", err.message);
      setUser(null); // ✅ always clear if failed
    }
  };

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!mounted) return;

        setSession(session);

        if (session?.user?.id) {
          await fetchUserProfile(session.user.id);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Init error:", err.message);
        setUser(null);
      } finally {
        if (mounted) setLoading(false); // ✅ always stop
      }
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        if (session?.user?.id) {
          await fetchUserProfile(session.user.id);
        } else {
          setUser(null);
        }
        setLoading(false); // ✅ always stop
      }
    );

    return () => {
      mounted = false;
      listener?.subscription?.unsubscribe();
    };
  }, []);

  return {
    session,
    user,
    loading,
    isAdmin: user?.role === "admin",
    isLoggedIn: !!session?.user,
  };
}
