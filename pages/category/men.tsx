import { ProductList, ShopLayout } from '@/components'
import { useProducts } from '@/hooks';

const men = () => {

  const { products, isLoading } = useProducts('products?gender=men');

  return (
    <ShopLayout title='Hombres' pageDescription='Productos para hombres'>
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

export default men