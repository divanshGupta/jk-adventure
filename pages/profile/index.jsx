// pages/profile/index.jsx
import { getSupabaseServerClient } from "@/lib/supabaseServer";
import ProfileCard from "@/components/Profile/ProfileCard";
import ProfileMenu from "@/components/Profile/ProfileMenu";

export default function ProfileDashboard({ profile, isAdmin }) {
  const adminMenu = [
    { label: "Personal Information", path: "/profile/info", type: "link" },
    { label: "Bookings List", path: "/admin/bookings", type: "link" },
    { label: "Users List", path: "/admin/users", type: "link" },
    { label: "Packages List", path: "/admin/packages", type: "link" },
    { label: "Media", path: "/admin/media", type: "link" },
    { label: "Logout", type: "action" },
  ];

  const userMenu = [
    { label: "Personal Information", path: "/profile/info", type: "link" },
    { label: "Bookings List", path: "/bookings", type: "link" },
    { label: "Logout", type: "action" },
  ];

  return (
    <div className="min-h-screen p-4 md:p-12">
      <div className="mt-14 md:mt-20">
        <div className="max-w-5xl mx-auto">
          <ProfileCard userProfile={profile} />
          <ProfileMenu
            menuItems={isAdmin ? adminMenu : userMenu}
            logoutFunction={async () => {
              // Dynamic import to avoid SSR touching the browser client
              const { supabase } = await import("@/lib/supabaseClient");
              await supabase.auth.signOut();
              window.location.href = "/auth/login";
            }}
          />
        </div>
      </div>
    </div>
  );
}

// 🔑 Server-side fetch using @supabase/ssr
export async function getServerSideProps(ctx) {
  const supabase = getSupabaseServerClient(ctx);

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return {
      redirect: { destination: "/auth/login", permanent: false },
    };
  }

  const { data: profile, error: profileError } = await supabase
    .from("users")
    .select("id, name, phone, email, role")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) {
    return {
      redirect: { destination: "/auth/login", permanent: false },
    };
  }

  return {
    props: {
      profile,
      isAdmin: profile.role === "admin",
    },
  };
}
