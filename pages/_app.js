import "@/styles/globals.css";
import Navbar from '@/components/Homepage/Navbar'
import Footer from "@/components/Homepage/Footer";
import React, { useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        if (router.pathname.startsWith('/auth')) {
          router.push('/profile');
        }
      }

      if (event === 'SIGNED_OUT') {
        if (!router.pathname.startsWith('/auth')) {
          router.push('/auth/login');
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);
  return (
    <>
      <Navbar key={Component.name} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
