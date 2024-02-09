import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import zod from 'zod';

export type HomepageAdvicesProps = {
  content: zod.infer<typeof HomepageAdvicesSchema>;
};

export const HomepageAdvicesSchema = zod.object({
  image: zod.object({
    alt: zod.string(),
    url: zod.string(),
  }),
  title: zod.string(),
  button: zod.object({
    href: zod.string(),
    label: zod.string(),
  }),
  subtitle: zod.string(),
});

export const HomepageAdvices = ({ content }: HomepageAdvicesProps) => {
  const parse = HomepageAdvicesSchema.safeParse(content);

  if (!parse.success) {
    return null;
  }
  const { title, subtitle, button, image } = content;
  return (
    <div className=" bg-slate-200 -mx-4 md:-mx-8">
      <div className="flex flex-row gap-6 items-center p-4 mb-14 xl:max-w-7xl xl:m-auto">
        <div className="flex flex-col gap-4">
          <p className="text-2xl md:text-3xl font-semibold tracking-wider">
            {title}
          </p>
          <p className="text-lg font-light">{subtitle}</p>
          <div className="flex">
            {button && (
              <Button size={'lg'}>
                <Link href={button.href}>{button.label}</Link>
              </Button>
            )}
          </div>
        </div>
        <Image
          src={image.url}
          alt={image.alt}
          width={2048}
          height={1365}
          className="hidden md:block w-1/2 object-cover -mt-20 -mb-36"
        />
      </div>
    </div>
  );
};
