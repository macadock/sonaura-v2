import { Card, CardContent } from '@/components/ui/card';
import { getCategories, getProducts } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import zod from 'zod';

export type HomepageProductsProps = {
  id?: string;
  content: zod.infer<typeof HomepageProductsSchema>;
};

export const HomepageProductsSchema = zod.object({
  title: zod.string(),
  subtitle: zod.string(),
  description: zod.string(),
});

export const HomepageProducts = async ({
  id,
  content,
}: HomepageProductsProps) => {
  const parse = HomepageProductsSchema.safeParse(content);

  if (!parse.success) {
    return null;
  }
  const { title, subtitle, description } = content;
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <div
      id={id}
      className="flex flex-col gap-6 justify-center text-center md:px-9 xl:max-w-7xl xl:m-auto"
    >
      <div className="flex flex-col gap-2">
        <p className="uppercase text-base">{subtitle}</p>
        <h2 className="text-xl md:text-3xl font-semibold tracking-wider">
          {title}
        </h2>
        <p className="text-base md:text-xl font-light">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-flow-col md:auto-cols-fr gap-8">
        {products.map((product) => {
          const category = categories.find(
            (category) => category.id === product.categoryId,
          );
          return (
            <Link key={product.id} href={`/${category?.slug}/${product.slug}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="h-full flex flex-col justify-center items-center gap-3 p-6">
                  <Image
                    className="h-full w-full object-cover"
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                  />
                  <h3 className="text-lg font-medium">{product.name}</h3>

                  <p className="text-primary">{`${product.price} €`}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
