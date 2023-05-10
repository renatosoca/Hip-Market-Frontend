import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { NavBar } from '../admin';
import { SideBar } from '../ui';

interface Props {
  children: ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const AdminLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{`${title} | HipMarket`}</title>
        <meta name='description' content={pageDescription} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />

        {imageFullUrl && <meta name='og:image' content={imageFullUrl} />}
      </Head>

      <div className='animate-fadeIn min-h-screen flex flex-col h-full overflow-hidden'>
        <NavBar />
        <SideBar />

        <main className={`flex-1 overflow-y-auto`} >
          {children}
        </main>
      </div>
    </>
  )
}
