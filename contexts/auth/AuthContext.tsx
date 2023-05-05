import { IUser } from '@/interfaces';
import { createContext } from 'react';

export interface AuthContextProps {
  isAuthenticated: boolean;
  user?: IUser;

  loginUser: (email: string, password: string) => Promise<boolean>;
  logoutUser: () => void;
  registerUser: (name: string, lastname: string, email: string, password: string) => Promise<{ hasError: boolean; message?: string; }>
}

export const AuthContext = createContext({} as AuthContextProps);