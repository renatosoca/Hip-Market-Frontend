import { FC, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { ProductSlideArrow } from './ProductSlideArrow';

interface Props {
  images: string[];
}

export const ProductSlideImage: FC<Props> = ({ images }) => {
  return (
    <Slide
      easing='ease'
      duration={ 5000 }
      indicators
      prevArrow={<ProductSlideArrow direction='prev' />}
      nextArrow={<ProductSlideArrow direction='next' />}
    >
      {
        images.map( image => (
          <div key={image} className='h-[50rem]' >
            <img 
              className='flex items-center gap-1 justify-center bg-cover w-full h-full object-cover select-none pointer-events-none' 
              src={`/products/${image}`} 
              alt={image} 
            />
          </div>
        ))
      }
    </Slide>
  )
}
