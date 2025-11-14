import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabaseClient';

const withAdminAuth = (WrappedComponent) => {
  return function AdminProtectedRoute(props) {
    const [loading, setLoading] = useState(true);
    const [allowed, setAllowed] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const checkAdmin = async () => {
        try {
          // 1. Get logged in user
          const {
            data: { user },
          } = await supabase.auth.getUser();

          if (!user) {
            router.replace('/auth/login');
            return;
          }

          // 2. Get role from users table
          const { data: userData, error } = await supabase
            .from('users')
            .select('role')
            .eq('id', user.id)
            .single();

          if (error) {
            console.error('Error fetching role:', error);
            router.replace('/unauthorized');
            return;
          }

          // 3. Check role
          if (userData?.role === 'admin') {
            setAllowed(true);
          } else {
            router.replace('/unauthorized'); // strict block
          }
        } catch (err) {
          console.error(err);
          router.replace('/unauthorized');
        } finally {
          setLoading(false);
        }
      };

      checkAdmin();
    }, [router]);

    if (loading) return <div className="p-4">Checking admin access...</div>;
    if (!allowed) return null; // prevent flashing non-admins

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;
