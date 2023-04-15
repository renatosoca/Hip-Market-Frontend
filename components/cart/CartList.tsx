import { initialData } from '@/database/products';
import { FC } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { ItemQuantity } from '../ui';

interface Props {
  editable?: boolean;
}

const products = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
];

export const CartList: FC<Props> = ({ editable = false }) => {
  return (
    <>
      {
        products.map( product => (
          <div key={ product.slug } className='flex pt-2 pb-8 last-of-type:pb-0 items-center text-gray-500'>
            <div className='max-w-[7rem] max-h-[7rem]'>
              <img 
                className='my-auto object-cover' 
                src={`/products/${product.images[0]}`} 
                alt={product.title} 
                width={80} 
                height={80} 
              />
            </div>

            <div className='flex-1 flex flex-col gap-1 pl-2'>
              <div className='flex justify-between items-start gap-1'>
                <h3 className='text-sm text-gray-600 font-semibold font-Jakarta'>{ product.title}</h3>

                {
                  editable && (
                    <button
                      className='block rounded-full p-[.2rem] hover:bg-red-100 transition-colors text-red-400'
                    >
                      <MdOutlineClose className='text-xl' />
                    </button>
                  )
                }
              </div>

              <p className='text-sm'>
                Talla: <span className='font-semibold text-gray-600' >M</span>
              </p>

              <div className='flex justify-between items-center text-gray-600 font-sans' >
                <p className='font-semibold'>{`S/ ${product.price}`}</p>
                {
                  editable
                  ? <ItemQuantity />
                  : <p className='font-semibold'>x 1</p>
                }
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
