import React from 'react'
import Layout from '@/components/Layout'
import { Signika_Negative } from '@next/font/google';
import Link from 'next/link';
import {FaWhatsappSquare,FaEnvelopeSquare} from 'react-icons/fa'


const themeFontBold = Signika_Negative({ weight: ['600'], subsets: ['latin'] });
const themeFont = Signika_Negative({ weight : ['400'], subsets: ['latin'] });

function Privacy() {
  return (
    <div>
        <Layout>
          <div className= 'top-0 left-0 h-min w-full grid grid-cols-12 pt-48'>
            <div className='col-start-3 col-end-7 h-screen flex flex-col gap-2'>
              <Link href="/about" className={'text-[32px] font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>About</Link>
              <Link href="/contactus" className={'text-[32px] font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Contact Us</Link>
              <Link href="/privacy" className={'text-[32px] font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Privacy</Link>
              <Link href="/terms" className={'text-[32px] font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Terms of Use</Link>
              <Link href="/shipping" className={'text-[32px] font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Shipping and Return</Link>
              <p className={'text-[40px] font-bold text-blue-900  '.concat(themeFontBold.className)}>Payment Policies</p>
            </div>
            <div className='col-start-7 col-end-12 '>
              <p className={'text-xl text-blue-900 '.concat(themeFont.className)}>
              <section>
                  <h2 className={'text-2xl  mb-1 '.concat(themeFontBold.className)}>Payment on Delivery</h2>
                  <p>At Kapsy, we believe in convenience and trust. Therefore, our primary payment method is "Payment on Delivery." You can pay for your order in cash at the time of delivery.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Bank Transfer in Special Cases</h2>
                  <p>In very rare cases where hand delivery is not possible, or if you wish to ship the product directly to the recipient as a gift, we can accept payments via bank transfer. To request bank transfer payment, please contact us via email or WhatsApp to get the necessary details for the bank transfer process.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Contact Us for Bank Transfer Details</h2>
                  <p>If you require bank transfer payment details, please feel free to reach out to us via:</p>
                  <Link href="mailto:kapsyshop@gmail.com" target='_blank' className='flex gap-2 items-center hover:text-red-500'>
                    <FaEnvelopeSquare></FaEnvelopeSquare>
                    <p>Email: kapsyshop@gmail.com</p>
                  </Link>
                  <Link href="https://wa.me/212655778278" target='_blank' className='flex gap-2 items-center hover:text-green-600'>
                    <FaWhatsappSquare></FaWhatsappSquare>
                    <p>WhatsApp: +212 6 55 77 88 99</p>
                  </Link>
              </section>
              </p>
          </div>
          </div>
        </Layout>
    </div>
  )
}

export default Privacy