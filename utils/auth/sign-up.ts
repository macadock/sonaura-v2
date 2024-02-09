'use server';

import { createClient } from '@/utils/supabase/server';
import { getUrl } from '@/utils/url';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const handleSignUp = async (formData: FormData) => {
  'use server';

  const origin = getUrl().origin;

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return redirect("/login?message=Erreur lors de l'inscription");
  }

  return redirect('/login?message=Vérifiez vos emails pour continuer');
};
