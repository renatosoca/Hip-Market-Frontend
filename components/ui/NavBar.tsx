import Link from 'next/link';
import { GrCart, GrSearch } from 'react-icons/gr';

export const NavBar = () => {
  return (
    <header className='fixed w-full bg-white text-black font-bold z-50'>
      <div className='flex justify-between gap-4 py-4'>
        <h1 className='flex'>
          <Link href='/' className='font-Eczar text-xl 2xs:text-2xl px-2 2xs:px-4'>HipMarket</Link>
          <span>| shop</span>
        </h1>

        <nav className='hidden'>
          <ul>
            <li>Option1</li>
          </ul>
        </nav>

        <div className='pr-2 2xs:pr-4 flex items-center gap-4 text-black'>
          <button
            className='hidden 2xs:block text-black font-bold'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>

          <Link
            href='/cart/empty'
            className='text-black'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

          </Link>

          <button>
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
