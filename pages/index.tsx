import { ShopLayout } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <ShopLayout title='Home' pageDescription='Todos los productos con la mejor calidad'>
      <main className='h-screen'>
        <div className='h-full'>
          <Image
            className='w-full h-full object-cover'
            src='https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Chill_banner_web.jpg'
            alt='Tesla'
            width={ 2000 }
            height={ 2000 }
            priority
          />
        </div>
      </main>
    </ShopLayout>
  )
}
