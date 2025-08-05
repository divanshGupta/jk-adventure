import "@/styles/globals.css";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";
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
        // only redirect to /profile if you're currently on /login
        if (router.pathname === '/login') {
          router.push('/profile');
        }
      }
      if (event === 'SIGNED_OUT') {
        router.push('/login');
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
