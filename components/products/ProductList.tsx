import { IProduct } from '@/interfaces'
import { FC } from 'react'
import { ProductCard } from './ProductCard'

interface Props {
  products: IProduct[]
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <div className='flex flex-wrap justify-center'>
    {
      products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))
    }
  </div>
  )
}
