import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient'

const withAuth = (WrappedComponent) => {
  const AuthWrapper = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
          router.replace('/login');
        } else {
          setLoading(false);
        }
      };

      checkUser();
    }, [router]);

    if (loading) return null; // or a loader

    return <WrappedComponent {...props} />;
  };
  
  AuthWrapper.displayName = `withAuth(${Component.displayName || Component.name || 'Component'})`;

  return AuthWrapper;
};

export default withAuth;
