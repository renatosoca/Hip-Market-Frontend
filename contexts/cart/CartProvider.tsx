import { FC, PropsWithChildren, useEffect, useReducer, useRef } from 'react';
import Cookie from 'js-cookie';
import { ICartProduct } from '@/interfaces';
import { CartContext, cartReducer } from './';
import { ShippingAddress } from '@/pages/checkout/address';

export interface CartState {
  cart: ICartProduct[];
  numberOfProducts: number;
  subTotal: number;
  tax: number;
  total: number;

  shippingAddress?: ShippingAddress;
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  numberOfProducts: 0,
  subTotal: 0,
  tax: 0,
  total: 0,

  shippingAddress: undefined,
}

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  const isFirstTimeLoad = useRef(true);

  useEffect(() => {
    try {
      const CookieCart = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : [];
      dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: CookieCart });
    } catch (error) {
      dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] });
    }
  }, [])

  useEffect(() => {
    if (isFirstTimeLoad.current) {
      isFirstTimeLoad.current = false;

      if (state.cart.length <= 0) return;
    }

    Cookie.set('cart', JSON.stringify(state.cart));
  }, [state.cart])

  useEffect(() => {
    const numberOfProducts = state.cart.reduce((prev, current) => current.quantity + prev, 0);
    const subTotal = state.cart.reduce((prev, current) => (current.price * current.quantity) + prev, 0);
    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

    const orderSummary = {
      numberOfProducts,
      subTotal,
      tax: subTotal * taxRate,
      total: subTotal * (taxRate + 1),
    }

    dispatch({ type: '[Cart] - Update Order Summary', payload: orderSummary })
  }, [state.cart])

  useEffect(() => {
    if (Cookie.get('name')) {
      const shippingAddress = {
        name: Cookie.get('name') || '',
        lastname: Cookie.get('lastname') || '',
        address: Cookie.get('address') || '',
        address2: Cookie.get('address2') || '',
        zip: Cookie.get('zip') || '',
        city: Cookie.get('city') || '',
        country: Cookie.get('country') || '',
        phone: Cookie.get('phone') || '',
      };

      dispatch({ type: '[Cart] - Load Address from cookies | storage', payload: shippingAddress });
    }
  }, [state.shippingAddress])

  const getAddressFromCookies = () => {

  }

  const addProductToCart = (product: ICartProduct) => {
    const productInCart = state.cart.some(item => item._id === product._id);
    if (!productInCart) return dispatch({ type: '[Cart] - Update Product in Cart', payload: [...state.cart, product] });

    const productInCartByDifferenctSize = state.cart.some(item => item._id === product._id && item.size === product.size);
    if (!productInCartByDifferenctSize) return dispatch({ type: '[Cart] - Update Product in Cart', payload: [...state.cart, product] });

    const updatedProduct = state.cart.map(item => {
      if (item._id !== product._id) return item;
      if (item.size !== product.size) return item;

      item.quantity += product.quantity;
      return item;
    });
    dispatch({ type: '[Cart] - Update Product in Cart', payload: updatedProduct });
  }

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: '[Cart] - Change Cart Quantity', payload: product });
  }

  const deleteProductFromCart = (product: ICartProduct) => {
    dispatch({ type: '[Cart] - Remove Product in Cart', payload: product });
  }

  return (
    <CartContext.Provider value={{
      ...state,

      addProductToCart,
      updateCartQuantity,
      deleteProductFromCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}
