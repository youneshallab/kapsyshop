import React from 'react'
import Header from '@/components/Header'
import { Signika_Negative } from '@next/font/google';
import { AiOutlineCheck } from "react-icons/ai"

const themeFont = Signika_Negative({weight: ['600'],subsets: ['latin'] })

function Cart() {
  return (
    <div className='bg-white'>
        <Header></Header>
        <div className='h-screen w-full pt-24 bg-white flex flex-row '>
          <div className='grow-[3]  h-screen flex flex-col gap-2 pl-10'>
            <div className='h-64 w-full border-2 border-teal-500 '>
              one cart element
            </div>
            <div className='h-64 w-full border-2 border-teal-500 '>
              one cart element
            </div>
            <div className='h-64 w-full border-2 border-teal-500 '>
              one cart element
            </div>
          </div>
          <div className='grow-[2] '>
          <div className='fixed px-3 w-1/3 '>
            <div className=''>
              <form className='flex flex-col border-2'>
                <label className=' p-2 flex flex-col'>
                <p className='font-semibold	'>Nom:</p>
                  <input className="px-1 border-[1px] rounded" type="text" name="nom" placeholder="Enter your last name"></input>
                </label>
                <label className=' p-2 flex flex-col'>
                <p className='font-semibold	'>Prénom:</p>
                  <input className="px-1 border-[1px] rounded" type="text" name="prenom" placeholder="Enter your first name"></input>
                </label>
                <label className=' p-2 flex flex-col'>
                <p className='font-semibold	'>Téléphone:</p>
                  <input className="px-1 border-[1px] rounded" type="tel" name="phone" placeholder="Enter your phone number"></input>
                </label>
                <label className=' p-2 flex flex-col'>
                  <p className='font-semibold	'>Adresse:</p>
                  <textarea  className="px-1 h-14 border-[1px] rounded resize-none" name="address" placeholder="Enter your address"></textarea>
                </label>
                <input type="submit" value="Valider" 
                className={'z-30 self-end  bg-blue-900 text-xl text-white hover:drop-shadow-xl hover:bottom-[1px]'+
                ' mr-2  py-2 px-6 h-14 mt-4 w-28 rounded-3xl '+
                ' items-center text-center cursor-pointer '.concat(themeFont.className)} >
                </input>
              </form>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Cart