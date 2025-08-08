import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabaseClient';

export default function EmailConfirmPage() {
  const router = useRouter();

  useEffect(() => {
    const handleConfirmation = async () => {
      const { error } = await supabase.auth.getSession();

      if (error) {
        console.error('Error during email verification:', error.message);
        router.replace('/auth/login?error=verification_failed');
      } else {
        router.replace('/profile'); // or wherever you want to redirect post-login
      }
    };

    handleConfirmation();
  }, [router]);

  return <p>Verifying your email...</p>;
}
