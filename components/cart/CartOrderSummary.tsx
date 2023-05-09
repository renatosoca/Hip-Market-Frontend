import { useCart } from "@/hooks"
import { formatPrice } from "@/utils";
import { FC } from "react";

interface Props {
  orderValues?: {
    numberOfProducts: number;
    subTotal: number;
    tax: number;
    total: number;
  }
}

export const CartOrderSummary: FC<Props> = ({ orderValues }) => {

  const { numberOfProducts, subTotal, tax, total } = useCart();

  const summaryValues = orderValues ? orderValues : { numberOfProducts, subTotal, tax, total };

  return (
    <>
      <div className='flex justify-between pb-1 last-of-type:pb-0'>
        <p>Nro. Productos</p>
        <p>{summaryValues.numberOfProducts} {summaryValues.numberOfProducts > 1 ? 'Productos' : 'Producto'}</p>
      </div>

      <div className='flex justify-between pb-1 last-of-type:pb-0'>
        <p>SubTotal</p>
        <p>{formatPrice(summaryValues.subTotal)}</p>
      </div>

      <div className='flex justify-between pb-0 last-of-type:pb-0'>
        <p>Impuestos {`(${Number(process.env.NEXT_PUBLIC_TAX_RATE || 0) * 100}%)`}</p>
        <p>{formatPrice(summaryValues.tax)}</p>
      </div>

      <div className='flex justify-between text-2xl text-black font-bold font-Gotham py-4'>
        <p>Total</p>
        <p>{formatPrice(summaryValues.total)}</p>
      </div>
    </>
  )
}
