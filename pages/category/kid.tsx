import { ProductList, ShopLayout } from '@/components';
import { useProducts } from '@/hooks';

const KidPage = () => {

  const { products, isLoading } = useProducts('/products?gender=kid');

  return (
    <ShopLayout title='Niños' pageDescription='Productos para niños'>
      <section className='flex justify-center px-4'>
        <div className='max-w-7xl'>
          {
            isLoading
              ? <p>Cargando...</p>
              : <ProductList products={products} />
          }
        </div>
      </section>
    </ShopLayout>
  )
}

export default KidPage;