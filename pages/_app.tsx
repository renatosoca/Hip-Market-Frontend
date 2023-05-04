import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { SWRConfig } from 'swr';
import { hipMarketApi } from '@/apis';
import { CartProvider, UiProvider } from '@/contexts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{
      fetcher: (url) => hipMarketApi.get(url).then((res) => res.data)
    }}>
      <UiProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </UiProvider>
    </SWRConfig>
  )
}
