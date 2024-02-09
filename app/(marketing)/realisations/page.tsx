import { Metadata } from 'next';
import Image from 'next/image';

import './realisations.css';

export const metadata: Metadata = {
  title: 'Réalisations | Sonaura',
};

type RealizationItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

const items: RealizationItem[] = [
  {
    id: 'b41da2d2-bfa4-4134-bf97-ecb93d459fc2',
    title: 'Beolab 28',
    description:
      "Beolab 28, une rencontre entre la puissance et l'équilibre pour une expérience audiophile de pointe.",
    imageUrl:
      'https://omzwibopitojmqdieuml.supabase.co/storage/v1/object/public/installations/b41da2d2-bfa4-4134-bf97-ecb93d459fc2',
  },
  {
    id: '6e7c2954-e9d1-4dac-bfbe-8ebc3d50ba8e',
    title: 'Beovision Contour',
    description:
      'Le Beovision Contour 55" sur pied de sol vous offrira une expérience audiovisuelle unique.',
    imageUrl:
      'https://omzwibopitojmqdieuml.supabase.co/storage/v1/object/public/installations/6e7c2954-e9d1-4dac-bfbe-8ebc3d50ba8e',
  },
  {
    id: '6e7c2954-e9d1-4dac-bfbe-8ebc3d50ba8e',
    title: 'Beovision Contour',
    description:
      'Le Beovision Contour 55" sur pied de sol vous offrira une expérience audiovisuelle unique.',
    imageUrl:
      'https://omzwibopitojmqdieuml.supabase.co/storage/v1/object/public/installations/6e7c2954-e9d1-4dac-bfbe-8ebc3d50ba8e',
  },
  {
    id: '6e7c2954-e9d1-4dac-bfbe-8ebc3d50ba8e',
    title: 'Beovision Contour',
    description:
      'Le Beovision Contour 55" sur pied de sol vous offrira une expérience audiovisuelle unique.',
    imageUrl:
      'https://omzwibopitojmqdieuml.supabase.co/storage/v1/object/public/installations/6e7c2954-e9d1-4dac-bfbe-8ebc3d50ba8e',
  },
  {
    id: '6e7c2954-e9d1-4dac-bfbe-8ebc3d50ba8e',
    title: 'Beovision Contour',
    description:
      'Le Beovision Contour 55" sur pied de sol vous offrira une expérience audiovisuelle unique.',
    imageUrl:
      'https://omzwibopitojmqdieuml.supabase.co/storage/v1/object/public/installations/6e7c2954-e9d1-4dac-bfbe-8ebc3d50ba8e',
  },
  {
    id: '6e7c2954-e9d1-4dac-bfbe-8ebc3d50ba8e',
    title: 'Beovision Contour',
    description:
      'Le Beovision Contour 55" sur pied de sol vous offrira une expérience audiovisuelle unique.',
    imageUrl:
      'https://omzwibopitojmqdieuml.supabase.co/storage/v1/object/public/installations/6e7c2954-e9d1-4dac-bfbe-8ebc3d50ba8e',
  },
];

const Realizations = () => {
  return (
    <div className="flex flex-col">
      <div
        style={{
          backgroundImage:
            'url("https://omzwibopitojmqdieuml.supabase.co/storage/v1/object/public/marketing/installations_hero")',
          height: '50vh',
        }}
        className=" bg-cover flex flex-col justify-stretch items-stretch "
      >
        <div className="flex flex-col flex-grow justify-center items-center gap-6 h-full bg-black text-white bg-opacity-20 text-center p-4">
          <h2 className="text-3xl md:text-6xl font-medium uppercase">
            Nos réalisations
          </h2>
          <p className="text-lg md:text-xl">
            Vous aussi profitez d'une installation sur mesure.
          </p>
        </div>
      </div>

      <div
        id="realizations-container"
        className="p-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:max-w-7xl xl:m-auto"
      >
        {items.map((item, index) => (
          <div key={item.id} className="rounded-lg shadow-lg">
            <Image
              src={item.imageUrl}
              width={1080}
              height={1080}
              alt={item.title}
              loading={index <= 6 ? 'eager' : 'lazy'}
            />
            <div className="realizations-content bg-white p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realizations;
