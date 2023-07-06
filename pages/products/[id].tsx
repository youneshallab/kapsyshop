import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import contentfulClient from '@/utils/contentful';
import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { Signika_Negative } from '@next/font/google';
import {AiOutlineArrowRight} from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '@/redux/features/cartCounter';
import { RootState } from '@/redux/store';

const themeFont = Signika_Negative({weight: ['600'],subsets: ['latin'] })
function Page() {

    const dispatch = useDispatch()

    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<any>()
    const [productFound, setProductFound] = useState(false)
    const primaryColorRef = useRef<HTMLDivElement>(null)
    const secondaryColorRef = useRef<HTMLDivElement>(null)
    const [counter, setCounter] = useState<number>(1)

    const addItemsToCart = () => {
        const existingCart = localStorage.getItem('cart');
        const cartItems = existingCart ? JSON.parse(existingCart) : [];
        cartItems.push({
            ...product,
            quantity: counter,
        });
        const updatedCart = JSON.stringify(cartItems);
        localStorage.setItem('cart', updatedCart);
        dispatch(increment())
    }

    const incrementCounter = () => {
        setCounter(prev => prev + 1)
    };

    const decrementCounter = () => {
        setCounter(prev => prev - 1)
    };
    
    useEffect(()=>{
        contentfulClient.getEntries({
            content_type: "product",
            select: "fields",
            'fields.id': id,
        })
        .then((entry:any) => {
            setProduct(entry.items[0].fields)
            setProductFound(true)
        }
        )
        .catch(console.error)
    },[]) 

    
    if(productFound === true && product != undefined){
        const primaryColorViewClass = `colorview${product['primaryColor'].split('#')['1']}`
        primaryColorRef.current?.classList.add(primaryColorViewClass)
        var pol = document.querySelectorAll(`.${primaryColorViewClass}`) as NodeListOf<HTMLDivElement> | null;
        if(pol){
        for (var i = 0; i < pol.length; i++) {
            pol[i].style.backgroundColor = `#${product['primaryColor'].split('#')['1']}` 
            }}
        const secondaryColorViewClass = `colorview${product['secondaryColor'].split('#')['1']}`
        secondaryColorRef.current?.classList.add(secondaryColorViewClass)
        var pol2 = document.querySelectorAll(`.${secondaryColorViewClass}`) as NodeListOf<HTMLDivElement> | null;
        if(pol2){
        for (var i = 0; i < pol2.length; i++) {
            pol2[i].style.backgroundColor = `#${product['secondaryColor'].split('#')['1']}` 
            }}
    }
  return (
    <>
    <Header></Header>
    <div className='flex w-full bg-white '>
        <div className='h-screen w-[55%] fixed overflow-hidden'>
            {product != undefined ? 
            <Image
                src= {`https:${product['pictures']['0']['fields']['file']['url']}`}
                width={1500}
                height={1800}
                alt="Picture of the author"
            />: <></>}
        </div>
        <div className='h-screen w-[55%] '>
        </div>
        <div className='pt-20 pl-12 pr-40 bg-white relative max-w-[45%] '>
        {product != undefined ? 
            <div className=' h-full mb-24'>
                <div className={' mb-2 text-white bg-blue-900 rounded-xl px-2 w-min whitespace-nowrap'+
                ' '.concat(themeFont.className)}>{product['price']} dhs
                </div>
                <div className='flex items-center justify-between '>
                    <div className={'   text-blue-900 text-3xl '+
                    ' text-bold w-full '.concat(themeFont.className)}>
                    {product['productName']}</div>
                    <div className='flex items-center'>
                        <div ref={primaryColorRef} className={` z-20 w-8 h-8 rounded-2xl translate-x-1/2 border-[1px] border-white `}></div>
                        <div ref={secondaryColorRef} className=' w-7 h-7 rounded-2xl '></div>
                    </div>
                </div>
                <div className={' text-blue-900 text-xl'+
                ' text-bold w-full	-top-2 relative '.concat(themeFont.className)}>
                {product['category']}</div>
                <div className={' mt-2  text-blue-900 text-xs '+
                '	whitespace-pre-line '.concat(themeFont.className)}>
                <p>{product['description']}</p></div>
                <div className='mt-8 flex   items-center  justify-between'>
                    <div className='flex flex-row items-center justify-around h-12 mr-4 w-20
                        border-[1px] border-gray-400  rounded-3xl hover:border-blue-900
                        px-2 '>
                        {counter.valueOf() > 1 ? <button onClick={decrementCounter} className=' px-1 rounded-3xl text-gray-400 hover:text-blue-900'>-</button>
                        :<button disabled className=' px-1 rounded-3xl text-gray-400'>-</button>}
                        <div className=' text-center mx-1'>{counter.valueOf()}</div>
                        {counter.valueOf() < 10 ? <button onClick={incrementCounter} className=' px-1 rounded-3xl text-gray-400 hover:text-blue-900'>+</button>
                        :<button disabled className=' px-1 rounded-3xl text-gray-400'>+</button>}
                    </div>
                    <button className={'z-30 flex animate-fade animate-slideup  bg-blue-900 text-xl text-white hover:drop-shadow-xl hover:bottom-[1px]'+
                    ' px-5 py-3 h-12 w-64 rounded-3xl '+
                    ' relative items-center text-center '.concat(themeFont.className)} 
                        onClick={() => addItemsToCart()}>
                        Add to Cart
                        <AiOutlineArrowRight className='font-extrabold ml-2'/>
                    </button>
                </div>
            </div>
            
        : <></>}
        </div>
    </div>
    </>

  )
}

export default Page