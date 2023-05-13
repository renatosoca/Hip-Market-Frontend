import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';
import '@/styles/globals.css';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import { hipMarketApi } from '@/apis';
import { AuthProvider, CartProvider, UiProvider } from '@/contexts';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const initialOptions = {
  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
  //currency: "USD",
  //intent: "capture",
  //"data-client-token": "abc123xyz==",
};

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
    <SessionProvider>
      <PayPalScriptProvider options={initialOptions}>

        <SWRConfig value={{ fetcher: (url) => hipMarketApi.get(url).then((res) => res.data) }}>
          <AuthProvider>
            <UiProvider>
              <CartProvider>
                <Component {...pageProps} />
              </CartProvider>
            </UiProvider>
          </AuthProvider>
        </SWRConfig>

      </PayPalScriptProvider>
    </SessionProvider>
  )
}
