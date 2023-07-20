import React, { useState } from 'react'
import { Signika_Negative } from '@next/font/google';
import Image from 'next/image';
import { useAppSelector } from '@/redux/hooks';
import Layout from '@/components/Layout';
import { useRef, useEffect } from 'react';

const themeFont = Signika_Negative({
  weight: ['600', '500', '700'],
  subsets: ['latin'],
});

function Cart() {

  const ref = useRef(null)
  const cart = useAppSelector((store) => store.cart);
  const [footerVisible, setFooterVisible] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)

  useEffect(()=>{
    var totalVar:number = 0
    cart.items.map(item => {
      totalVar = totalVar + item.total
    })
    setTotal(totalVar)
  },[cart])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the target element is currently visible in the viewport
          if (entry.isIntersecting) {
            setFooterVisible(true)
          }
          if (!entry.isIntersecting) {
            setFooterVisible(false)
          }
        });
      },
      {
        threshold: 0.2, // Customize the threshold value as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Layout>
        <div className={` ${themeFont.className.toString()} grid grid-cols-12 w-full h-max relative`}>
          <div className=" relative  col-start-2 col-end-7 pt-40 flex flex-col gap-3 ">
          {cart.items.map((product, i) => (
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
                    <button className='text-xs text-blue-500 underline'>Remove from basket</button>
                  </div>
                  <div className='mb-4 text-xl'>
                    {product.name} x <span className='text-blue-500'>{product.quantity}</span>
                  </div>
                  <div className=" text-blue-900 ">
                    Price: <span className='text-blue-500'>{product.total}</span> dhs
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-40 relative col-start-8 col-end-12 flex ">
            <div className={footerVisible ? ' self-end relative bottom-40 z-10 w-full':' fixed bottom-40 z-10 w-1/3'}>
              <form className='p-5 flex flex-col border-2 border-blue-900 rounded'>
                <label className=' p-2 flex flex-col'>
                <p className='font-semibold	'>Nom:</p>
                  <input className="px-1 py-px border-[1px] rounded" type="text" name="nom" placeholder="Enter your last name"></input>
                </label>
                <label className=' p-2 flex flex-col'>
                <p className='font-semibold	'>Prénom:</p>
                  <input className="px-1 py-px  border-[1px] rounded" type="text" name="prenom" placeholder="Enter your first name"></input>
                </label>
                <label className=' p-2 flex flex-col'>
                <p className='font-semibold	'>Téléphone:</p>
                  <input className="px-1 py-px  border-[1px] rounded" type="tel" name="phone" placeholder="Enter your phone number"></input>
                </label>
                <label className=' p-2 flex flex-col'>
                  <p className='font-semibold	'>Adresse:</p>
                  <textarea  className="px-1  py-px  h-20 border-[1px] rounded resize-none" name="address" placeholder="Enter your address"></textarea>
                </label>
                <div className='mx-4 flex justify-between text-lg'>
                  <div>Total :</div>
                  <div><span className='text-blue-500'>{total}</span> dhs</div>
                </div>
                <button type="submit" 
                className={'z-30  bg-blue-900 text-xl text-white hover:drop-shadow-xl hover:bottom-[1px] relative'+
                '  py-2 mt-1 w-full rounded-3xl '+
                ' text-center cursor-pointer '.concat(themeFont.className)} >
                  Valider la commande
                </button>
              </form>
            </div>
          </div>
        </div>
        <div ref={ref} ></div>
    </Layout>
  )
}

export default Cart