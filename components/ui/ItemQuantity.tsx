import { FC } from 'react';
import { MdOutlineAddCircleOutline, MdOutlineRemoveCircleOutline } from 'react-icons/md';

interface Props {
  currentValue: number;
  maxValue: number;
  handleUpdateQuantity: (quantity: number) => void;
}

export const ItemQuantity: FC<Props> = ({ currentValue, maxValue, handleUpdateQuantity }) => {
  return (
    <div className='flex gap-2'>
      <button
        className='block rounded-full'
      >
        <MdOutlineRemoveCircleOutline className='text-[1.35rem]' />
      </button>

      <span className='px-1 font-Jakarta font-semibold' >{currentValue}</span>

      <button
        className='block rounded-full'
      >
        <MdOutlineAddCircleOutline className='text-[1.35rem]' />
      </button>
    </div>
  )
}
