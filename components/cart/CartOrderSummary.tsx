import { useCart } from "@/hooks"
import { formatPrice } from "@/utils";


export const CartOrderSummary = () => {

  const { numberOfProducts, subTotal, tax, total } = useCart();

  return (
    <>
      <div className='flex justify-between pb-1 last-of-type:pb-0'>
        <p>Nro. Productos</p>
        <p>{numberOfProducts} {numberOfProducts > 1 ? 'Productos' : 'Producto'}</p>
      </div>

      <div className='flex justify-between pb-1 last-of-type:pb-0'>
        <p>SubTotal</p>
        <p>{formatPrice(subTotal)}</p>
      </div>

      <div className='flex justify-between pb-0 last-of-type:pb-0'>
        <p>Impuestos {`(${Number(process.env.NEXT_PUBLIC_TAX_RATE || 0) * 100}%)`}</p>
        <p>{formatPrice(tax)}</p>
      </div>

      <div className='flex justify-between text-2xl text-black font-bold font-Gotham py-4'>
        <p>Total</p>
        <p>{formatPrice(total)}</p>
      </div>
    </>
  )
}
