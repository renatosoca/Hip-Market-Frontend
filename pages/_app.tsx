import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import { SWRConfig } from 'swr';
import { hipMarketApi } from '@/apis';
import { AuthProvider, CartProvider, UiProvider } from '@/contexts';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  NProgress.configure({ showSpinner: false });

  router.events?.on('routeChangeStart', () => {
    NProgress.start();
  });

  router.events?.on('routeChangeComplete', () => {
    NProgress.done();
  });

  router.events?.on('routeChangeError', () => {
    NProgress.done();
  });

  return (
    <SWRConfig value={{ fetcher: (url) => hipMarketApi.get(url).then((res) => res.data) }}>
      <AuthProvider>
        <UiProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </UiProvider>
      </AuthProvider>
    </SWRConfig>
  )
}
