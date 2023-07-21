import React from 'react';
import Header from '@/components/Header';
import contentfulClient from '@/utils/contentful';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { Signika_Negative } from '@next/font/google';
import headerImg from '../../public/portrait.jpg';
import Layout from '@/components/Layout';

const themeFont = Signika_Negative({ weight: ['600'], subsets: ['latin'] });

function Products() {
  const [data, setData] = useState<[]>([]);
  const [productFilter, setProductFilter] = useState<string>('all')

  useEffect(() => {
    let isFetched: boolean = true;
    if (isFetched) {
      contentfulClient
        .getEntries({
          content_type: 'product',
          select: 'fields',
          order: 'fields.price',
        })
        .then((response: any) => {
          const sanitizedEntries = response.items.map((item: any) => {
            return {
              ...item.fields,
            };
          });
          setData(sanitizedEntries);
        })
        .catch(console.error);
    }
    return () => {
      isFetched = false;
    };
  }, []);

  const ProductCards = (): JSX.Element => {
      const  productCards = data.map((product: any) => {
      if(product['category'] === productFilter || productFilter === 'all'){
        return <ProductCard key={product.id} product={product} />;
      }
    });
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 ">{productCards}</div>
    );
  };

  return (
    <Layout>
      <div className="w-full bg-white ">
        <Header color="white" />
        <div className="min-h-screen  flex flex-col flex-grow">
          <div
            className=" z-40 h-[80vh] w-full rounded-b-[25%] border-b-8 border-blue-800 "
            style={{
              backgroundImage: `url(${headerImg.src})`,
              backgroundSize: 'cover',
              resize: 'both',
            }}
          >
            <div className="w-full h-full rounded-b-[24%]  bg-[#00000052] ">
              <div className=" mx-24 max-w-2xl top-24 h-[40%] absolute flex flex-col ">
                <h3
                  className={'text-white text-2xl lg:text-5xl p-4 '.concat(
                    themeFont.className
                  )}
                >
                  Le cuir artisanal à votre poignet
                </h3>
                <div
                  className={'text-white p-2 lg:text-lg overflow-hidden flex-grow '.concat(
                    themeFont.className
                  )}
                >
                  Des bracelets et portefeuilles en cuir de haute qualité, faits
                  à la main par des artisans passionnés. Des pièces uniques,
                  durables et élégantes, conçues pour durer dans le temps. Une
                  collection intemporelle, disponible en différentes couleurs et
                  styles pour répondre à toutes vos envies.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full h-full justify-center flex-grow">
            <div className="w-4/5 mx-auto flex flex-col lg:flex-row justify-between items-end ">
              <h4
                className={'text-blue-900 text-5xl  '.concat(
                  themeFont.className
                )}
              >
                Parcourez la collection
              </h4>
              <div className=" flex justify-between w-72">
                <button
                  className={
                    ' text-blue-900 rounded-xl h-8 px-2 border-[1px] border-blue-200 '.concat(themeFont.className) +
                    ' hover:border-blue-900 '.concat(productFilter === 'all' ? 'border-blue-900 text-white bg-blue-900 ' :'')
                  }
                  onClick={()=>setProductFilter('all')}
                >
                  Tout
                </button>
                <button
                  className={
                    ' text-blue-900 rounded-xl h-8 px-2 border-[1px] border-blue-200 '.concat(themeFont.className) +
                    ' hover:border-blue-900 '.concat(productFilter === 'Bracelet' ? 'border-blue-900 text-white bg-blue-900 ':'')
                  }
                  onClick={()=>setProductFilter('Bracelet')}
                >
                  Bracelets
                </button>
                <button
                  className={
                    '  text-blue-900 rounded-xl h-8 px-2 border-[1px] border-blue-200 '.concat(themeFont.className) +
                    ' hover:border-blue-900 '.concat(productFilter === 'Wallet' ? 'border-blue-900 text-white bg-blue-900 ':'')
                  }
                  onClick={()=>setProductFilter('Wallet')}
                >
                  Portes-Feuilles
                </button>
              </div>
            </div>
          </div>
        </div>
        <ProductCards />
      </div>
    </Layout>
  );
}

export default Products;
