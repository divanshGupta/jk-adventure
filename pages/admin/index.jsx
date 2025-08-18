// import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import withAdminAuth from '@/lib/withAdminAuth';
import useUserProfile from '@/hooks/useUserProfile'
import ProfileCard from '@/components/Profile/ProfileCard';
import ProfileMenu from '@/components/Profile/ProfileMenu';
import { Loader } from "lucide-react";

function AdminPage() {
 const { session, user, isAdmin, isLoggedIn, loading } = useUserProfile();

  // const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  
  const adminMenu = [
        { label: "Personal Information", path: "/profile/info" },
        { label: "Bookings List", path: "/profile/bookings" },
        { label: "Users List", path: "/admin/users" },
        { label: "Packages List", path: "/admin/packages" },
        { label: "Media", path: "/admin/media" },
        { label: "Settings", path: "/profile/settings" },
        { label: "Logout", path: "/logout" },
  ];

  // Logout handler
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  if (loading) {
    return <div className="h-screen w-screen flex items-center justify-center">
      <Loader />
      Loading...
    </div>;
  }

  if (!user) return null; // Avoid rendering if no profile

  if (!isAdmin) return <p>Access denied. Admins only.</p>;

  return (
    <div className="pt-20 min-h-screen p-4 md:p-12">
          <div className="mt-12 md:mt-20">
            <div className="max-w-5xl mx-auto">
              {/* Profile Header */}
              <ProfileCard userProfile={user} />
    
              {/* Menu */}
              <ProfileMenu
                menuItems={isAdmin ? adminMenu : userMenu}
                logoutFunction={handleLogout}
              />
            </div>
          </div>
    </div>
  );
}

export default withAdminAuth(AdminPage);
