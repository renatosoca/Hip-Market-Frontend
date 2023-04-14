import { FC } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface Props {
  direction: 'prev' | 'next';
}

export const ProductSlideArrow: FC<Props> = ({ direction, ...rest }) => {

  return (
      <div
        {...rest}
        className={`absolute ${direction === 'prev' ? 'left-4' : 'right-4'} p-1 rounded-full bg-black/40 flex items-center justify-center cursor-pointer z-10 transition-colors`}
      >
        {
          direction === 'prev'
          ? <AiFillCaretLeft className='text-white text-2xl left-8' />
          : <AiFillCaretRight className='text-white text-2xl' />
        }
      </div>
  )
}
