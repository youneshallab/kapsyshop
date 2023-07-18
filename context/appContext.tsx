import { useAppDispatch } from '@/redux/hooks';
import { initCart } from '@/redux/slices/cart';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

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

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const cart = localStorage.getItem('cart');
      if (cart) dispatch(initCart(JSON.parse(cart)));
    }
  }, [dispatch]);

  return (
    <appContext.Provider value={{ isCartOpen, handleCartIsOpen }}>
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
