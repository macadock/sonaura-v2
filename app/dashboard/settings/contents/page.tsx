import { PagesTable } from '@/app/dashboard/settings/contents/components/PagesTable';
import { getComponentsList } from '@/components/ComponentsSelector';
import { getPages } from '@/utils/data';
import { cookies } from 'next/headers';

const ContentSettingsPage = async () => {
  const cookiesStore = cookies();
  const { data } = await getPages(cookiesStore);

  if (!data) {
    return null;
  }

  return <PagesTable pages={data} />;
};

export default ContentSettingsPage;
