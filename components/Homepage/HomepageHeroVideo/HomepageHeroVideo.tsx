import { Button } from '@/components/ui/button';
import Link from 'next/link';
import zod from 'zod';

export type HomepageHeroVideoProps = {
  content: zod.infer<typeof HomepageHeroVideoSchema>;
};

export const HomepageHeroVideoSchema = zod.object({
  title: zod.string(),
  subtitle: zod.string(),
  video: zod.object({
    url: zod.string(),
    poster: zod.string(),
  }),
  button: zod.object({
    label: zod.string(),
    href: zod.string(),
  }),
});

export const HomepageHeroVideo = ({ content }: HomepageHeroVideoProps) => {
  const parse = HomepageHeroVideoSchema.safeParse(content);

  if (!parse.success) {
    return null;
  }

  const { title, subtitle, button, video } = content;
  return (
    <div className="rounded-lg overflow-hidden relative xl:max-w-7xl xl:m-auto">
      <video autoPlay loop muted poster={video.poster} className="rounded-lg">
        <source src={video.url} type="video/mp4" />
      </video>
      <div className="right-0 top-0 bottom-0 md:bg-slate-100 md:bg-opacity-70 md:rounded-lg mt-4 md:m-4 md:w-1/2 md:absolute md:p-4 md:pl-10 md:text-right font-medium flex flex-col gap-4 xl:gap-10">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-primary leading-snug font-semibold tracking-wider">
          {title}
        </h1>
        <p className="text-md md:text-lg lg:text-xl font-light">{subtitle}</p>
        <div className="flex md:justify-end mt-8 md:mt-0">
          {button && (
            <Button size={'lg'}>
              <Link href={button.href}>{button.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
