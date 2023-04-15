import { ISizes } from "@/interfaces"
import { FC } from "react"

interface Props {
  sizes: ISizes[]
}

export const ListSize: FC<Props> = ({ sizes }) => {
  return (
    <div className='flex gap-2'>
      {
        sizes.map( size => (
          <button key={size}>{ size }</button>
        ))
      }
    </div>
  )
}
