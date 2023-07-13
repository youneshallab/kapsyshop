import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import AppProvider from '@/context/appContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Provider>
  );
}
