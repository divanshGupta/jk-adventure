import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function useUserProfile() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null); // current user
  const [admin, setAdmin] = useState(null); // admin details
  const [loading, setLoading] = useState(true);

  // Fetch user profile from users table
  const fetchUserProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("id, name, phone, email, role")
        .eq("id", userId)
        .single();

      if (error) throw error;
      setUser(data);
    } catch (err) {
      console.error("Error fetching profile:", err.message);
    }
  };

  // Fetch admin details
  const fetchAdminProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("id, name, email, phone, role")
        .eq("role", "admin")
        .single(); // assuming there’s only 1 admin

      if (error) throw error;
      setAdmin(data);
    } catch (err) {
      console.error("Error fetching admin:", err.message);
    }
  };

  useEffect(() => {
    let mounted = true;

    const loadSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!mounted) return;

      setSession(session);

      if (session?.user?.id) {
        await fetchUserProfile(session.user.id);
        await fetchAdminProfile(); // fetch admin’s data too
      }

      setLoading(false);
    };

    loadSession();

    // Listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        if (session?.user?.id) {
          await fetchUserProfile(session.user.id);
          await fetchAdminProfile();
        } else {
          setUser(null);
          setAdmin(null);
        }
      }
    );

    return () => {
      mounted = false;
      listener?.subscription?.unsubscribe();
    };
  }, []);

  return {
    session,
    user,       // current logged-in user
    admin,      // admin’s details
    loading,
    isAdmin: user?.role === "admin",
    isLoggedIn: !!session?.user
  };
}
