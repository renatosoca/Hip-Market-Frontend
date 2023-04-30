import { FC, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/interfaces';

interface Props {
  product: Product
}

export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered ?
      `/products/${product.images[1]}` :
      `/products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href='/product/slug' >
        <Image
          className='animate-fadeIn'
          src={productImage}
          alt={product.title}
          width={400}
          height={400}
        />
      </Link>
      <p>{product.title}</p>
      <small>{product.price}</small>
    </div>
  )
}
