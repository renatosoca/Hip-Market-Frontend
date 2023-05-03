import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineClose } from 'react-icons/md';
import { ItemQuantity } from '../ui';
import { useCart } from '@/hooks';
import { ICartProduct } from '@/interfaces';

interface Props {
  editable?: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {

  const { cart, updateCartQuantity, deleteProductFromCart } = useCart();

  const handleNewCartQuantityValue = (product: ICartProduct, newQuantityValue: number) => {
    product.quantity = newQuantityValue;

    updateCartQuantity(product);
  }

  const handleDeleteProductFromCart = (product: ICartProduct) => {
    deleteProductFromCart(product);
  }

  return (
    <>
      {
        cart.map(product => (
          <div key={product.slug + product.size} className='flex pt-2 pb-8 last-of-type:pb-0 items-center text-gray-500'>
            <Link href={`/product/${product.slug}`} className='max-w-[7rem] max-h-[7rem]'>
              <Image
                className='my-auto object-cover'
                src={`/products/${product.images}`}
                alt={product.title}
                width={80}
                height={80}
                priority
              />
            </Link>

            <div className='flex-1 flex flex-col gap-1 pl-2'>
              <div className='flex justify-between items-start gap-1'>
                <h3 className='text-sm text-gray-600 font-semibold font-Jakarta'>{product.title}</h3>

                {
                  editable && (
                    <button
                      className='block rounded-full p-[.2rem] hover:bg-red-100 transition-colors text-red-400'
                      onClick={() => handleDeleteProductFromCart(product)}
                    >
                      <MdOutlineClose className='text-xl' />
                    </button>
                  )
                }
              </div>

              <p className='text-sm'>
                Talla: <span className='font-semibold text-gray-600' >{product.size}</span>
              </p>

              <div className='flex justify-between items-center text-gray-600 font-sans' >
                <p className='font-semibold'>{`S/ ${product.price}`}</p>
                {
                  editable
                    ? <ItemQuantity
                      currentValue={product.quantity}
                      maxValue={10}
                      handleUpdateQuantity={(newQuantity) => handleNewCartQuantityValue(product, newQuantity)}
                    />
                    : <p className='font-semibold'>{product.quantity} {product.quantity > 1 ? 'productos' : 'producto'}</p>
                }
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
