import React from 'react'
import Layout from '@/components/Layout'
import { Signika_Negative } from '@next/font/google';
import Link from 'next/link';
import {FaChevronRight} from 'react-icons/fa';

const themeFontBold = Signika_Negative({ weight: ['600'], subsets: ['latin'] });
const themeFont = Signika_Negative({ weight : ['400'], subsets: ['latin'] });

function Shipping() {
  return (
    <div>
        <Layout>
          <div className= 'top-0 left-0 h-min w-full grid grid-cols-12 pt-48'>
            <div className='col-start-3 col-end-7 h-screen flex flex-col gap-1'>
              <Link href="/about" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>About</Link>
              <Link href="/contactus" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Contact Us</Link>
              <Link href="/privacy" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Privacy</Link>
              <Link href="/terms" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Terms of Use</Link>
              <div className={'text-[32px] h-12  font-bold text-blue-900 flex gap-2 items-center '.concat(themeFontBold.className)}>
                <FaChevronRight></FaChevronRight>
                <p>Shipping and Return</p>
              </div>
              <Link href="/payment" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Payment Policies</Link>
            </div>
            <div className='col-start-7 col-end-12 '>
              <p className={'text-xl text-blue-900 '.concat(themeFont.className)}>
              <section>
                  <h2 className={'text-2xl  mb-1 '.concat(themeFontBold.className)}>Free Shipping Across Morocco</h2>
                  <p>We are delighted to offer free shipping for all orders within Morocco. Whether you're in the bustling city or a remote village, your order will be delivered to your doorstep at no additional cost.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Immediate Returns</h2>
                  <p>For your convenience, we offer free immediate returns if you find any issue with your order at the time of delivery. However, once you accept the product upon delivery, any subsequent returns will be at your expense.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Fast and Reliable Delivery</h2>
                  <p>At Kapsy, we understand the excitement of receiving your order promptly. We strive to deliver your package within 48 hours in more than 95% of cases. Our deliveries are handled by a highly professional and trusted delivery company.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Shipping within Morocco Only</h2>
                  <p>Currently, we offer shipping services exclusively within Morocco. However, we are working tirelessly to expand our shipping options and offer our products to customers outside Morocco in the near future. Stay tuned for updates!</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Kapsy Special: Gifting Made Easy</h2>
                  <p>Surprise your loved ones with our Kapsy Special shipping option. Your order will be elegantly packaged in a gift-like case, ready to be presented to that special someone. Make gifting effortless with our exclusive packaging.</p>
              </section>
              </p>
          </div>
          </div>
        </Layout>
    </div>
  )
}

export default Shipping