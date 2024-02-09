import { categories } from '@/app/(marketing)/mocks';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export const getCategories = async () => {
  // const cookiesStore = cookies();
  // const supabase = createClient(cookieStore);
  // const { data } = await supabase.from('categories').select('*');
  // return data;
  return categories;
};
