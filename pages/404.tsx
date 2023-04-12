import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Pagina no encontrada | HipMarket</title>
        <meta name='description' content='La página que buscas no existe o no está disponible' />
      </Head>
      
      <main className='relative h-screen flex flex-col justify-center gap-4 p-2 overflow-hidden text-black/70 animate-fadeIn'>
        <div className='w-full flex justify-center'>
          <Image
            className='w-[20rem] h-auto]'
            src='/error.svg'
            alt='Error 404'
            width={ 300 }
            height={ 300 }
            priority
          />
        </div>

        <h1 className='text-4xl 2xs:text-6xl font-bold text-center font-Eczar'>Error 404</h1>
        <p className='text-center pb-4'>La página que buscas no existe o no está disponible</p>

        <div className='flex justify-center'>
          <Link
            href='/'
            className='bg-[#6C63FF] px-10 py-2 rounded text-gray-200 hover:bg-indigo-700 transition-colors duration-300 ease-in-out'
          >
            Volver al home
          </Link>
        </div>
      </main>
    </>
  )
}

export default ErrorPage