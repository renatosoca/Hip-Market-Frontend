import { GetServerSideProps, NextPage } from 'next';
import { MdOutlineCreditCardOff, MdCreditScore } from 'react-icons/md';

import { AdminLayout, CartList, CartOrderSummary } from '@/components';
import { IOrder } from '@/interfaces';
import { hipMarketApi } from '@/apis';

interface Props {
  order: IOrder;
}

const OrderPage: NextPage<Props> = ({ order }) => {
  return (
    <AdminLayout title='Resumen de la orden 1224131' pageDescription='Resumen de la orden'>
      <section className='max-w-[37.5rem] 2lg:max-w-[75rem] mx-auto px-4 2lg:px-10 pt-6'>
        <div className='flex justify-between items-start'>
          <h2 className='font-Gotham font-semibold text-2xl 2lg:text-3xl pb-6'>Orden: {order._id}</h2>

          {
            order.isPaid ? (
              <div className='flex items-center gap-2 w-max px-4 py-1 text-green-500 font-medium border border-green-500 rounded-full'>
                <MdCreditScore className='text-2xl' />
                Orden pagada
              </div>
            ) : (
              <div className='flex items-center gap-2 w-max px-4 py-1 text-red-500 font-medium border border-red-500 rounded-full'>
                <MdOutlineCreditCardOff className='text-2xl' />
                Pendiente de Pago
              </div>
            )
          }
        </div>

        <div className='2lg:grid 2lg:grid-cols-12'>
          <div className='border-t-2 2lg:border-0 pt-2 2lg:pt-6 2lg:col-span-6'>
            <CartList products={order.orderItems} />
          </div>

          <div className='mt-6 2lg:mt-0 border-t-2 2lg:border-0 2lg:pl-8 2lg:col-span-6'>
            <div className='2lg:max-w-md 2lg:ml-auto pt-6 2lg:p-8 text-gray-600 text-[.95rem] font-medium 2lg:shadow-2xl rounded'>
              <div className='text-[1.1rem] font-Gotham pb-2 font-medium text-black'>
                <h2>Resumen ({order.numberOfProducts} {order.numberOfProducts > 1 ? 'productos' : 'producto'})</h2>
              </div>

              <div className='flex justify-between items-start text-base pb-4'>
                <div className='leading-5'>
                  <h3 className='text-gray-400 pb-1'>Pago como usuario</h3>
                  <p>Reanto soca</p>
                  <p>rerwe@rersd.com</p>
                </div>
              </div>

              <div className='flex justify-between items-start pb-4'>
                <div className='leading-5'>
                  <h3 className='text-gray-400 pb-1'>Dirección de envío</h3>
                  <p>{order.shippingAddress.name} {order.shippingAddress.lastname}</p>
                  <p>{order.shippingAddress.address} {order.shippingAddress.address2 ? `, ${order.shippingAddress.address2}` : ''}</p>
                  <p>{order.shippingAddress.city} {order.shippingAddress.zip}</p>
                  <p>{order.shippingAddress.country}</p>
                  <p>{order.shippingAddress.phone}</p>
                </div>
              </div>

              <div className='pb-4'>
                <button>
                  Agregar código promocional
                </button>
              </div>

              <CartOrderSummary
                orderValues={{
                  numberOfProducts: order.numberOfProducts,
                  subTotal: order.subTotal,
                  tax: order.tax,
                  total: order.total,
                }}
              />

              {
                order.isPaid ? (
                  <div className='flex items-center gap-2 w-max px-4 py-1 text-green-500 font-medium border border-green-500 rounded-full'>
                    <MdCreditScore className='text-2xl' />
                    Orden pagada
                  </div>
                ) : (
                  <div className='flex items-center gap-2 w-max px-4 py-1 text-red-500 font-medium border border-red-500 rounded-full'>
                    <MdOutlineCreditCardOff className='text-2xl' />
                    Pendiente de Pago
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { id = '' } = params as { id: string };

  //Validar la sesion del usuario

  const { data } = await hipMarketApi.get<IOrder>(`/order/${id}`);

  if (!data) {
    return {
      redirect: {
        destination: '/admin/orders',
        permanent: false,
      }
    }
  }

  return {
    props: {
      order: data
    }
  }
}

export default OrderPage