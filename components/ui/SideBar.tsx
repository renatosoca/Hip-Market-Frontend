import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useUi } from '@/hooks';

export const SideBar = () => {

  const { push } = useRouter()
  const { isMenuOpen, handleToggleSideMenu } = useUi();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;

    handleNavigate(`/search/${searchTerm}`);
  }

  const handleNavigate = (url: string) => {
    handleToggleSideMenu();
    push(url);
  }

  return (
    <div className={`absolute top-0 bottom-0 left-0 right-0 z-20 ${isMenuOpen ? 'opacity-100' : 'select-none pointer-events-none'} overflow-hidden`} >
      <div
        className={`bg-black/30 w-full h-full ${isMenuOpen ? 'opacity-100' : 'opacity-0'} transition-[opacity] duration-200`}
        onClick={handleToggleSideMenu}
      >
      </div>
      <div
        className={`bg-white absolute top-0 bottom-0 right-0 w-64 z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-[transform] duration-500 z-50`}
      >
        <div className='px-4 py-4'>
          <input
            className='w-full px-4 py-2 border border-gray-300 rounded'
            type="text"
            placeholder='Buscar'
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
            autoComplete='off'
            autoFocus={isMenuOpen}
            onKeyDown={({ key }) => (key === 'Enter') && handleSearchTerm()}
          />

          {/* Implementar Icon search */}
        </div>

        <ul className="px-4">
          <li className='py-1 bg-gray-300 mb-1 last:mb-0 px-3 rounded'>Perfil</li>
          <li className='py-1 bg-gray-300 mb-1 last:mb-0 px-3 rounded'>Mis ordenes</li>
          <li
            onClick={() => handleNavigate('/category/men')}
            className='py-1 bg-gray-300 mb-1 last:mb-0 px-3 rounded'
          >
            <Link href='/category/men' >
              Hombres
            </Link>
          </li>
          <li
            onClick={() => handleNavigate('/category/women')}
            className='py-1 bg-gray-300 mb-1 last:mb-0 px-3 rounded'
          >
            <Link href='/category/women' >
              Mujeres
            </Link>
          </li>
          <li
            onClick={() => handleNavigate('/category/kid')}
            className='py-1 bg-gray-300 mb-1 last:mb-0 px-3 rounded'
          >
            <Link href='/category/kid' >
              Niños
            </Link>
          </li>
          <li className='py-1 bg-gray-300 mb-1 last:mb-0 px-3 rounded'>
            <Link href='/auth/login' >
              Ingresar
            </Link>
          </li>
          <li className='py-1 bg-gray-300 mb-1 last:mb-0 px-3 rounded'>Salir</li>
          <p>Admin Panel</p>
          <li className='py-1 bg-gray-300 mb-1 last:mb-0 px-3 rounded'>Productos</li>
          <li className='py-1 bg-gray-300 mb-1 last:mb-0 px-3 rounded'>Ordenes</li>
          <li className='py-1 bg-gray-300 mb-1 last:mb-0 px-3 rounded'>Usuarios</li>
        </ul>
      </div>
    </div>
  )
}
