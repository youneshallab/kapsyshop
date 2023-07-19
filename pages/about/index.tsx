import React from 'react'
import Layout from '@/components/Layout'
import { Signika_Negative } from '@next/font/google';
import Link from 'next/link';
import {FaChevronRight} from 'react-icons/fa';

const themeFontBold = Signika_Negative({ weight: ['600'], subsets: ['latin'] });
const themeFont = Signika_Negative({ weight : ['400'], subsets: ['latin'] });

function About() {
  return (
    <div>
        <Layout>
          <div className= 'top-0 left-0 h-min w-full grid grid-cols-12 pt-48'>
            <div className='col-start-3 col-end-7 h-screen flex flex-col gap-1'>
              <div className={'text-[32px] h-12  font-bold text-blue-900 flex gap-2 items-center '.concat(themeFontBold.className)}>
                <FaChevronRight></FaChevronRight>
                <p>About</p>
              </div>
              <Link href="/contactus" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Contact Us</Link>
              <Link href="/privacy" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Privacy</Link>
              <Link href="/terms" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Terms of Use</Link>
              <Link href="/shipping" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Shipping and Return</Link>
              <Link href="/payment" className={'text-[32px] h-12  font-bold text-blue-900  cursor-pointer '.concat(themeFontBold.className)}>Payment Policies</Link>
            </div>
            <div className='col-start-7 col-end-12 '>
              <p className={'text-xl text-blue-900 '.concat(themeFont.className)}>
                <section>
                    <h2 className={'text-2xl  mb-1 '.concat(themeFontBold.className)}>Passion for Timeless Leather Craftsmanship</h2>
                    <p>At Kapsy, we take pride in creating exquisite handcrafted leather accessories that exemplify elegance, style, and durability. From stunning bracelets to sophisticated wallets, each piece is meticulously designed and crafted in the heart of Morocco, using only the finest quality leather.</p>
                </section>

                <section>
                    <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Commitment to Uncompromising Quality</h2>
                    <p>Quality is at the core of everything we do. Each accessory is handpicked, and our skilled artisans dedicate their expertise to handcrafting every detail. The result? Leather accessories that stand the test of time, maintaining their elegance and allure for years to come.</p>
                </section>

                <section>
                    <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Distinctive Designs for the Modern Gentleman</h2>
                    <p>Our designs are an embodiment of sophistication and innovation. We take pride in staying ahead of fashion trends while preserving the charm of classic aesthetics. Whether you seek a bold statement piece or a subtle accent for your ensemble, our collection caters to the modern gentleman's diverse preferences.</p>
                </section>

                <section>
                    <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>A Commitment to Sustainability</h2>
                    <p>We are conscious of our impact on the environment and are continuously seeking ways to minimize our ecological footprint. Our commitment to sustainability drives us to source eco-friendly materials and employ responsible production practices. Together, we can enjoy timeless accessories while safeguarding our planet's future.</p>
                </section>
                
                <section>
                    <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Customers' Delight and Loyalty</h2>
                    <p>Nothing brings us more joy than knowing our customers cherish their Kapsy accessories. We are humbled by the loyalty of those who return to us, not just once, but multiple times. The relationships we build with our clientele inspire us to elevate our craftsmanship continually.</p>
                </section>

                <section>
                    <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Personal Touch, Giftable Elegance</h2>
                    <p>From the moment you receive your Kapsy accessory, you'll experience our dedication to a personal touch. Every piece is beautifully packaged, making it an ideal gift for your loved ones. Share the joy of exceptional craftsmanship and luxurious leather with those you care about.</p>
                </section>

                <section>
                    <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>A World of Options</h2>
                    <p>Discover a world of options within our collection. From bracelets that exude masculinity and charm to wallets that exude sophistication, you'll find the perfect accessory to complement your style. Choose from an array of sizes, colors, and designs that resonate with your unique personality.</p>
                </section>

                <section>
                    <h2 className={'text-2xl  mb-1 mt-8 '.concat(themeFontBold.className)}>Customization - Your Signature on Leather</h2>
                    <p>Soon, we will be introducing a unique customization service, allowing you to add your signature touch to our leather creations. Whether it's a meaningful engraving or a personalized design, your accessory will become an expression of your individuality.</p>
                </section>

                <section>
                    <h2 className={'text-2xl mb-1 mt-8 '.concat(themeFontBold.className)}>Contact Us</h2>
                    <p>We'd love to hear from you! For any inquiries or to place an order, please visit our "Contact Us" page, where you'll find our contact information and ways to get in touch with our dedicated team.</p>
                </section>
              </p>
          </div>
          </div>
        </Layout>
    </div>
  )
}

export default About