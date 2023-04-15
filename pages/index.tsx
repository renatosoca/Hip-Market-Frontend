import { HomeHeroSlide, ProductList, ShopLayout } from '@/components';
import { initialData } from '@/database/products';

export default function Home() {

  const { products } = initialData as any;
  return (
    <ShopLayout title='Home' pageDescription='Todos los productos con la mejor calidad' isHome >
      <section className='h-screen relative'>
        <HomeHeroSlide />
      </section>

      <section className='flex justify-center px-4'>
        <div className='max-w-7xl'>
          <ProductList products={ products } />
        </div>
      </section>
    </ShopLayout>
  )
}
