import { ProductList, ShopLayout } from '@/components'
import { useProducts } from '@/hooks';

const WomenPage = () => {

  const { products, isLoading } = useProducts('products?gender=women');

  return (
    <ShopLayout title='Mujeres' pageDescription='Productos para mujeres'>
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

export default WomenPage;