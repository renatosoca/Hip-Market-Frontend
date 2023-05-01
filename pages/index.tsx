import { HomeHeroSlide, ProductList, ShopLayout } from '@/components';
import { useProducts } from '@/hooks';

const imagesHero = ['hero-1.avif', 'hero-2.avif', 'hero-1.avif'];

export default function HomePage() {

  const { products, isLoading } = useProducts('/products');

  return (
    <ShopLayout title='Home' pageDescription='Todos los productos con la mejor calidad' isHome >
      <section className='h-screen relative'>
        <HomeHeroSlide images={imagesHero} />
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
