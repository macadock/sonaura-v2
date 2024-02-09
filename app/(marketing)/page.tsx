import { categories, products } from '@/app/(marketing)/mocks';
import {
  HomepageAdvices,
  HomepageCategories,
  HomepageHeroVideo,
  HomepagePeople,
  HomepageProducts,
} from '@/components/Homepage';

import { HomePageContent, getPage } from '@/utils/data';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Distributeur Bang & Olufsen Auvergne Rhône-Alpes | Sonaura',
};

export default async function Home() {
  const cookiesStore = cookies();
  const { data } = await getPage('home', cookiesStore);

  if (!data || !data.content) {
    return null;
  }

  const content = data.content as HomePageContent;

  return (
    <div className="flex flex-col gap-12 p-4 md:p-8">
      <HomepageHeroVideo content={content['hero']} />

      <HomepageCategories content={content['categories']} />

      <HomepagePeople content={content['people']} />

      <HomepageAdvices content={content['advices']} />

      <HomepageProducts id="pre-owned" content={content['preOwned']} />

      <HomepageProducts id="products" content={content['new']} />

      <div className="bg-primary w-full text-white rounded-lg p-4 md:px-8 md:py-14 text-center flex flex-col justify-center items-center gap-6 xl:max-w-7xl xl:m-auto">
        <h2 className="text-xl md:text-3xl">
          Inscrivez-vous à la newsletter Sonaura
        </h2>
        <p className="text-base md:text-xl">Tenez-vous informé</p>

        <form className="flex gap-2 w-full md:w-1/2">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="border border-white text-sm md:text-base p-4 rounded-lg w-full text-white placeholder:text-white bg-primary"
          />
        </form>
      </div>
    </div>
  );
}
