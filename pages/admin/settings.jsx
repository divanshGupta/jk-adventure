import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabaseClient';
import withAuth from '@/lib/withAuth';

const AdminSettings = () => {
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
  };

  return (
    <div className="flex items-center justify-center py-10 px-4">
      <div>
        <h1 className="text-3xl font-bold mb-6">Admin Profile Settings</h1>
        <h1>{name}</h1>
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

export default withAuth(AdminSettings);
