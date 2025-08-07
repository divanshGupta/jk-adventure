// withAuth.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const withAuth = (Component) => {
  const AuthWrapper = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);

    useEffect(() => {
      const getSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
        if (!session) {
          router.replace('/auth/login');
        } else {
          setLoading(false);
        }
      };

      getSession();

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        if (!session) {
          router.replace('/auth/login');
        }
      });

      return () => subscription.unsubscribe();
    }, [router]);

    if (loading) return null; // Or show a spinner/loader

    return <Component {...props} session={session} />;
  };

  AuthWrapper.displayName = `withAuth(${Component.displayName || Component.name || 'Component'})`;

  return AuthWrapper;
};

export default withAuth;
