import { CartEmpty, CartList, CartOrderSummary, ShopLayout } from '@/components'
import React from 'react';

const CartPage = () => {
  return (
    <ShopLayout title='Tu carrito' pageDescription='Carrito de comprs de los productos'>
      <section className='max-w-[37.5rem] 2lg:max-w-[75rem] mx-auto px-4 2lg:px-10 pt-6'>
        <h2 className='font-Gotham font-semibold text-2xl 2lg:text-3xl'>Carrito</h2>

        {/* <CartEmpty /> */}

        <div className='2lg:grid 2lg:grid-cols-12'>
          <div className='border-t-2 2lg:border-0 pt-2 2lg:pt-12 2lg:col-span-6'>
            <CartList editable />
          </div>

          <div className='mt-6 2lg:mt-0 border-t-2 2lg:border-0 2lg:pt-6 2lg:pl-8 2lg:col-span-6'>
            <CartOrderSummary />
          </div>
        </div>
      </section>
    </ShopLayout>
  )
}

export default CartPage