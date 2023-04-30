import Link from 'next/link';
import { useRouter } from 'next/router';
import { GrCart, GrSearch } from 'react-icons/gr';

export const NavBar = () => {

  const { asPath } = useRouter();

  return (
    <header className='fixed w-full bg-white text-black font-bold z-50'>
      <div className='flex justify-between gap-4 py-4'>
        <h1 className='flex'>
          <Link href='/' className='font-Eczar text-xl 2xs:text-2xl px-2 2xs:px-4'>HipMarket</Link>
          <span>| shop</span>
        </h1>

        <nav className='block'>
          <ul className='flex gap-2'>
            <li
              className={`${asPath === '/category/men' ? 'bg-blue-500 text-white' : ''} px-2 py-1 rounded`}
            >
              <Link href='/category/men'>
                Hombres
              </Link>
            </li>
            <li
              className={`${asPath === '/category/women' ? 'bg-blue-500 text-white' : ''} px-2 py-1 rounded`}
            >
              <Link href='/category/women'>
                Mujeres
              </Link>
            </li>
            <li
              className={`${asPath === '/category/kid' ? 'bg-blue-500 text-white' : ''} px-2 py-1 rounded`}
            >
              <Link href='/category/kid'>
                Niños
              </Link>
            </li>
          </ul>
        </nav>

        <div className='pr-2 2xs:pr-4 flex items-center gap-4 text-black'>
          <button
            className='hidden 2xs:block text-black font-bold'
          >
            <GrSearch className='text-[1.35rem]' />
          </button>

          <Link
            href='/cart'
            className='text-black'
          >
            <GrCart className='text-[1.35rem]' />
          </Link>

          <button>
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
