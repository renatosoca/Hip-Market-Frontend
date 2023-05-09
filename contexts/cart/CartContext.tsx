import { ICartProduct } from '@/interfaces';
import { ShippingAddress } from '@/pages/checkout/address';
import { createContext } from 'react';

export interface CartContextProps {
  cart: ICartProduct[];
  numberOfProducts: number;
  subTotal: number;
  tax: number;
  total: number;

  shippingAddress?: ShippingAddress;

  addProductToCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
  deleteProductFromCart: (product: ICartProduct) => void;
  updateShippingAdress: (adresses: ShippingAddress) => void;
  createOrder: () => Promise<{ hasError: boolean; message: string; }>;
}

export const CartContext = createContext({} as CartContextProps);