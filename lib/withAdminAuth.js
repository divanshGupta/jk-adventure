import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabaseClient';

const withAdminAuth = (WrappedComponent) => {
  return function AdminProtectedRoute(props) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const checkAdmin = async () => {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.replace('/auth/login');
          return;
        }

        // Check role in `users` table
        const { data: userData, error } = await supabase
          .from('users')
          .select('role')
          .eq('id', user.id)
          .single();

        if (error || userData?.role !== 'admin') {
          router.replace('/unauthorized'); // or show 403
        } else {
          setUser(user);
        }

        setLoading(false);
      };

      checkAdmin();
    }, [router]);

    if (loading) return <div className="p-4">Checking admin access...</div>;

    return <WrappedComponent {...props} user={user} />;
  };
};

export default withAdminAuth;
