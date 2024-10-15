import { createClient } from "@supabase/supabase-js";
import { AuthProps } from "../types/supabaseUtils";

const supabaseUrl = import.meta.env.VITE_SUPABASE_BASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const signUp = async ({ email, password, username }: AuthProps) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });

  if (error) {
    console.error(error);
    return { error };
  }

  return { data };
};

export const login = async ({ email, password }: AuthProps) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error);
    return { error };
  }

  return { data };
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
    return { error };
  }
  localStorage.removeItem("userId");
  localStorage.removeItem("username");
  localStorage.removeItem("token");
};

export const getUserData = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error(error);
    return { error };
  }

  return data.user.user_metadata;
};
