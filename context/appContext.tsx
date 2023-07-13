import { createContext, useCallback, useContext, useState } from 'react';

export interface IContext {
  isCartOpen: boolean;
  handleCartIsOpen: (v: boolean) => void;
}

const initialState: IContext = {
  isCartOpen: false,
  handleCartIsOpen: (v: boolean) => {},
};

const appContext = createContext<IContext | undefined>(initialState);

export const UseAppContext = () => useContext(appContext);

const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartIsOpen = useCallback((v: boolean) => setIsCartOpen(v), []);

  return (
    <appContext.Provider value={{ isCartOpen, handleCartIsOpen }}>
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
