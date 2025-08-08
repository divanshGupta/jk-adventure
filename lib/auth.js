import { supabase } from '@/lib/supabaseClient';

// Helper to fetch auth user
const fetchAuthUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  return error || !user ? null : user;
};

// Sign Up
export const signUpUser = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
};

// Login
export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
};

// Logout
export const signOutUser = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Get current auth user
export const getCurrentUser = async () => {
  const user = await fetchAuthUser();
  return { user };
};

// Get user role from 'users' table
export const getUserRole = async (email) => {
  const { data, error } = await supabase
    .from('users')
    .select('role')
    .eq('email', email)
    .single();

  return { role: data?.role, error };
};

// Create user profile row (after auth signup confirmation)
export const createUserProfile = async (user, additionalFields = {}) => {
  const { data, error } = await supabase.from('users').insert([
    {
      id: user.id,
      email: user.email,
      ...additionalFields,
    },
  ]);

  return { data, error };
};

// Get full user profile
export const getUserProfile = async () => {
  const user = await fetchAuthUser();
  if (!user) return { data: null, error: 'No user found' };

  const { data, error } = await supabase
    .from('users')
    .select('id, email, name, phone')
    .eq('id', user.id)
    .single();

  return { data, error };
};

// Update user profile
export const updateUserProfile = async ({ name, phone }) => {
  const user = await fetchAuthUser();
  if (!user) return { data: null, error: 'No user found' };

  const { data, error } = await supabase
    .from('users')
    .update({ name, phone })
    .eq('id', user.id);

  return { data, error };
};

// confirm users status
export const isUserConfirmed = async () => {
  const user = await fetchAuthUser();
  return user?.confirmed_at !== null;
};