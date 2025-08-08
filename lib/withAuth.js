// utils/withAuth.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const withAuth = (Component) => {
  const AuthWrapper = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
      let authSubscription;

      const initAuth = async () => {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        setSession(session);

        if (!session) {
          router.replace('/auth/login');
        } else {
          // ✅ Fetch user profile from `users` table
          const { data, error } = await supabase
            .from('users')
            .select('name, phone') // Add any fields you need here
            .eq('id', session.user.id)
            .single();

          if (error) {
            console.error('Error fetching user profile:', error.message);
          } else {
            setUserProfile(data);
          }
        }

        setLoading(false);

        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session);
          if (!session) {
            router.replace('/auth/login');
          }
        });

        authSubscription = subscription;
      };

      initAuth();

      return () => {
        if (authSubscription) authSubscription.unsubscribe();
      };
    }, [router]);

    if (loading) return <div className="p-4">Loading...</div>;

    return (
      <Component
        {...props}
        session={session}
        userProfile={userProfile} // ✅ pass it to wrapped component
      />
    );
  };

  AuthWrapper.displayName = `withAuth(${Component.displayName || Component.name || 'Component'})`;

  return AuthWrapper;
};

export default withAuth;
