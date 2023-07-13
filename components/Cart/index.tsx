import { UseAppContext } from '@/context/appContext';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { animated, useSpringValue } from '@react-spring/web';
import { Signika_Negative } from '@next/font/google';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';

const themeFont = Signika_Negative({
  weight: ['600', '500', '700'],
  subsets: ['latin'],
});

function Cart() {
  const ctx = UseAppContext();
  const opacity = useSpringValue(0);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const cart = useAppSelector((store) => store.cart);

  const x = useSpringValue(-700);

  const handleOverlayClick = () => {
    if (!isClosing) {
      setIsClosing(true);
      x.start({
        from: 0,
        to: -700,
      })
        .then(() =>
          opacity.start({
            from: 1,
            to: 0,
          })
        )
        .finally(() => {
          ctx?.handleCartIsOpen(false);
          setIsClosing(false);
        });
    }
  };

  useEffect(() => {
    if (ctx?.isCartOpen) {
      opacity
        .start({
          from: 0,
          to: 1,
        })
        .finally(() => {
          x.start({
            from: -700,
            to: 0,
          });
        });
    }
  }, [ctx?.isCartOpen, opacity, x]);

  return (
    <div
      className={classNames('fixed z-50 top-0 left-0 right-0 bottom-0', {
        hidden: !ctx?.isCartOpen,
      })}
    >
      <animated.div
        className="bg-black top-0 bottom-0 right-0 left-0 fixed bg-opacity-50 cursor-pointer z-40"
        style={{ opacity }}
        onClick={handleOverlayClick}
      ></animated.div>
      <animated.div
        className={classNames(
          `top-0 w-[700px] rounded-tl-lg rounded-bl-lg  bottom-0 bg-white fixed z-50 p-4 ${themeFont.className.toString()}`
        )}
        id="cart-wrapper"
        style={{ right: x }}
      >
        <div className=" font-semibold text-lg">Your Cart</div>
        <div className="mt-20 flex flex-col gap-4">
          {cart.items.map((product, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <Image
                  className="rounded-md"
                  src={product.image}
                  alt="product_image"
                  height={80}
                  width={80}
                />
              </div>
              <div>
                {product.name} x {product.quantity}
              </div>
              <div className="text-2xl font-bold text-purple-800">
                MAD {product.total}
              </div>
            </div>
          ))}
        </div>
      </animated.div>
    </div>
  );
}

export default Cart;
