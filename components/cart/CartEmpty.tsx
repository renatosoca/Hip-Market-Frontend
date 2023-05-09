import Link from 'next/link';

export const CartEmpty = () => {
  return (
    <div className='px-6 animate-fadeIn'>
      <div className='pb-4 pt-[25%] 2lg:pt-[5%]'>
        <h3 className='font-Jakarta font-medium text-xl 2lg:text-2xl text-center 2lg:text-start text-gray-500'>Tu carrito está vacio.</h3>
      </div>

      <div className='flex flex-col 2lg:flex-row gap-4'>
        <Link
          href='/'
          className='block w-full 2lg:w-80 bg-blue-600 text-white border-[.15rem] border-transparent py-[.4rem] px-4 rounded font-semibold text-center'
        >
          Continuar comprando
        </Link>

        <Link
          href='/auth/login'
          className='block w-full 2lg:w-80 border-[.15rem] border-gray-700 py-[.4rem] px-4 rounded font-semibold text-center'
        >
          Iniciar sesión
        </Link>
      </div>
    </div>
  )
}
