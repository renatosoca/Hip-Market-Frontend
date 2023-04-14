import { ProductList, ShopLayout } from '@/components';
import { initialData } from '@/database/products';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  const { products } = initialData as any;

  return (
    <ShopLayout title='Home' pageDescription='Todos los productos con la mejor calidad'>
      <section className='h-screen relative'>
        <div className='h-full'>
          <Image
            className='w-full h-full object-cover'
            src='https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Chill_banner_web.jpg'
            alt='Tesla'
            width={ 2000 }
            height={ 2000 }
            priority
          />

          <div className='absolute bottom-24 text-white w-full flex flex-col items-center px-4 font-Jakarta font-bold text-center'>
            <h2 className='text-3xl 1sm:text-5xl pb-3'>Estilos Modernos</h2>
            <h3 className='pb-8 1sm:text-xl'>Modelos reconfortantes de la ultima temporada</h3>
            <Link 
              href='/'
              className='bg-white text-gray-500 hover:text-gray-700 rounded px-4 py-3 w-full 2cs:w-max 2cs:px-24 text-center font-semibold transition-colors'
            >
              Comprar ahora
            </Link>
          </div>
        </div>
      </section>

      <main>
        <div className='max-w-7xl mx-auto'>
          <ProductList products={ products } />
        </div>
      </main>
    </ShopLayout>
  )
}
