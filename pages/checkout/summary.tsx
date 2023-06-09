import Link from 'next/link';
import { CartList, CartOrderSummary, ShopLayout } from '@/components'
import { useAuth, useCart } from '@/hooks';
import { countries } from '@/utils';
import { useState } from 'react';
import { useRouter } from 'next/router';

const SummaryPage = () => {

  const router = useRouter();

  const { user } = useAuth();
  const { shippingAddress, createOrder } = useCart();

  const [isPosting, setIsPosting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!shippingAddress) return <></>;

  const { name, lastname, address, city, country, phone, zip, address2 = '' } = shippingAddress;

  const handleCreateOrder = async () => {
    setIsPosting(true);

    const { hasError, message } = await createOrder();
    console.log(message)
    if (hasError) {
      setIsPosting(false);
      setErrorMessage(message);
      return;
    }

    router.replace(`/orders/${message}`);
  }

  return (
    <ShopLayout title='Resumen del pedido' pageDescription='Resumen de la orden'>
      <section className='max-w-[37.5rem] 2lg:max-w-[75rem] mx-auto px-4 2lg:px-10 pt-6'>
        <h2 className='font-Gotham font-semibold text-2xl 2lg:text-3xl'>Carrito</h2>

        <div className='2lg:grid 2lg:grid-cols-12'>
          <div className='border-t-2 2lg:border-0 pt-2 2lg:pt-12 2lg:col-span-6'>
            <CartList />
          </div>

          <div className='mt-6 2lg:mt-0 border-t-2 2lg:border-0 2lg:pt-6 2lg:pl-8 2lg:col-span-6'>
            <div className='2lg:max-w-md 2lg:ml-auto pt-6 2lg:p-8 text-gray-600 text-[.95rem] font-medium 2lg:shadow-2xl rounded'>
              <div className='text-[1.1rem] font-Gotham pb-2 font-medium text-black'>
                <h2>Resumen (3 productos)</h2>
              </div>

              <div className='flex justify-between items-start text-base pb-4'>
                <div className='leading-5'>
                  <h3 className='text-gray-400 pb-1'>Pago como usuario</h3>
                  <p>{user?.name} {user?.lastname}</p>
                  <p>{user?.email}</p>
                </div>
                <button>
                  Editar
                </button>
              </div>

              <div className='flex justify-between items-start pb-4'>
                <div className='leading-5'>
                  <h3 className='text-gray-400 pb-1'>Dirección de envío</h3>
                  <p>{name} {lastname}</p>
                  <p>{address}, {address2 ? address2 : ''}</p>
                  <p>{city} {zip}</p>
                  <p>{countries.find(coun => coun.code === country)?.name}</p>
                  <p>{phone}</p>
                </div>

                <Link href='/checkout/address'>
                  Editar
                </Link>
              </div>

              <div className='pb-4'>
                <button>
                  Agregar código promocional
                </button>
              </div>

              <CartOrderSummary />

              <div>
                <button
                  onClick={handleCreateOrder}
                  className='block bg-blue-600 hover:bg-blue-700 max-w-xl w-full py-2 px-4 rounded text-white font-semibold transition-colors'
                  disabled={isPosting}
                >
                  Confirmar Orden
                </button>
              </div>

              {!!errorMessage && (
                <div className='bg-red-500 px-4 py-1'>{errorMessage}</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </ShopLayout>
  )
}

export default SummaryPage