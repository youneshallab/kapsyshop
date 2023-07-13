import React from 'react';
import Header from '../Header';
import Cart from '../Cart';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Header></Header>
      {children}
      <Cart />
    </div>
  );
}

export default Layout;
