import React from 'react'
import Layout from '@/components/Layout'
import { Signika_Negative } from '@next/font/google';
import Link from 'next/link';
import {FaWhatsappSquare,FaEnvelopeSquare,FaChevronRight} from 'react-icons/fa'


const themeFontBold = Signika_Negative({ weight: ['600'], subsets: ['latin'] });
const themeFont = Signika_Negative({ weight : ['400'], subsets: ['latin'] });

function Privacy() {
  return (
    <div>
        <Layout>
          <div className= 'top-0 left-0 h-min w-full grid grid-cols-12 pt-48'>
            <div className='col-start-3 col-end-7 h-screen flex flex-col gap-1'>
              <Link href="/about" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>About</Link>
              <Link href="/contactus" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Contact Us</Link>
              <div className={'text-[32px] h-12  font-bold text-blue-900 flex gap-2 items-center '.concat(themeFontBold.className)}>
                <FaChevronRight></FaChevronRight>
                <p>Privacy</p>
              </div>
              <Link href="/terms" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Terms of Use</Link>
              <Link href="/shipping" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Shipping and Return</Link>
              <Link href="/payment" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Payment Policies</Link>
            </div>
            <div className='col-start-7 col-end-12 '>
              <p className={'text-xl text-blue-900 '.concat(themeFont.className)}>
              <section>
                  <h2 className={'text-2xl  mb-1 '.concat(themeFontBold.className)}>Introduction</h2>
                  <p>Welcome to Kapsy! This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website and make purchases from us. By accessing or using our website, you agree to the terms of this Privacy Policy.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Information We Collect</h2>
                  <p>When you make a purchase on Kapsy, we may collect the following personal information:</p>
                  <ul>
                      <li>First name</li>
                      <li>Last name</li>
                      <li>Phone number</li>
                      <li>Address</li>
                  </ul>
                  <p>We collect this information to process your orders and provide you with the best possible shopping experience.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                      <li>Process and fulfill your orders</li>
                      <li>Send order confirmations and shipping updates</li>
                      <li>Respond to your inquiries and customer service requests</li>
                      <li>Improve our website and services</li>
                      <li>Send you marketing communications (if you have opted-in to receive them)</li>
                  </ul>
                  <p>Your personal information will not be sold, exchanged, or disclosed to any third party without your consent, except for the purpose of delivering the purchased product or service requested.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Payment Information</h2>
                  <p>We do not store any payment information, such as credit card details. All payment transactions are processed through secure and trusted third-party payment gateways.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Security</h2>
                  <p>Kapsy is committed to protecting the security of your personal information. We implement appropriate security measures to prevent unauthorized access, disclosure, or alteration of your information.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Cookies and Similar Technologies</h2>
                  <p>Kapsy uses cookies and similar technologies to enhance your browsing experience and gather information about how our website is used. You can manage your cookie preferences through your browser settings.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Third-Party Links</h2>
                  <p>Our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of these third-party websites before providing any personal information.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Changes to this Privacy Policy</h2>
                  <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on this page. It is your responsibility to review this page periodically to stay informed about how we handle your personal information.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Contact Us</h2>
                  <p>If you have any questions or concerns about our Privacy Policy or how we handle your personal information, please don't hesitate to contact us at:</p>
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