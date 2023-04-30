import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { SWRConfig } from 'swr';
import { apiProducts } from '@/apis';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{
      fetcher: (url) => apiProducts.get(url).then((res) => res.data)
    }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}
