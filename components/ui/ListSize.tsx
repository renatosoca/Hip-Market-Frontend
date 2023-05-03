import { ISizes } from "@/interfaces"
import { FC } from "react"

interface Props {
  sizes: ISizes[];
  selectedSize?: ISizes;
  handleSelectedSize: (size: ISizes) => void;
}

export const ListSize: FC<Props> = ({ sizes, selectedSize, handleSelectedSize }) => {
  return (
    <div className='flex gap-2'>
      {
        sizes.map(size => (
          <button
            key={size}
            className={`${selectedSize === size ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} py-2 px-4 rounded font-semibold`}
            onClick={() => handleSelectedSize(size)}
          >
            {size}
          </button>
        ))
      }
    </div>
  )
}
