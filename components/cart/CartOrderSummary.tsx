

export const CartOrderSummary = () => {
  return (
    <>
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
    </>
  )
}
