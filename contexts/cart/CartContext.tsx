import { ICartProduct } from '@/interfaces';
import { createContext } from 'react';

export interface CartContextProps {
  cart: ICartProduct[];
  numberOfProducts: number;
  subTotal: number;
  tax: number;
  total: number;

  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
  deleteProductFromCart: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as CartContextProps);