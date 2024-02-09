import { categories, products } from '@/app/(marketing)/mocks';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export const getProducts = async () => {
  // const cookiesStore = cookies()
  // const supabase = createClient(cookiesStore);
  // const { data } = await supabase.from('products').select('*');
  // return data;
  return products;
};
