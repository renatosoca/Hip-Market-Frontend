import { ICartProduct } from '@/interfaces';
import { CartState } from './';

type CardActionType =
  | { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[] }
  | { type: '[Cart] - Update Product in Cart', payload: ICartProduct[] }
  | { type: '[Cart] - Change Cart Quantity', payload: ICartProduct }
  | { type: '[Cart] - Remove Product in Cart', payload: ICartProduct }
  | {
    type: '[Cart] - Update Order Summary',
    payload: {
      numberOfProducts: number;
      subTotal: number;
      tax: number;
      total: number;
    }
  }

export const cartReducer = (state: CartState, action: CardActionType): CartState => {
  switch (action.type) {
    case '[Cart] - LoadCart from cookies | storage':
      return {
        ...state,
        cart: [...action.payload]
      }

    case '[Cart] - Update Product in Cart':
      return {
        ...state,
        cart: [...action.payload]
      }

    case '[Cart] - Change Cart Quantity':
      return {
        ...state,
        cart: state.cart.map(product => {
          if (product._id !== action.payload._id) return product;
          if (product.size !== action.payload.size) return product;

          return action.payload;
        })
      }

    case '[Cart] - Remove Product in Cart':
      return {
        ...state,
        cart: state.cart.filter(product => !(product._id === action.payload._id && product.size === action.payload.size))
      }

    case '[Cart] - Update Order Summary':
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;
  }
}
