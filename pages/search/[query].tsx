import { GetServerSideProps, NextPage } from 'next';
import { ProductList, ShopLayout } from '@/components';
import { apiProducts } from '@/apis';
import { IProduct } from '@/interfaces';

interface Props {
  products: IProduct[];
  isFoundProduct: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, isFoundProduct, query }) => {

  return (
    <ShopLayout title='Buscar producto' pageDescription='Todos los productos con la mejor calidad' >
      <section className='px-4'>
        <div>
          <h2 className='text-2xl font-bold font-Jakarta '>Busqueda de productos</h2>
          {
            isFoundProduct
              ? <h3>Resultados para <span className='text-blue-600 font-semibold'>{query}</span></h3>
              : <>
                <h3>No se encontraron resultados para <span className='text-blue-600 font-semibold'>{query}</span></h3>
              </>
          }
        </div>
        <div className='max-w-7xl flex justify-center'>
          <ProductList products={products} />
        </div>
      </section>
    </ShopLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { query = '' } = params as { query: string };
  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }
  let products = [];

  const { data } = await apiProducts.get(`/products/search/${query}`);
  const isFoundProduct = data.products.length > 0;
  products = data.products;

  if (!isFoundProduct) {
    /* const { data } = await apiProducts.get(`/products`); */
    const { data } = await apiProducts.get(`/products/search/Cybertruck`);
    products = data.products;
  }

  return {
    props: {
      products,
      isFoundProduct,
      query
    }
  }
}

export default SearchPage;