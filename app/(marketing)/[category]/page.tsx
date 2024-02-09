import { categories, products } from '@/app/(marketing)/mocks';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  params: { category: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const id = params.category;

  const category = categories.find((category) => category.slug === id);

  return {
    title: category?.name,
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default function Category({ params }: { params: { category: string } }) {
  const category = categories.find(
    (category) => category.slug === params.category,
  );

  if (!category) {
    return notFound();
  }

  const productList = products.filter(
    (product) => product.categoryId === category.id,
  );

  return (
    <>
      <h1 className="text-center text-6xl font-light my-8">{category?.name}</h1>
      <div className="flex justify-center gap-8 mb-8">
        {productList.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/${category?.slug}/${product.slug}`}
              className="rounded-xl p-4 flex flex-col justify-end items-center gap-3 w-1/4"
            >
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
                  <p className="text-sm line-clamp-2">{product.description}</p>

                  <p className="text-primary">{`${product.price} €`}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
}
