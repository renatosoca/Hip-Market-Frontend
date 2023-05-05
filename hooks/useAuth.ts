import { useContext } from 'react';
import { AuthContext } from '@/contexts';

export const useAuth = () => {
  const state = useContext(AuthContext);
  return {
    ...state,
  }
}