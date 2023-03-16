import React from 'react'
import Header from '@/components/Header'
import contentfulClient from '@/utils/contentful'
import { useState, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import { Signika_Negative } from '@next/font/google'
import headerImg from "../public/portrait.jpg"

const themeFont = Signika_Negative({weight: ['600'],subsets: ['latin'] })

function products() {

const [data, setData] = useState<[]>([])

useEffect(()=>{
    let isFetched: boolean = true
    if(isFetched){
        contentfulClient.getEntries({
            content_type: "product",
            select: "fields",
            order: "fields.price"
        })
        .then((response:any) => {
            const sanitizedEntries = response.items.map((item:any)=>{
                /*
                const pics = item.fields.pictures.map((pic:any)=>{
                    return {
                         
                    }
                })
                */
                return {
                    ...item.fields,
                }
            })
            setData(sanitizedEntries)
        })
        .catch(console.error)
    }
    return ()=>{
        isFetched = false
    }  
},[])

const ProductCards = ():JSX.Element => {
    const productCards = data.map((product:any) => {
        return (
            <ProductCard key={product.id} product={product}/>
        )
    })
    return (
    <div className='grid grid-cols-1 sm:grid-cols-3 '>
        {productCards}
    </div>
    )

}

  return (
    <div className='w-full bg-white '>
        <Header color="white"/>
        <div className='min-h-screen'>
            <div className="bg-teal-400 z-40 h-[80vh] w-full rounded-b-[25%] border-b-8 border-blue-800 "
            style={{
                backgroundImage: `url(${headerImg.src})`,
                backgroundSize: "cover",
                resize: "both"
            }}>
            <div className='w-full h-full rounded-b-[24%]  bg-[#00000052]'></div>
                <div className=' mx-24 max-w-2xl top-24 absolute '>
                    <h3 className={'text-white text-3xl lg:text-5xl p-4 '.concat(themeFont.className)}>Le cuir artisanal à votre poignet</h3>
                    <div className={'text-white p-4 lg:text-lg '.concat(themeFont.className)}>Des bracelets et portefeuilles en cuir de haute qualité, faits à la main par des artisans passionnés. Des pièces uniques, durables et élégantes, conçues pour durer dans le temps. Une collection intemporelle, disponible en différentes couleurs et styles pour répondre à toutes vos envies.</div>
                </div>
            </div>
            <div className='flex w-full justify-between '>
                
                <div className='w-4/5 mx-auto flex flex-col lg:flex-row justify-between '>
                    <h4 className={'text-blue-900 text-5xl pt-6 '.concat(themeFont.className)}>
                        Parcourez la collection 
                    </h4>
                    <div className='pt-8 flex justify-between w-72'>
                        <button className={' bg-white text-blue-900 rounded-xl h-8 px-2 border-[1px] border-blue-200'+
                    ' hover:border-blue-900 focus:bg-blue-900 focus:text-white  '+
                    'focus:border-blue-900 '.concat(themeFont.className)}>Tout</button>
                        <button className={' bg-white text-blue-900 rounded-xl h-8 px-2 border-[1px] border-blue-200'+
                    ' hover:border-blue-900 focus:bg-blue-900 focus:text-white '+
                    'focus:border-blue-900 '.concat(themeFont.className)}>Bracelets</button>
                        <button className={' bg-white text-blue-900 rounded-xl h-8 px-2 border-[1px] border-blue-200'+
                    ' hover:border-blue-900 focus:bg-blue-900 focus:text-white '+
                    'focus:border-blue-900 '.concat(themeFont.className)}>Portes-Feuilles</button>
                    </div>
                </div>
            </div>
        </div>
        <ProductCards/>
    </div>
  )
}

export default products