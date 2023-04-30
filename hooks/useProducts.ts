import useSWR, { SWRConfiguration } from 'swr';
import { FetchProducts } from '@/interfaces';

//const fetcher = (...args: [key: string]) => fetch(...args).then((res) => res.json());

export const useProducts = (url: string, config: SWRConfiguration = {}) => {

  const { data, error } = useSWR<FetchProducts>(`http://localhost:4003/api/${url}`, config);

  return {
    products: data?.products || [],
    isLoading: !error && !data,
    isError: error
  }
}