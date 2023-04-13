import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { NavBar } from '../ui';

interface Props {
  children: ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{ `${title} | HipMarket` }</title>
        <meta name='description' content={ pageDescription } />
        <meta name='og:title' content={ title } />
        <meta name='og:description' content={ pageDescription } />

        { imageFullUrl && <meta name='og:image' content={ imageFullUrl } /> }
      </Head>
      
      <div className='animate-fadeIn'>
        {/* NavBar */}
        <NavBar />

        {/* SideBar */}

        { children }
      </div>
    </>
  )
}
