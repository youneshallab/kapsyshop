/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Header from '@/components/Header';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Signika_Negative } from '@next/font/google';
import bgImg from '../public/pxfuel.jpg';
import Link from 'next/link';
import Layout from '@/components/Layout';

const themeFont = Signika_Negative({ weight: ['600'], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kapsy Shop</title>
        <meta name="description" content="Kapsy Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <Layout>
        <>
          <div
            className="w-full h-screen absolute -z-50 "
            style={{
              backgroundImage: `url(${bgImg.src})`,
              backgroundSize: 'cover',
              resize: 'both',
            }}
          ></div>
          <Header color="blue-900" />
          <div className=" top-0 left-0 h-screen w-full">
            <div className="top-1/4 left-1/2 relative -translate-x-1/2 w-fit">
              <p
                className={'text-center text-6xl text-blue-900 '.concat(
                  themeFont.className
                )}
              >
                It's not just a Bracelet
              </p>
              <br />
              <p
                className={'text-center text-2xl text-blue-900 '.concat(
                  themeFont.className
                )}
              >
                It's a SuperPower
              </p>
              <br />
              <Link href="/products">
                <button
                  className={
                    'flex bg-blue-900 text-xl text-white hover:drop-shadow-xl hover:bottom-[1px]' +
                    ' px-5 py-3 mt-4 rounded-3xl -translate-x-1/2 ' +
                    'left-1/2 relative items-center '.concat(
                      themeFont.className
                    )
                  }
                >
                  <div>Shop Now</div>
                  <AiOutlineArrowRight className="font-extrabold ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </>
      </Layout>
    </>
  );
}
