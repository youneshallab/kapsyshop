import { UseAppContext } from '@/context/appContext';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';

function Cart() {
  const ctx = UseAppContext();
  const [cartSprings, api] = useSpring(() => {
    if (typeof window !== 'undefined') return { x: window.innerWidth };
  });

  const handleOverlayClick = () => {
    ctx?.handleCartIsOpen(false);
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: window.innerWidth,
      },
    });
  };

  useEffect(() => {
    if (ctx?.isCartOpen) {
      api.start({
        from: {
          x: window.innerWidth,
        },
        to: {
          x: 0,
        },
      });
    }
  }, [ctx?.isCartOpen, api]);

  return (
    <animated.div
      className={'fixed z-50 top-0 left-0 right-0 bottom-0 translate-x-full'}
      style={{ ...cartSprings }}
    >
      <div
        className="bg-black top-0 bottom-0 right-0 left-0 fixed bg-opacity-50 cursor-pointer z-40"
        onClick={handleOverlayClick}
      ></div>
      <div
        className={classNames(
          'top-0 w-[365px] bottom-0 right-0 bg-white fixed transition z-50'
        )}
        id="cart-wrapper"
      >
        cart
      </div>
    </animated.div>
  );
}

export default Cart;
