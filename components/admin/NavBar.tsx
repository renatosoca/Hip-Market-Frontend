import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUi } from '@/hooks';

export const NavBar = () => {

  const { asPath } = useRouter();
  const { handleToggleSideMenu } = useUi();

  return (
    <header className='w-full bg-transparent text-black font-bold z-10'>
      <div className='flex justify-between gap-4 py-4'>
        <h1 className='flex'>
          <Link href='/' className='font-Eczar text-xl 2xs:text-2xl px-2 2xs:px-4'>HipMarket</Link>
          <span>| shop</span>
        </h1>

        <div className='pr-2 2xs:pr-4 flex items-center gap-4 text-black'>
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
