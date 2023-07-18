/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Header from '@/components/Header';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Signika_Negative } from '@next/font/google';
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
          <Header color="blue-900" />
          <div className=" top-0 left-0 h-screen w-full bg-sky-200">
            <svg className='absolute top-0 rotate-180 '  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310"><path fill="#5BE" fill-opacity="1" d="M0,288L60,266.7C120,245,240,203,360,202.7C480,203,600,245,720,240C840,235,960,181,1080,170.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <svg className='absolute top-0 rotate-180 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#fff" fill-opacity="1" d="M0,192L60,186.7C120,181,240,171,360,186.7C480,203,600,245,720,256C840,267,960,245,1080,240C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className="z-50 top-1/4 left-1/2 relative -translate-x-1/2 w-fit">
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
            <svg className='absolute bottom-0 scale-y' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#00CFff" fill-opacity="1" d="M0,128L34.3,154.7C68.6,181,137,235,206,229.3C274.3,224,343,
            160,411,117.3C480,75,549,53,617,58.7C685.7,64,754,96,823,122.7C891.4,149,960,171,1029,149.3C1097.1,
            128,1166,64,1234,37.3C1302.9,11,1371,21,1406,26.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,
            1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,
            480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFF" fill-opacity="1" d="M0,256L34.3,261.3C68.6,267,137,277,206,261.3C274.3,245,343,203,411,160C480,117,549,75,617,69.3C685.7,64,754,96,823,128C891.4,160,960,192,1029,197.3C1097.1,203,1166,181,1234,176C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
          </div>
      </Layout>
    </>
  );
}
