import Image from 'next/image';
import zod from 'zod';

export type HomepagePeopleProps = {
  content: zod.infer<typeof HomepagePeopleSchema>;
};

export const HomepagePeopleSchema = zod.object({
  title: zod.string(),
  images: zod.array(
    zod.object({
      id: zod.string(),
      alt: zod.string(),
      url: zod.string(),
    }),
  ),

  subtitle: zod.string(),
});

export const HomepagePeople = ({ content }: HomepagePeopleProps) => {
  const parse = HomepagePeopleSchema.safeParse(content);

  if (!parse.success) {
    return null;
  }
  const { title, subtitle, images } = content;
  const image1 = images[0];
  const image2 = images[1];
  return (
    <div className="flex flex-col md:flex-row rounded-lg overflow-hidden bg-primary text-white xl:max-w-7xl xl:m-auto">
      {image1 && (
        <Image
          src={image1.url}
          alt={image1.alt}
          width={2048}
          height={1365}
          loading="eager"
          className="md:w-1/3 object-cover"
        />
      )}
      <div className="flex flex-col gap-2 justify-center items-center md:w-1/3 p-4 text-center">
        <h2 className="font-medium text-2xl md:text-3xl tracking-wider">
          {title}
        </h2>
        <p>{subtitle}</p>
      </div>
      {image2 && (
        <Image
          src={image2.url}
          alt={image2.alt}
          width={2048}
          height={1365}
          loading="eager"
          className="md:w-1/3 object-cover"
        />
      )}
    </div>
  );
};
