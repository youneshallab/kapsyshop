import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import contentfulClient from '@/utils/contentful';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';

function Page() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState()
    const [productFound, setProductFound] = useState(false)
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
    console.log('wif')
  return (
    <div className='h-screen w-1/2'>
        {productFound ? <ProductCard key={id} product={product}/> : <></>}
    </div>
  )
}

export default Page