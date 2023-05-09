import { CartEmpty, CartList, CartOrderSummary, ShopLayout } from '@/components';
import { useCart } from '@/hooks';
import Link from 'next/link';

const CartPage = () => {

  const { cart } = useCart();

  return (
    <ShopLayout title='Tu carrito' pageDescription='Carrito de comprs de los productos'>
      <section className='max-w-[37.5rem] 2lg:max-w-[75rem] mx-auto px-4 2lg:px-10 pt-6'>
        <h2 className='font-Gotham font-semibold text-2xl 2lg:text-3xl'>Carrito</h2>

        {
          cart.length === 0 ? (
            <CartEmpty />
          ) : (
            <div className='2lg:grid 2lg:grid-cols-12'>
              <div className='border-t-2 2lg:border-0 pt-2 2lg:pt-12 2lg:col-span-6'>
                <CartList editable />
              </div>

              <div className='mt-6 2lg:mt-0 border-t-2 2lg:border-0 2lg:pt-6 2lg:pl-8 2lg:col-span-6'>
                <div className='2lg:max-w-md 2lg:ml-auto pt-6 2lg:p-8 text-gray-600 text-[.95rem] font-medium 2lg:shadow-2xl rounded'>
                  <div className='text-[1.4rem] font-Gotham pb-2 font-medium text-black'>
                    <h2>Resumen de compra</h2>
                  </div>

                  <CartOrderSummary />

                  <div className='absolute 2lg:relative bottom-0 right-0 left-0 py-4 2lg:py-0 px-4 2lg:px-0 2lg:mt-2 w-full bg-white 2lg:bg-inherit flex justify-center shadow-2xl 2lg:shadow-none shadow-black'>
                    <Link
                      href='/checkout/address'
                      className='block text-center bg-blue-600 hover:bg-blue-700 max-w-xl w-full py-2 px-4 rounded text-white font-semibold transition-colors'
                    >
                      CheckOut
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        }


      </section>
    </ShopLayout>
  )
}

export default CartPage