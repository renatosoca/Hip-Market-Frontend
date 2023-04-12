import { ShopLayout } from '@/components'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ShopLayout title='Home' pageDescription='Todos los productos con la mejor calidad'>
      <main>
        Cuerpo
      </main>
    </ShopLayout>
  )
}
