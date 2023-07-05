import React from 'react'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react';
import { Signika_Negative } from '@next/font/google'
import {AiOutlineArrowRight} from "react-icons/ai"
import Link from 'next/link';

const themeFont = Signika_Negative({weight: ['600'],subsets: ['latin'] })

function ProductCard({product,addItemsToCart}:any) {

  const primaryColorRef = useRef<HTMLDivElement>(null)
  const secondaryColorRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false)

  useEffect(()=>{
    const primaryColorViewClass = `colorview${product.primaryColor.split('#')['1']}`
    primaryColorRef.current?.classList.add(primaryColorViewClass)
    var pol = document.querySelectorAll(`.${primaryColorViewClass}`) as NodeListOf<HTMLDivElement> | null;
    if(pol){
    for (var i = 0; i < pol.length; i++) {
          pol[i].style.backgroundColor = `#${product.primaryColor.split('#')['1']}` 
        }}
    const secondaryColorViewClass = `colorview${product.secondaryColor.split('#')['1']}`
    secondaryColorRef.current?.classList.add(secondaryColorViewClass)
    var pol2 = document.querySelectorAll(`.${secondaryColorViewClass}`) as NodeListOf<HTMLDivElement> | null;
    if(pol2){
    for (var i = 0; i < pol2.length; i++) {
          pol2[i].style.backgroundColor = `#${product.secondaryColor.split('#')['1']}` 
        }}
  },[isHovered,isPageLoaded])

  const mouseOverHandle = () => {
    setIsHovered(true)
  }

  const ColorAndPrice = () => {
    return (
      <>
        <div className='flex mb-4'>
          <div ref={primaryColorRef} className=' z-20 w-6 h-6 rounded-2xl'></div>
          <div ref={secondaryColorRef} className= ' w-6 h-6 rounded-2xl -translate-x-1/2'></div>
          <div className={' text-sm text-blue-900  items-center text-center '+
          ''.concat(themeFont.className)}>{product.primaryColor.split('#')['0']} / {product.secondaryColor.split('#')['0']}</div>
        </div>
        <div className={' mb-4 bg-white text-blue-900 rounded-xl px-2'+
        ' '.concat(themeFont.className)}>{product.price} dhs
        </div>
      </>
    ) 
    }

  const mouseLeaveHandle = () => {
    setIsHovered(false)
  }
  
  useEffect(()=>{
    setIsPageLoaded(true)
  },[])

  return (
      <div className="flex relative border-[1px]" onMouseEnter={()=>mouseOverHandle()} onMouseLeave={()=>mouseLeaveHandle()}>
          <div className='pt-[110%] '>
          <Link href={"/products/".concat(product.id)}>
            <Image
              src= {`https:${product.pictures['0'].fields.file.url}`}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
            </Link>
          </div>
          {!isHovered && 
            <div className=' w-full flex justify-end items-center flex-col'>
              <div className='z-10 w-[80%] flex justify-between '>
                <ColorAndPrice/>
              </div>
            </div>
          }
          
          {isHovered && 
            <>
              <div className={'z-10 animate-slidedown absolute mt-2 left-1/2 text-blue-900 text-xl'+
              ' text-bold w-full -translate-x-1/2 px-10 text-center	 '.concat(themeFont.className)}>
                {product.productName}
              </div>
              <div className=' w-full flex justify-end items-center flex-col'>
                <div className='z-10  w-[80%] flex justify-between '>
                  <ColorAndPrice/>
                </div>
                <button className={'z-30 flex animate-fade animate-slideup  bg-blue-900 text-xl text-white hover:drop-shadow-xl hover:bottom-[1px]'+
                  ' px-5 py-3 h-12 rounded-3xl w-[80%] mb-4'+
                  ' relative items-center text-center '.concat(themeFont.className)} 
                    onClick={()=>addItemsToCart(product)}>
                      Add to Cart
                      <AiOutlineArrowRight className='font-extrabold ml-2'/>
                </button>
              </div>
            </>
          }
      </div>
  )
}

export default ProductCard