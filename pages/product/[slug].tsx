import { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ItemQuantity, ListSize, ProductSlideImage, ShopLayout } from '@/components';
import { IProductResponse, IProductSlugs, IProductBySlug, ICartProduct, ISizes } from '@/interfaces';
import { hipMarketApi } from '@/apis';
import { useCart } from '@/hooks';
import 'react-slideshow-image/dist/styles.css'
import { formatPrice } from '@/utils';

interface Props {
  product: IProductResponse;
}

const ProductPage: NextPage<Props> = ({ product }) => {

  const router = useRouter()
  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  });

  const { addProductToCart } = useCart();

  const handleSelectedSize = (size: ISizes) => {
    setTempCartProduct({
      ...tempCartProduct,
      size
    });
  }

  const handleUpdateQuantity = (quantity: number) => {
    setTempCartProduct({
      ...tempCartProduct,
      quantity
    });
  }

  const handleAddProductToCart = () => {
    if (!tempCartProduct.size) return;

    addProductToCart(tempCartProduct);
    router.push('/cart');
  }

  return (
    <ShopLayout title={product.title} pageDescription='Product has brow'>
      <section className='w-full h-full'>
        <div className='grid grid-cols-12 gap-3 px-8'>
          <div className='col-span-8'>
            <div className='px-4 py-2'>
              <ProductSlideImage images={product.images} />
            </div>
          </div>

          <div className='col-span-4'>
            <h2 className='font-semibold text-4xl'>{product.title}</h2>
            <p className='font-medium text-xl'>{formatPrice(product.price)}</p>

            <div className=''>
              <div>
                <p>Tamaño</p>
                <ListSize
                  sizes={product.sizes}
                  selectedSize={tempCartProduct.size}
                  handleSelectedSize={handleSelectedSize}
                />
              </div>  {/* END SIZE */}

              <div>
                {
                  product.inStock > 0 && (
                    <>
                      <p>Cantidad</p>
                      <ItemQuantity
                        currentValue={tempCartProduct.quantity}
                        handleUpdateQuantity={handleUpdateQuantity}
                        maxValue={product.inStock}
                      />
                    </>
                  )
                }
              </div>  {/* END QUANTITY */}
            </div>

            {
              product.inStock > 0 ?
                <button
                  className='block w-full bg-blue-600 text-white py-2 px-4 rounded font-semibold'
                  onClick={handleAddProductToCart}
                >
                  {
                    tempCartProduct.size
                      ? 'Agregar al carrito'
                      : 'Seleccione una talla'
                  }
                </button> :

                <button className='block w-full bg-red-600 text-white py-2 px-4 rounded font-semibold' >
                  Agotado
                </button>
            }

            <div>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </section>
    </ShopLayout>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {

  const { data } = await hipMarketApi.get<IProductSlugs>('/products/slugs');

  return {
    paths: data.slugs.map(({ slug }) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug = '' } = params as { slug: string };
  const { data, statusText } = await hipMarketApi.get<IProductBySlug>(`/products/${slug}`);
  console.log(data, statusText)
  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product: data.product
    },
    revalidate: 60 * 10
  }
}

export default ProductPage