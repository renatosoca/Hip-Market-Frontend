import { FC } from 'react';
import { MdOutlineAddCircleOutline, MdOutlineRemoveCircleOutline } from 'react-icons/md';

interface Props {
  currentValue: number;
  maxValue: number;
  handleUpdateQuantity: (quantity: number) => void;
}

export const ItemQuantity: FC<Props> = ({ currentValue, maxValue, handleUpdateQuantity }) => {

  const addOrRemove = (value: number) => {
    if (value === -1) {
      if (currentValue === 1) return;

      return handleUpdateQuantity(currentValue - 1);
    }

    if (currentValue >= maxValue) return;

    return handleUpdateQuantity(currentValue + 1);
  }

  return (
    <div className='flex gap-2'>
      <button
        className='block rounded-full'
        onClick={() => addOrRemove(-1)}
      >
        <MdOutlineRemoveCircleOutline className='text-[1.35rem]' />
      </button>

      <span className='px-1 font-Jakarta font-semibold' >{currentValue}</span>

      <button
        className='block rounded-full'
        onClick={() => addOrRemove(+1)}
      >
        <MdOutlineAddCircleOutline className='text-[1.35rem]' />
      </button>
    </div>
  )
}
