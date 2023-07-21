import { UseAppContext } from '@/context/appContext';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { animated, useSpringValue } from '@react-spring/web';
import { Signika_Negative } from '@next/font/google';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import {  DeleteFromCart, IncreaseQuantity, DecreaseQuantity } from '@/redux/slices/cart';
import { useAppDispatch } from '@/redux/hooks';

const themeFont = Signika_Negative({
  weight: ['600', '500', '700'],
  subsets: ['latin'],
});

function Cart() {
  const dispatch = useAppDispatch();
  const ctx = UseAppContext();
  const opacity = useSpringValue(0);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const cart = useAppSelector((store) => store.cart);
  const [total, setTotal] = useState<number>(0)
  const x = useSpringValue(-700);
  const [cartLink, setCartLink] = useState<string>('')

  const deleteItemsFromCart = (id:any) => {
    dispatch(DeleteFromCart(id));
  };

  const IncreaseItemQuantity = (id:any) => {
    dispatch(IncreaseQuantity(id));
  };

  const DecreaseItemQuantity = (id:any) => {
    dispatch(DecreaseQuantity(id));
  };


  useEffect(()=>{
    var totalVar:number = 0
    cart.items.map(item => {
      totalVar = totalVar + item.total
    })
    setTotal(totalVar)
  },[cart])
 
  const handleOpenCart = () => {
    ctx?.handleCartIsOpen(false)
  };
  
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
          ctx?.handleCartIsOpen(false)
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
          `top-0 w-[600px] rounded-tl-lg rounded-bl-lg  bottom-0 bg-white fixed flex flex-col z-50 text-blue-900  ${themeFont.className.toString()}`
        )}
        id="cart-wrapper"
        style={{ right: x }}
      > 
        <div className=' flex gap-2 items-baseline my-5 ml-10'>
          <div className=" font-semibold text-3xl">Cart </div>
          <p className='text-sm'>{`(${cart.items.length})`}</p>
        </div>
        <div className='grow h-4 grid grid-rows-4  '>
          <div className=" flex flex-col gap-4 overflow-y-scroll row-start-1 row-end-4 ml-10">
            {cart.items.length> 0 ? cart.items.map((product, i) => (
              <div key={i} className="flex items-center ">
                <div className='mr-5'>
                  <Image
                    className="rounded-md"
                    src={product.image}
                    alt="product_image"
                    height={190}
                    width={290}
                  />
                </div>
                <div className='flex flex-col'>
                  <div className=' mb-9 '>
                    <button className='text-xs text-blue-500 underline' onClick={()=>deleteItemsFromCart(product.id)}>Remove from basket</button>
                  </div>
                  <div className='mb-1 text-xl'>
                    {product.name}
                  </div>
                  <div className=" text-blue-900 mb-5">
                    Price: <span className='text-blue-500'>{product.total}</span> dhs
                  </div>
                  <div
                      className="flex flex-row items-center justify-around h-8 mr-4 w-20
                          border-[1px] border-gray-400  rounded-3xl hover:border-blue-900
                          px-2 "
                    >
                      <button
                        onClick={()=>DecreaseItemQuantity(product.id)}
                        className=" px-1 rounded-3xl text-gray-400 hover:text-blue-900"
                      >
                        -
                      </button>
                    <div className=" text-center mx-1">{product.quantity}</div>
                      <button
                        onClick={()=>IncreaseItemQuantity(product.id)}
                        className=" px-1 rounded-3xl text-gray-400 hover:text-blue-900"
                      >
                        +
                      </button>
                    </div>
                </div>
              </div>
            )):
            <div>Your Cart is empty</div>
            }
          </div>
          <div className="row-start-4 row-end-5 border-t-2 p-10 border-blue-900 flex justify-between flex-col ">
            <div className='mx-2 flex justify-between text-lg'>
              <div>Total :</div>
              <div><span className='text-blue-500'>{total}</span> dhs</div>
            </div>
            { cart.items.length> 0 ? 
            <Link href='\cart' >
              <button
                className={
                  'z-30 flex gap-4 items-center justify-center  bg-blue-900 text-xl text-white hover:drop-shadow-xl' +
                  ' px-5 py-3 h-12 rounded-3xl w-full hover:bottom-[1px] relative '
                }
                onClick={handleOpenCart}
                >
                Go to Checkout
                <AiOutlineArrowRight className="font-extrabold ml-2" />
              </button>
            </Link>:
          <Link href="\products">
            <button
              className={
                'z-30 flex gap-4 items-center justify-center  bg-blue-900 text-xl text-white hover:drop-shadow-xl' +
                ' px-5 py-3 h-12 rounded-3xl w-full hover:bottom-[1px] relative '
              }
              onClick={handleOpenCart}
              >
              See More Products
              <AiOutlineArrowRight className="font-extrabold ml-2" />
            </button>
          </Link>
            }
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Cart;
