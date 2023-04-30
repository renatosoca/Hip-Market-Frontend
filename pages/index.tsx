import { HomeHeroSlide, ProductList, ShopLayout } from '@/components';
import { useProducts } from '@/hooks';
import useSWR from 'swr';

const fetcher = (...args: [key: string]) => fetch(...args).then((res) => res.json());

export default function HomePage() {

  const { products, isError, isLoading } = useProducts('products');

  if (isError) return <div>failed to load</div>

  return (
    <ShopLayout title='Home' pageDescription='Todos los productos con la mejor calidad' isHome >
      <section className='h-screen relative'>
        <HomeHeroSlide />
      </section>

      <section className='flex justify-center px-4'>
        <div className='max-w-7xl'>
          {
            isLoading
              ? <p>Cargando</p>
              : <ProductList products={products} />
          }
        </div>
      </section>
    </ShopLayout>
  )
}
