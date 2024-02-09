import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professionnels | Sonaura',
};

type HeroSection = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

const sections: HeroSection[] = [
  {
    id: 'b41da2d2-bfa4-4134-bf97-ecb93d459fc2',
    title: 'Intégration',
    subtitle:
      'Tous nos produits communiquent entre eux et sont capables de jouer ensemble.',
    imageUrl:
      'https://omzwibopitojmqdieuml.supabase.co/storage/v1/object/public/marketing/professionnals/slide-1',
  },
  {
    id: '6e7c2954-e9d1-4dac-bfbe-8ebc3d50ba8e',
    title: 'Design',
    subtitle: 'Des matériaux de qualité, un design irréprochable.',
    imageUrl:
      'https://omzwibopitojmqdieuml.supabase.co/storage/v1/object/public/marketing/professionnals/slide-2',
  },
  {
    id: '6e7c2954-e9d1-4dac-bfbe-8ebc3d50ba8e',
    title: 'Élégance',
    subtitle: "Des produits pensés jusqu'aux moindres détails.",
    imageUrl:
      'https://omzwibopitojmqdieuml.supabase.co/storage/v1/object/public/marketing/professionnals/slide-3',
  },
];

const Professionals = () => {
  return (
    <div className="flex flex-col bg-slate-200">
      <div
        style={{
          height: 'calc(100vh - var(--headerHeight))',
        }}
        className="flex flex-col items-center justify-center gap-6 px-6 py-12 text-center"
      >
        <h1 className="text-4xl font-semibold">
          Intégrateur audiovisuel, architecte d’intérieur, hôtelier ou
          restaurateur ?
        </h1>
        <p className="text-xl font-light">
          Proposez des produits haut de gamme et design.
          <br /> Compatibilité KNX, Control 4 et Savant. <br />
          Nos équipes vous accompagnent dans tous vos projets, pour vous ou vos
          clients.
        </p>
        <div className="flex flex-col">
          <p>Frank VILIN</p>
          <a className="text-primary" href="tel:+33689210978">
            06 89 21 09 78
          </a>
          <a className="text-primary" href="mailto:frank@sonaura.fr">
            frank@sonaura.fr
          </a>
        </div>
      </div>

      {sections.map((section) => (
        <HeroSectionItem key={section.id} section={section} />
      ))}

      <div
        style={{
          height: 'calc(100vh - var(--headerHeight))',
        }}
        className="flex flex-col items-center justify-center gap-6 px-6 py-12 text-center"
      >
        <h1 className="text-4xl font-semibold">Contactez-nous</h1>
        <div className="flex flex-col">
          <p>Frank VILIN</p>
          <a className="text-primary" href="tel:+33689210978">
            06 89 21 09 78
          </a>
          <a className="text-primary" href="mailto:frank@sonaura.fr">
            frank@sonaura.fr
          </a>
        </div>
      </div>
    </div>
  );
};

type HeroSectionProps = {
  section: HeroSection;
};

const HeroSectionItem = ({ section }: HeroSectionProps) => {
  const { title, subtitle, imageUrl } = section;
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="min-h-screen bg-cover flex flex-col justify-stretch items-stretch bg-fixed"
    >
      <div className="flex flex-col flex-grow justify-center items-center gap-6 h-full bg-white bg-opacity-20 text-white text-center p-4">
        <h2 className="text-3xl md:text-6xl font-medium uppercase">{title}</h2>
        <p className="text-lg md:text-xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default Professionals;
