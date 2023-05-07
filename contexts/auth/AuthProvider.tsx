import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import { hipMarketApi } from '@/apis';
import { IUser } from '@/interfaces';
import { AuthContext, authReducer } from './';
import axios from 'axios';

export interface AuthState {
  isAuthenticated: boolean;
  user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  isAuthenticated: false,
  user: undefined,
}

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {

  const { data, status } = useSession();
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  useEffect(() => {
    revalidateAuth();
  }, []);

  useEffect(() => {
    if (status === 'authenticated') {
      console.log(data)
      //dispatch({ type: '[Auth] - Login', payload: data?.user });
    }
  }, [status, data])

  const loginUser = async (email: string, password: string): Promise<boolean> => {
    try {

      const { data } = await hipMarketApi.post('/auth/login', { email, password });
      Cookies.set('authToken', data.token);
      dispatch({ type: '[Auth] - Login', payload: data.user });

      return true;
    } catch (error) {
      return false;
    }
  }

  const logoutUser = (): void => {
    Cookies.remove('authToken');
    Cookies.remove('cart');
    dispatch({ type: '[Auth] - Logout' });
  }

  const registerUser = async (name: string, lastname: string, email: string, password: String): Promise<{ hasError: boolean; message?: string }> => {
    try {

      const { data } = await hipMarketApi.post('/auth/register', { name, lastname, email, password });
      Cookies.set('authToken', data.token);
      dispatch({ type: '[Auth] - Login', payload: data.user });

      return {
        hasError: false,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data.message,
        };
      }

      return {
        hasError: true,
        message: 'Ocurrió un error al registrar el usuario',
      }
    }
  }

  const revalidateAuth = async (): Promise<void> => {

    if (!Cookies.get('authToken')) return;

    try {

      const { data } = await hipMarketApi.get('/auth/revalidate-auth');

      Cookies.set('authToken', data.token);
      dispatch({ type: '[Auth] - Login', payload: data.user });

    } catch (error) {
      Cookies.remove('authToken');
      dispatch({ type: '[Auth] - Logout' });
    }
  }

  return (
    <AuthContext.Provider value={{
      ...state,

      loginUser,
      logoutUser,
      registerUser,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
