import React from 'react';
import Header from '../Header';
import Cart from '../Cart';
import Footer from '../Footer';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Header></Header>
      {children}
      <Cart />
      <Footer></Footer>
    </div>
  );
}

export default Layout;
