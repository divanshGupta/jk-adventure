import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import withAuth from '@/lib/withAuth';
//breake
// function AdminPage({ session }) {
//   const [authorized, setAuthorized] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkRole = async () => {
//       const { role } = await getUserRole(session.user.email);
//       if (role === 'admin') {
//         setAuthorized(true);
//       } else {
//         router.replace('/profile');
//       }
//     };
//     checkRole();
//   }, [session, router]);

//   if (!authorized) return null;
//break
const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkRole = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push('/auth/login');

      const { data: user } = await supabase
        .from('users')
        .select('role')
        .eq('id', session.user.id)
        .single();

      if (user?.role !== 'admin') return router.push('/unauthorized');
      setIsAdmin(true);
    };

    checkRole();
  }, []);

  if (!isAdmin) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
    </div>
  );
}

export default withAuth(AdminPage);
