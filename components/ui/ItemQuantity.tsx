import { MdOutlineAddCircleOutline, MdOutlineRemoveCircleOutline } from 'react-icons/md'

export const ItemQuantity = () => {
  return (
    <div className='flex gap-2'>
      <button
        className='block rounded-full'
      >
        <MdOutlineRemoveCircleOutline className='text-[1.35rem]' />
      </button>

      <span className='px-1 font-Jakarta font-semibold' >1</span>

      <button
        className='block rounded-full'
      >
        <MdOutlineAddCircleOutline className='text-[1.35rem]' />
      </button>
    </div>
  )
}
