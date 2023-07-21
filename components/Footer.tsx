import React from 'react'
import Link from 'next/link'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import is1 from '../public/is1.jpg'
import is2 from '../public/is2.jpg'
import is3 from '../public/is3.jpg'
import { Signika_Negative } from '@next/font/google';
import db from "../utils/firebase";
import { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import Modal from 'react-modal';
import { FaCheck, FaWindowClose } from 'react-icons/fa';

const themeFontBold = Signika_Negative({ weight: ['600'], subsets: ['latin'] });
const themeFont = Signika_Negative({ weight : ['400'], subsets: ['latin'] });

function Footer() {
    const [email, setEmail] = useState<string>('')
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const handleSubmitAsync = async (e:any) => {
        e.preventDefault()
        const collectionRef = collection(db, "newsletter")
        const payload = {email: email}
        console.log(payload)
        try{
            const newDoc = await addDoc(collectionRef, payload)
            openModal()
            setEmail('')
        }
        catch(err){
            console.error("writeToDB failed. reason :", err)
        }
    }

    const handleEmailChange = (event:any) => {
        setEmail(event.target.value);
      };

    
      
    const properties = {
        prevArrow: <></>,
        nextArrow: <></>
    }

    const fadeImages = [
        {
            url: is1.src,
        },
        {
            url : is2.src,
        },
        {
            url : is3.src,
        }
      ];

  return (
    <div className='h-screen w full flex flex-col bg-white'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1E3A8A" fillOpacity="1" d="M0,224L80,240C160,256,320,288,480,266.7C640,245,800,171,960,165.3C1120,160,1280,224,1360,256L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className='bg-blue-900  w-full flex-grow grid grid-rows-5'>
            <div className='row-start-1 row-end-4 flex items-start justify-around px-40 '>
                <Link className='transition ease-in-out delay-50 bg-white hover:bg-red-300 duration-500
                cursor-pointer rounded-3xl p-3 flex w-fit gap-5' href="https://instagram.com/kapsy_shop" target='_blank'>
                    <div  className='w-20 h-20 bg-slate-600 rounded-3xl overflow-hidden'>
                        <Fade {...properties}>
                            {fadeImages.map((fadeImage, index) => (
                                <div key={index}>
                                <img style={{ width: '100%' }} src={fadeImage.url} />
                            </div>
                            ))}
                        </Fade>
                    </div>
                    <div className='py-2 flex flex-col justify-center mr-2 text-blue-900' >
                        <p className='text-sm'>Follow our Instagram</p>
                        <p className='font-bold text-xl'>@kapsy_shop</p>
                    </div>
                </Link>
                <div>
                    <span className={'text-white '.concat(themeFont.className)}>Brand</span>
                    <ul className='mt-2 w-32 flex flex-col gap-2'>
                        <li>
                            <Link className={'text-white font-bold text-xl  '.concat(themeFontBold.className)} 
                            href="products" >
                                <p>Products</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={'text-white font-bold text-xl  '.concat(themeFontBold.className)} 
                            href="contactus" >
                                <p>Contact Us</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={'text-white font-bold text-xl  '.concat(themeFontBold.className)} 
                            href="about" >
                                <p>About</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className= {'text-white '.concat(themeFont.className)}>Info</span>
                    <ul className='mt-2 w-32 flex flex-col gap-2'>
                        <li>
                            <Link className={'text-white font-bold text-xl  '.concat(themeFontBold.className)} 
                            href="privacy" >
                                <p>Privacy</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={'text-white font-bold text-xl  '.concat(themeFontBold.className)} 
                            href="terms" >
                                Terms of Use
                            </Link>
                        </li>
                        <li>
                            <Link className={'text-white font-bold text-xl leading-3 mt-3 '.concat(themeFontBold.className)} 
                            href="shipping" >
                                Shipping and Returns
                            </Link>
                        </li>
                        <li>
                            <Link className={'text-white font-bold text-xl leading-3 mt-3 '.concat(themeFontBold.className)} 
                            href="payment" >
                                Payment Policies
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='row-start-4 row-end-6 border-t-[1px] border-white px-10 flex justify-between items-end py-6'>
                <div className={'text-white text-sm '.concat(themeFont.className)}>Made by <Link className='font-bold underline' href="https://github.com/youneshallab" target='_blank'>Younes Hallab</Link></div>
                <div className='text-white w-80 mx-24'>
                    <form onSubmit={(e)=>handleSubmitAsync(e)}>
                        <label className={'flex flex-col '.concat(themeFont.className)}>
                            <span className='mb-1'>Subscribe to Newsletter</span>
                                <div className='flex border-b-2 border-white  '>
                                    <input style={{ backgroundColor: '#1E3A8A' }} className=" grow px-1 pb-[1px] outline-none 
                                    focus-within:bg-transparent focus:bg-slate-500 rounded text-white bg-blue-900" 
                                    type="email" name="email" placeholder="Enter your email" value={email} onChange={(event)=>handleEmailChange(event)}></input>
                                    <button className='font-bold mx-1 cursor-pointer' type="submit" >OK</button>
                                </div>
                            <span className='mt-1 text-sm text-slate-400'>Get notified for new arrivals exclusive access and more !</span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.50)'
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              height: '40%',
              width: '40%',
            }
          }}
          contentLabel="Example Modal"
          className={""}
        >
          <div className='flex flex-col h-full justify-between'>
            <div className={`flex flex-row text-lg justify-between ${themeFont.className.toString()} text-blue-900`}>
              <div className='flex gap-2 items-center'>
                <p>Subscription successful</p>
                <FaCheck className=' text-green-700'></FaCheck>
              </div>
              <FaWindowClose onClick={closeModal} className='text-blue-900 hover:text-sky-700 cursor-pointer'></FaWindowClose>
            </div>
            <div className={`text-center ${themeFont.className.toString()} text-blue-900`}>
            You're all set! Thanks for subscribing. Prepare to stay in the loop with our latest news and promotions.
            </div>
            <button onClick={closeModal}
              className={'z-30  bg-blue-900 text-xl text-white hover:drop-shadow-xl hover:bottom-[1px] relative'+
              '  py-2 px-6 self-center justify-self-end place-self-end mt-1 w-min rounded-3xl '+
              ' text-center cursor-pointer '.concat(themeFont.className)} >
                Fermer
            </button>
          </div>
        </Modal>
    </div>
  )
}

export default Footer