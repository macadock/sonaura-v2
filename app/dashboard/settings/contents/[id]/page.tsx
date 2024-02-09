import {
  ComponentConfig,
  getComponentsList,
} from '@/components/ComponentsSelector';
import { ContentEditor } from '@/components/ContentEditor';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export const PageEditor = async ({ params }: { params: { id: string } }) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase
    .from('pages')
    .select('*')
    .eq('id', params.id)
    .single();
  const componentsList = getComponentsList();
  return (
    <ContentEditor
      componentsList={componentsList}
      existingData={data?.content as ComponentConfig[]}
    />
  );
};

export default PageEditor;
