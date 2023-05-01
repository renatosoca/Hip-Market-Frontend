import { CartList, CartOrderSummary, ShopLayout } from '@/components'
import { initialData } from '@/database/products';

const products: any = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
];

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen del pedido' pageDescription='Resumen de la orden'>
      <section className='max-w-[37.5rem] 2lg:max-w-[75rem] mx-auto px-4 2lg:px-10 pt-6'>
        <h2 className='font-Gotham font-semibold text-2xl 2lg:text-3xl'>Carrito</h2>

        {/* <CartEmpty /> */}

        <div className='2lg:grid 2lg:grid-cols-12'>
          <div className='border-t-2 2lg:border-0 pt-2 2lg:pt-12 2lg:col-span-6'>
            <CartList products={products} />
          </div>

          <div className='mt-6 2lg:mt-0 border-t-2 2lg:border-0 2lg:pt-6 2lg:pl-8 2lg:col-span-6'>
            <div className='2lg:max-w-md 2lg:ml-auto pt-6 2lg:p-8 text-gray-600 text-[.95rem] font-medium 2lg:shadow-2xl rounded'>
              <div className='text-[1.1rem] font-Gotham pb-2 font-medium text-black'>
                <h2>Resumen (3 productos)</h2>
              </div>

              <div className='flex justify-between items-start text-base pb-4'>
                <div className='leading-5'>
                  <h3 className='text-gray-400 pb-1'>Pago como usuario</h3>
                  <p>Reanto soca</p>
                  <p>rerwe@rersd.com</p>
                </div>
                <button>
                  Editar
                </button>
              </div>

              <div className='flex justify-between items-start pb-4'>
                <div className='leading-5'>
                  <h3 className='text-gray-400 pb-1'>Dirección de envío</h3>
                  <p>Reanto soca</p>
                  <p>Lima</p>
                  <p>Lima, Ate, KY 154</p>
                  <p>Perú</p>
                  <p>977 109 379</p>
                </div>

                <button>
                  Editar
                </button>
              </div>

              <div className='pb-4'>
                <button>
                  Agregar código promocional
                </button>
              </div>

              <CartOrderSummary />

              <div>
                <button
                  className='block bg-blue-600 hover:bg-blue-700 max-w-xl w-full py-2 px-4 rounded text-white font-semibold transition-colors'
                >
                  Confirmar Orden
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ShopLayout>
  )
}

export default SummaryPage