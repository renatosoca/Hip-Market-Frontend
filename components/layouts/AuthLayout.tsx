import { FC, ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  children: ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const AuthLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{ `${title} | HipMarket` }</title>
        <meta name='description' content={ pageDescription } />
        <meta name='og:title' content={ title } />
        <meta name='og:description' content={ pageDescription } />

        { imageFullUrl && <meta name='og:image' content={ imageFullUrl } /> }
      </Head>

      <header className='fixed bg-white w-full'>
        <div className='px-5 py-4'>
          <h2 className='font-Jakarta text-xl font-semibold'>HipMarket</h2>
        </div>
      </header>

      <main className='pt-[3.75rem]'>
        { children }
      </main>
    </>
  )
}
