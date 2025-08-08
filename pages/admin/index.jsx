// import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import withAdminAuth from '@/lib/withAdminAuth';
import useUserProfile from '@/hooks/useUserProfile'

function AdminPage() {
 const { admin, isAdmin } = useUserProfile();

  // const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const checkRole = async () => {
  //     const { role } = await getUserRole(session.user.email);
  //     if (role === 'admin') {
  //       setAuthorized(true);
  //     } else {
  //       router.replace('/unauthorized');
  //     }
  //   };
  //   checkRole();
  // }, [session, router]);

  // if (!authorized) return null;

  if (!isAdmin) return <p>Access denied. Admins only.</p>;

  return (
    <div className="flex items-center justify-center min-h-screen p-6 md:p-12">
      <div>
        <div className="p-4">
          <h1 className="text-xl font-bold">Admin Profile</h1>
          <p>Logged in as: {admin?.name}</p>
        </div>
        <div className="space-y-4">
          <p>Manage your bookings, settings, and users list.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <button onClick={() => router.push("/profile/bookings")} className="bg-blue-600 text-white px-4 py-2 rounded">
              View Bookings
            </button>
            <button onClick={() => router.push("/profile/settings")} className="bg-gray-600 text-white px-4 py-2 rounded">
              Account Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAdminAuth(AdminPage);
