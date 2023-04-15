

export const CartOrderSummary = () => {
  return (
    <div className='2lg:max-w-md 2lg:ml-auto pt-6 2lg:p-8 text-gray-600 text-[.95rem] font-medium 2lg:shadow-2xl rounded'>
      <div className='text-[1.4rem] font-Gotham pb-2 font-medium text-black'>
        <h2>Resumen de compra</h2>
      </div>

      <div className='flex justify-between pb-1 last-of-type:pb-0'>
        <p>Nro. Productos</p>
        <p>3 items</p>
      </div>

      <div className='flex justify-between pb-1 last-of-type:pb-0'>
        <p>SubTotal</p>
        <p>S/ 1825.12</p>
      </div>
      
      <div className='flex justify-between pb-0 last-of-type:pb-0'>
        <p>IGV (18%)</p>
        <p>S/ 1542.12</p>
      </div>
      
      <div className='flex justify-between text-2xl text-black font-bold font-Gotham py-4'>
        <p>Total</p>
        <p>S/ 1542.12</p>
      </div>

      <div className='absolute 2lg:relative bottom-0 right-0 left-0 py-4 2lg:py-0 px-4 2lg:px-0 2lg:mt-2 w-full bg-white 2lg:bg-inherit flex justify-center shadow-2xl 2lg:shadow-none shadow-black'>
        <button
          className='block bg-blue-600 hover:bg-blue-700 max-w-xl w-full py-2 px-4 rounded text-white font-semibold transition-colors'
        >
          CheckOut
        </button>
      </div>
    </div>
  )
}
