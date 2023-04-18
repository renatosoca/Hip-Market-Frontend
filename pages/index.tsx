import { HomeHeroSlide, ProductList, ShopLayout } from '@/components';
import useSWR from 'swr';
import { IProduct } from '@/interfaces';

const fetcher = (...args: [key: string]) => fetch(...args).then((res) => res.json());

export default function HomePage() {

  const { data, error, isLoading } = useSWR('http://localhost:4003/api/products', fetcher);
  
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <ShopLayout title='Home' pageDescription='Todos los productos con la mejor calidad' isHome >
      <section className='h-screen relative'>
        <HomeHeroSlide />
      </section>

      <section className='flex justify-center px-4'>
        <div className='max-w-7xl'>
          <ProductList products={ data.products } />
        </div>
      </section>
    </ShopLayout>
  )
}
