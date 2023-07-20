import React from 'react'
import Layout from '@/components/Layout'
import { Signika_Negative } from '@next/font/google';
import Link from 'next/link';
import {FaWhatsappSquare,FaInstagramSquare,FaFacebookSquare,FaEnvelopeSquare,FaChevronRight} from 'react-icons/fa'

const themeFontBold = Signika_Negative({ weight: ['600'], subsets: ['latin'] });
const themeFont = Signika_Negative({ weight : ['400'], subsets: ['latin'] });

function ContactUs() {
  return (
    <div>
        <Layout>
          <div className= 'top-0 left-0 h-min w-full grid grid-cols-12 pt-48'>
            <div className='col-start-3 col-end-7 h-screen flex flex-col gap-1'>
              <Link href="/about" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>About</Link>
              <div className={'text-[32px] h-12  font-bold text-blue-900 flex gap-2 items-center '.concat(themeFontBold.className)}>
                <FaChevronRight className=''></FaChevronRight>
                <p className=''>Contact Us</p>
              </div>
              <Link href="/privacy" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Privacy</Link>
              <Link href="/terms" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Terms of Use</Link>
              <Link href="/shipping" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Shipping and Return</Link>
              <Link href="/payment" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Payment Policies</Link>
            </div>
            <div className='col-start-7 col-end-12 '>
              <div className={'text-xl text-blue-900 '.concat(themeFont.className)}>
              <section>
                  <h2  className={'text-2xl  mb-1  '.concat(themeFontBold.className)}>Kapsy’s Customer Care Team</h2>
                  <p>Kapsy’s Customer Care team would be happy to assist you with your online order. Contact us for product and buying questions, delivery inquiries, returns and exchanges. We are available every day, from 8 am to 6 pm.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Contact Information</h2>
                  <Link href="mailto:kapsyshop@gmail.com" target='_blank' className='flex gap-2 items-center hover:text-red-500'>
                    <FaEnvelopeSquare></FaEnvelopeSquare>
                    <p>Email: kapsyshop@gmail.com</p>
                  </Link>
                  <Link href="https://wa.me/212655778278" target='_blank' className='flex gap-2 items-center hover:text-green-600'>
                    <FaWhatsappSquare></FaWhatsappSquare>
                    <p>WhatsApp: +212 6 55 77 88 99</p>
                  </Link>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Follow Us on Social Media</h2>
                  <ul>
                      <li>
                        <Link className='flex gap-2 items-center hover:text-purple-500' href="https://www.instagram.com/kapsy_shop" target='_blank'>
                          <FaInstagramSquare></FaInstagramSquare>
                          <p className=''>Instagram</p>
                        </Link>
                      </li>
                      <li >
                        <Link className='flex gap-2 items-center hover:text-sky-600' href="https://www.facebook.com/kapsy_shop" target='_blank'>
                          <FaFacebookSquare></FaFacebookSquare>
                          <p>Facebook</p>
                        </Link>
                      </li>
                  </ul>
              </section>
              </div>
          </div>
          </div>
        </Layout>
    </div>
  )
}

export default ContactUs