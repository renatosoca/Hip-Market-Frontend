import { ItemQuantity, ListSize, ProductSlideImage, ShopLayout } from '@/components';
import { MdOutlineAddCircleOutline, MdOutlineRemoveCircleOutline } from 'react-icons/md';

import 'react-slideshow-image/dist/styles.css'
import { initialData } from '@/database/products';

const product = initialData.products[0];

const slug = () => {
  return (
    <ShopLayout title='Product 1' pageDescription='Product has brow'>
      <section className='w-full h-full'>
        <div className='grid grid-cols-12 gap-3 px-8'>
          <div className='col-span-8'>
            <div className='px-4 py-2'>
              <ProductSlideImage images={ product.images } />
            </div>
          </div>

          <div className='col-span-4'>
            <h2 className='font-semibold text-4xl'>{ product.title }</h2>
            <p className='font-medium text-xl'>{ `S/ ${product.price}` }</p>

            <div className=''>
              <div>
                <p>Tamaño</p>
                <ListSize sizes={product.sizes} />
              </div>  {/* END SIZE */}

              <div>
                <p>Cantidad</p>
                <ItemQuantity />
              </div>  {/* END QUANTITY */}
            </div>

            <button
              className='block w-full bg-blue-600 text-white py-2 px-4 rounded font-semibold'
            >
              Agregar al carrito
            </button>

            <div>
              <p>{ product.description }</p>
            </div>
          </div>
        </div>
      </section>
    </ShopLayout>
  )
}

export default slug