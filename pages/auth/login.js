import { useState } from 'react';
import { useRouter } from 'next/router';
import { loginUser, signUpUser, getUserRole, createUserProfile } from '@/lib/auth';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');

    if (isSignup) {
      const { error } = await signUpUser(email, password);
      if (error) return setError(error.message);
      alert('Check your email to verify your account.');
    } else {
      const { data, error: loginError } = await loginUser(email, password);
      if (loginError) return setError(loginError.message);

      // Get current user ID & ensure profile exists
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { role } = await getUserRole(email);
        if (!role) {
          await createUserProfile(user, { role: 'user' });
        }
      }

      router.push('/profile');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleAuth} className="bg-white p-8 rounded-md shadow max-w-sm w-full space-y-4">
        <h2 className="text-xl font-semibold text-center">
          {isSignup ? 'Create Account' : 'Login'}
        </h2>

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
}
