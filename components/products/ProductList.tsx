import { FC } from 'react';
import { IProduct } from '@/interfaces';
import { ProductCard } from './ProductCard';

interface Props {
  products: IProduct[]
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {
        products.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))
      }
    </div>
  )
}
