import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import { Teko, Signika_Negative } from '@next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { assignValue } from '@/redux/features/cartCounter';
import { UseAppContext } from '@/context/appContext';
import { useAppSelector } from '@/redux/hooks';

const logoFont = Teko({ weight: ['600'], subsets: ['latin'] });
const themeFont = Signika_Negative({ weight: ['600'], subsets: ['latin'] });

function Header({ color }: any) {
  const dispatch = useDispatch();
  const [headerColor, setHeaderColor] = useState(' text-blue-900 ');
  const ctx = UseAppContext();
  const cart = useAppSelector((store) => store.cart);

  const handleCartClick = () => {
    ctx?.handleCartIsOpen(!ctx.isCartOpen);
  };

  useEffect(() => {
    if (color === 'white') {
      setHeaderColor(' text-cyan-600 ');
    }
  }, [color]);

  useEffect(() => {
    const existingCart = localStorage.getItem('cart');
    const cartItems = existingCart ? JSON.parse(existingCart) : [];
    dispatch(assignValue(cartItems.length));
  }, [dispatch]);

  return (
    <div>
      <div
        className={
          'top-4 fixed left-8 text-3xl  text-blue-900 z-50 cursor-pointer' +
          ' '.concat(logoFont.className).concat(headerColor)
        }
      >
        <Link href="/">KAPSY</Link>
      </div>
      <nav className="absolute top-6 right-8 w-64 flex flex-row-reverse space-x-8 space-x-reverse">
        <li
          className={'list-none fixed text-xl z-50 text-blue-900 cursor-pointer'.concat(
            headerColor
          )}
        >
          <div onClick={handleCartClick}>
            <BsCart4 />
          </div>
          {cart.items.length > 0 ? (
            <div
              className="bg-red-600 h-3 w-3 rounded-full absolute top-0 right-0 translate-x-2 -translate-y-1
                     flex items-center justify-center"
            >
              <p
                className="text-white font-bold 
                     h-2  text-[7px]  flex items-center justify-center overflow-clip"
              >
                {cart.items.length}
              </p>
            </div>
          ) : (
            <></>
          )}
        </li>
        <li
          className={'list-none fixed text-blue-900 right-10 z-50 cursor-pointer '
            .concat(headerColor)
            .concat(themeFont.className)}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={'list-none fixed text-blue-900 right-24 z-50 cursor-pointer '
            .concat(headerColor)
            .concat(themeFont.className)}
        >
          <Link href="/products">Shop</Link>
        </li>
      </nav>
    </div>
  );
}
export default Header;
