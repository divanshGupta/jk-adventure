import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabaseClient';

const UserSettings = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push('/auth/login');

      const { user } = session;
      setUser(user);

      // Optional: Load user's name from your `users` table
      const { data: profile } = await supabase
        .from('users')
        .select('name')
        .eq('id', user.id)
        .single();

      if (profile) setName(profile.name);
    };

    fetchUser();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('users')
      .update({ name })
      .eq('id', user.id);

    if (error) alert('Update failed!');
    else alert('Profile updated!');
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
  };

  return (
    <div className="flex items-center justify-center py-10 px-4">
      <div>
        <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>

        <hr className="my-6" />

        <button
          onClick={handleLogout}
          className="text-red-600 hover:underline"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserSettings;
