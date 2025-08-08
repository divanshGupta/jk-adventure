import { useRouter } from "next/router";
import withAuth from "@/lib/withAuth";
import React, { useState, useEffect } from "react";
import { getUserRole } from "@/lib/auth";
import { supabase } from "@/lib/supabaseClient";
import { createUserProfile } from "@/lib/auth";
import { getUserProfile } from "@/lib/auth";

const ProfileDashboard = ({ session, userProfile }) => {

  const [name, setName] = useState('');
  const [authorized, setAuthorized] = useState(false);
    const router = useRouter();
  
    useEffect(() => {
      const checkRole = async () => {
        const { role } = await getUserRole(session.user.email);
        if (role === 'user') {
          setAuthorized(true);
        } else {
          router.replace('/unauthorized');
        }
      };
      checkRole();
    }, [session, router]);
  
    useEffect(() => {
      const getSessionAndCreateUser = async () => {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.user) {
          // Try inserting into `users` table
          const { data, error } = await createUserProfile(session.user);
          if (error && error.code !== '23505') { // 23505 = duplicate key
            console.error("Failed to create user profile", error);
          }
        }
      };

      getSessionAndCreateUser();
    }, []);

    //fetching user's information
    // useEffect(() => {
    //   const fetchUser = async () => {
    //     const profile = await getUserProfile();
    //     if (profile) {
    //       setName(profile.name);
    //     }
    //   };
    //   fetchUser();
    // }, []);

    if (!authorized) return null;

  return (
    <div className="flex items-center justify-center min-h-screen p-6 md:p-12">
      <div>
        <div className="p-4">
          <h1 className="text-xl font-bold">Profile</h1>
          <h1>Welcome, {userProfile?.name || 'User'}!</h1>
          <p>Logged in as: <strong>{session.user.email}</strong></p>
        </div>
        <div className="space-y-4">
          <p>Manage your bookings, settings, and more.</p>
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
export default withAuth(ProfileDashboard);