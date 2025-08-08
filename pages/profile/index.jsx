import { useRouter } from "next/router";
import withAuth from "@/lib/withAuth";
import React from "react";

const ProfileDashboard = ({ session }) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen p-6 md:p-12">
      <div>
        <div className="p-4">
          <h1 className="text-xl font-bold">Profile</h1>
          <p>Logged in as: <strong>{session?.user?.email}</strong></p>
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