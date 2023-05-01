import { createContext } from 'react';

export interface UiContextProps {
  isMenuOpen: boolean;

  handleToggleSideMenu: () => void;
}

export const UiContext = createContext({} as UiContextProps);