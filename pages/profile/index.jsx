import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import useUserProfile from "@/hooks/useUserProfile";
import ProfileCard from "@/components/ProfileCard";
import ProfileMenu from "@/components/ProfileMenu";
import { Loader } from "lucide-react";

export default function ProfileDashboard() {
  const router = useRouter();
  const { session, user, isAdmin, isLoggedIn, loading } = useUserProfile();

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.replace("/auth/login");
    }
  }, [loading, isLoggedIn, router]);

  // Redirect if profile is missing even after login
  useEffect(() => {
    if (!loading && isLoggedIn && !user) {
      console.warn("No profile found, redirecting to login.");
      router.replace("/auth/login");
    }
  }, [loading, isLoggedIn, user, router]);

  const adminMenu = [
    { label: "Personal Information", path: "/profile/info", type: "link" },
    { label: "Bookings List", path: "/admin/bookings", type: "link" },
    { label: "Users List", path: "/admin/users", type: "link" },
    { label: "Packages List", path: "/admin/packages", type: "link" },
    { label: "Media", path: "/admin/media", type: "link" },
    { label: "Settings", path: "/profile/settings", type: "link" },
    { label: "Logout", type: "action" },
  ];

  const userMenu = [
    { label: "Personal Information", path: "/profile/info", type: "link" },
    { label: "Bookings List", path: "/bookings", type: "link" },
    { label: "Wishlist", path: "/profile/wishlist", type: "link" },
    { label: "Settings", path: "/profile/settings", type: "link" },
    { label: "Logout", type: "action" },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  if (loading || (!user && isLoggedIn)) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <Loader className="animate-spin mb-2" />
        <span>Loading profile...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-12">
      <div className="mt-14 md:mt-20">
        <div className="max-w-5xl mx-auto">
          <ProfileCard userProfile={user} />
          <ProfileMenu
            menuItems={isAdmin ? adminMenu : userMenu}
            logoutFunction={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}
