import Link from 'next/link';
import { useRouter } from 'next/router';
import { GrCart, GrSearch } from 'react-icons/gr';
import { useCart, useUi } from '@/hooks';

export const NavBar = () => {

  const { numberOfProducts } = useCart();

  const { asPath } = useRouter();
  const { handleToggleSideMenu } = useUi();

  return (
    <header className='absolute w-full bg-transparent text-black font-bold z-10'>
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

        <div className='pr-2 2xs:pr-4 flex items-center gap-4 text-white'>
          <button
            className='hidden 2xs:block font-bold'
          >
            <GrSearch className='text-[1.35rem] text-white' />
          </button>

          <Link
            href='/cart'
            className='relative'
          >
            <GrCart className='text-[1.35rem] text-white' />

            {
              numberOfProducts !== 0 && (
                <span
                  className={`absolute -top-2/3 left-[40%] rounded-full bg-blue-500 text-white text-sm font-Jakarta py-[.1rem] px-2 flex items-center justify-center`}
                >
                  {numberOfProducts > 9 ? '+9' : numberOfProducts}
                </span>
              )
            }
          </Link>

          <button
            onClick={handleToggleSideMenu}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
