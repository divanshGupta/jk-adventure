import { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../lib/supabaseClient'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('') // Only used during signup
  const [isSignup, setIsSignup] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');

    if (isSignup) {
      // SIGNUP
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        // options: {
        //   data: { name: "john" }, // optional: store user_metadata
        // },
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      // const userId = data.user?.id;

      // if (userId) {
      //   const { error: dbError } = await supabase.from('users').insert([
      //     {
      //       id: userId,
      //       name,
      //       email,
      //       user_role: 'user', // default role
      //     },
      //   ]);

      //   if (dbError) {
      //     console.error('Failed to insert into users table:', dbError.message);
      //     setError('Signup succeeded, but failed to save user profile.');
      //   }
      // }

        alert('Check your email to verify your account.');
      } else {
        // LOGIN
        const { data, error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (loginError) {
          setError(loginError.message);
          return { user, error };
        }

        // ✅ Optional: Check user role from 'users' table and redirect accordingly
        const {
          data: userProfile,
          error: profileError,
        } = await supabase.from('users').select('role').eq('email', email).single();

        if (profileError) {
          console.error('Failed to fetch user role:', profileError.message);
        }

        if (userProfile?.role === 'admin') {
          router.push('/admin');
        } else {
          router.push('/profile'); // default user route
        }
      }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleAuth} className="bg-white p-8 rounded shadow max-w-sm w-full space-y-4">
        <h2 className="text-xl font-semibold text-center">
          {isSignup ? 'Create Account' : 'Login'}
        </h2>

        {/* {isSignup && (
          // <input
          //   type="text"
          //   placeholder="Name"
          //   value={name}
          //   // required
          //   onChange={(e) => setName(e.target.value)}
          //   className="w-full p-2 border rounded"
          // />
        )} */}

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>

        <p className="text-center text-sm">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-600 cursor-pointer underline"
          >
            {isSignup ? 'Login' : 'Sign up'}
          </span>
        </p>
      </form>
    </div>
  );
};
