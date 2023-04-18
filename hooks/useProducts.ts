import useSWR, { SWRConfiguration } from 'swr';

const fetcher = (...args: [key: string]) => fetch(...args).then((res) => res.json());

export const useProducts = ( url: string, config: SWRConfiguration = {} ) => {
  
  const { data, error } = useSWR('http://localhost:4003/api/products', fetcher);
  console.log(data.products)
  
  return {
    products: data.products,
    isLoading: !error && !data,
    isError: error
  }
}