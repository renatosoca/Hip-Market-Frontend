import { useContext } from 'react';
import { CartContext } from '../contexts';

export const useCart = () => {
  const state = useContext(CartContext);

  return {
    ...state,
  }
}