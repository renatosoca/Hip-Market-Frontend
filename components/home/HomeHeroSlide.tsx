import { FC } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'

import "react-multi-carousel/lib/styles.css";

interface Props {
  images?: string[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const HomeHeroSlide: FC<Props> = ({ images }) => {
  const imagesHero = ['hero-1.avif', 'hero-2.avif', 'hero-1.avif'];

  return (
    <div className="h-full">
      <Carousel
        responsive={responsive}
        containerClass='h-full'
        sliderClass='h-full'
        itemClass='h-full'
        dotListClass='text-gray-500'
        showDots
        infinite
        autoPlay
        autoPlaySpeed={8000}
        transitionDuration={500}
      >
        { imagesHero.map( (image, index) => (
          <div className='h-full' key={index}>
            <Image
              className='w-full h-full object-cover select-none pointer-events-none'
              src={`/images/${image}`}
              alt='Tesla'
              width={ 2000 }
              height={ 2000 }
              priority
            />

            <div className='absolute bottom-24 text-white w-full flex flex-col items-center px-4 font-Jakarta font-bold text-center'>
              <h2 className='text-3xl 1sm:text-5xl pb-3'>Estilos Modernos</h2>
              <h3 className='pb-8 1sm:text-xl'>Modelos reconfortantes de la ultima temporada</h3>
              <Link 
                href='/'
                className='bg-white text-gray-500 hover:text-gray-700 rounded px-4 py-3 w-full 2cs:w-max 2cs:px-24 text-center font-semibold transition-colors'
              >
                Comprar ahora
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
