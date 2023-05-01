import useSWR, { SWRConfiguration } from 'swr';
import { IProducts } from '@/interfaces';

export const useProducts = (url: string, config: SWRConfiguration = {}) => {

  const { data, error } = useSWR<IProducts>(`${url}`, config);

  return {
    products: data?.products || [],
    isLoading: !error && !data,
    isError: error
  }
}