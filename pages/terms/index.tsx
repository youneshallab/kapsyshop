import React from 'react'
import Layout from '@/components/Layout'
import { Signika_Negative } from '@next/font/google';
import Link from 'next/link';
import {FaWhatsappSquare,FaEnvelopeSquare,FaChevronRight} from 'react-icons/fa'

const themeFontBold = Signika_Negative({ weight: ['600'], subsets: ['latin'] });
const themeFont = Signika_Negative({ weight : ['400'], subsets: ['latin'] });

function Terms() {
  return (
    <div>
        <Layout>
          <div className= 'top-0 left-0 h-min w-full grid grid-cols-12 pt-48'>
            <div className='col-start-3 col-end-7 h-screen flex flex-col gap-1'>
              <Link href="/about" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>About</Link>
              <Link href="/contactus" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Contact Us</Link>
              <Link href="/privacy" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Privacy</Link>
              <div className={'text-[32px] h-12  font-bold text-blue-900 flex gap-2 items-center '.concat(themeFontBold.className)}>
                <FaChevronRight></FaChevronRight>
                <p>Terms of Use</p>
              </div>
              <Link href="/shipping" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Shipping and Return</Link>
              <Link href="/payment" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Payment Policies</Link>
            </div>
            <div className='col-start-7 col-end-12 '>
              <p className={'text-xl text-blue-900 '.concat(themeFont.className)}>
              <section>
                  <h2 className={'text-2xl  mb-1 '.concat(themeFontBold.className)}>Introduction</h2>
                  <p>Welcome to Kapsy! By accessing or using our website, you agree to comply with these Terms of Use. If you do not agree with any part of these terms, please refrain from using our website.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Intellectual Property</h2>
                  <p>The content on this website, including but not limited to text, images, graphics, logos, and software, is the intellectual property of Kapsy and is protected by applicable copyright and trademark laws. You may not use, reproduce, or distribute any content from this website without obtaining proper authorization from Kapsy.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Use of Website</h2>
                  <p>You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict or inhibit their use and enjoyment of the website. Prohibited activities include, but are not limited to:</p>
                  <ul>
                      <li>Uploading or transmitting any unlawful, harmful, or offensive content</li>
                      <li>Impersonating any individual or entity</li>
                      <li>Engaging in any activity that could harm, disable, or impair the website</li>
                      <li>Attempting to gain unauthorized access to any part of the website or its server</li>
                  </ul>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Third-Party Links</h2>
                  <p>Our website may contain links to third-party websites. These links are provided for your convenience and do not signify our endorsement of the content on these sites. Kapsy is not responsible for the content or practices of any third-party websites. We encourage you to review the terms and privacy policies of these sites before using them.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Limitation of Liability</h2>
                  <p>Kapsy will not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of this website or any linked sites. We do not guarantee the accuracy, completeness, or reliability of any content on this website.</p>
              </section>

              <section>
                  <h2  className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Indemnification</h2>
                  <p>You agree to indemnify and hold harmless Kapsy and its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses (including attorneys' fees) arising out of your use of the website or any violation of these Terms of Use.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Changes to Terms</h2>
                  <p>Kapsy reserves the right to update or modify these Terms of Use at any time without prior notice. It is your responsibility to review these terms periodically. Continued use of the website after any changes will signify your acceptance of the revised terms.</p>
              </section>

              <section>
                  <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Contact Us</h2>
                  <p>If you have any questions or concerns regarding these Terms of Use, please don't hesitate to contact us at:</p>
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

export default Terms