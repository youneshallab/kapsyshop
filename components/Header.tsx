import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { Teko, Signika_Negative } from '@next/font/google'
import Link from 'next/link';
import { useState, useEffect } from 'react';

const logoFont = Teko({weight: ['600'],subsets: ['latin'] })
const themeFont = Signika_Negative({weight: ['600'],subsets: ['latin'] })

function Header({color}:any) {
  const [headerColor, setHeaderColor] = useState(" text-blue-900 ")
  useEffect(()=>{
    if(color === "white"){
        setHeaderColor(" text-white ")
        }
  },[])
  
  return (
    <div>
        <div className={'top-4 fixed left-8 text-3xl  text-blue-900 z-50 cursor-pointer'+
        ' '.concat(logoFont.className).concat(headerColor)}>
        <Link href="/">KAPSY</Link>
        </div>
        <nav className='absolute top-6 right-8 w-64 flex flex-row-reverse space-x-8 space-x-reverse'>
            <li className={'list-none fixed text-xl z-50 text-blue-900 cursor-pointer'.concat(headerColor)}>
                <BsCart4/>
            </li>
            <li className={'list-none fixed text-blue-900 right-10 z-50 cursor-pointer '.concat(headerColor).concat(themeFont.className)}>
                About
            </li>
            <li className={'list-none fixed text-blue-900 right-24 z-50 cursor-pointer '.concat(headerColor).concat(themeFont.className)}>
                <Link href="/products">
                    Shop
                </Link>
            </li>
        </nav>
    </div>
  )
}

export default Header