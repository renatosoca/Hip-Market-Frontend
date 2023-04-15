import Image from 'next/image';
import Link from 'next/link';
import { HomeHeroSlide, ProductList, ShopLayout } from '@/components';
import { initialData } from '@/database/products';
import { Slide } from 'react-slideshow-image';

export default function Home() {

  const { products } = initialData as any;
  return (
    <ShopLayout title='Home' pageDescription='Todos los productos con la mejor calidad'>
      <section className='h-screen relative'>
        <HomeHeroSlide images={ products[0].images} />
      </section>

      <section className='flex justify-center px-4'>
        <div className='max-w-7xl'>
          <ProductList products={ products } />
        </div>
      </section>
    </ShopLayout>
  )
}
