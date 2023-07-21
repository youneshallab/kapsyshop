import React, { useState } from 'react'
import { Signika_Negative } from '@next/font/google';
import Image from 'next/image';
import { useAppSelector } from '@/redux/hooks';
import Layout from '@/components/Layout';
import { useRef, useEffect } from 'react';
import 'reactjs-popup/dist/index.css';
import { addDoc, collection } from 'firebase/firestore';
import db from "../../utils/firebase";
import Modal from 'react-modal';
import { FaWindowClose, FaCheck } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { EmptyCart, DeleteFromCart } from '@/redux/slices/cart';
import { useAppDispatch } from '@/redux/hooks';
import Link from 'next/link';

const themeFont = Signika_Negative({
  weight: ['600', '500', '700'],
  subsets: ['latin'],
});

function Cart() {
  const dispatch = useAppDispatch();
  const ref = useRef(null)
  const cart = useAppSelector((store) => store.cart);
  const [footerVisible, setFooterVisible] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [order, setOrder] = useState<string>('')
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const deleteItemsFromCart = (id:any) => {
    dispatch(DeleteFromCart(id));
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeModalWithEmptyCart() {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
    setIsOpen(false);
    dispatch(EmptyCart());
  }

  useEffect(()=>{
    setOrder(JSON.stringify(cart.items))
  },[cart])

  const handleFirstNameChage = (e:any) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e:any) => {
    setLastName(e.target.value)
  }
  
  const handlePhoneChange = (e:any) => {
    setPhone(e.target.value)
  }
  
  const handleAddressChange = (e:any) => {
    setAddress(e.target.value)
  }

  useEffect(()=>{
    var totalVar:number = 0
    cart.items.map(item => {
      totalVar = totalVar + item.total
    })
    setTotal(totalVar)
  },[cart])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the target element is currently visible in the viewport
          if (entry.isIntersecting) {
            setFooterVisible(true)
          }
          if (!entry.isIntersecting) {
            setFooterVisible(false)
          }
        });
      },
      {
        threshold: 0.5, // Customize the threshold value as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

 

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const collectionRef = collection(db, "orders")
    const payload = {firstName: firstName, lastName: lastName, phone: phone, address: address, order: order}
    console.log(payload)
    try{
        const newDoc = await addDoc(collectionRef, payload)
        openModal()
        setFirstName('')
        setLastName('')
        setPhone('')
        setAddress('')
        setOrder('')
    }
    catch(err){
        console.error("writeToDB failed. reason :", err)
    }
  }
  

  return (
    <Layout>
        <div className={` ${themeFont.className.toString()} grid grid-cols-12 w-full h-max relative`}>
          <div className=" relative min-h-screen col-start-2 col-end-7 pt-40 flex flex-col gap-3 ">
            {cart.items.length > 0 ?
            cart.items.map((product, i) => (
                <div key={i} className="flex items-center ">
                  <div className='mr-5'>
                    <Image
                      className="rounded-md"
                      src={product.image}
                      alt="product_image"
                      height={190}
                      width={290}
                      />
                  </div>
                  <div className='flex flex-col'>
                    <div className=' mb-9 '>
                      <button className='text-xs text-blue-500 underline' onClick={()=>deleteItemsFromCart(product.id)}>Remove from basket</button>
                    </div>
                    <div className='mb-4 text-xl'>
                      {product.name} x <span className='text-blue-500'>{product.quantity}</span>
                    </div>
                    <div className=" text-blue-900 ">
                      Price: <span className='text-blue-500'>{product.total}</span> dhs
                    </div>
                  </div>
                </div>
              )):
              <div className='flex flex-col items-center justify-center pt-20'>
                <p className={`${themeFont.className.toString()} text-lg text-blue-900 mb-8`}>Your Cart is empty</p>
                <Link href="products">
                  <button
                    className={
                      'z-30 flex gap-4 items-center justify-center  bg-blue-900 text-xl text-white hover:drop-shadow-xl' +
                      ' px-5 py-3 h-12 rounded-3xl hover:bottom-[1px] relative '
                    }
                    
                    >
                    See More Products
                    <AiOutlineArrowRight className="font-extrabold ml-2" />
                  </button>
                </Link>
              </div>
              }
          </div>
          <div className="pt-40 relative col-start-8 col-end-12 flex ">
            <div className={footerVisible ? 'self-end relative bottom-40 w-full':' fixed bottom-40 w-1/3'}>
              <form onSubmit={(e)=>handleSubmit(e)} className='p-5 flex flex-col border-2 border-blue-900 rounded'>
                <label className=' p-2 flex flex-col'>
                <p className='font-semibold	' onClick={()=>openModal()}>Nom:</p>
                  <input className="px-1 py-px border-[1px] rounded" type="text" onChange={handleLastNameChange} 
                   value={lastName} placeholder="Enter your last name" required></input>
                </label>
                <label className=' p-2 flex flex-col'>
                <p className='font-semibold	'>Prénom:</p>
                  <input className="px-1 py-px  border-[1px] rounded" type="text" onChange={handleFirstNameChage}
                  value={firstName} placeholder="Enter your first name" required></input>
                </label>
                <label className=' p-2 flex flex-col'>
                <p className='font-semibold	'>Téléphone:</p>
                  <input className="px-1 py-px  border-[1px] rounded" type="tel" onChange={handlePhoneChange}
                  value={phone} placeholder="Enter your phone number" required></input>
                </label>
                <label className=' p-2 flex flex-col'>
                  <p className='font-semibold	'>Adresse:</p>
                  <textarea  className="px-1  py-px  h-20 border-[1px] rounded resize-none" onChange={handleAddressChange}
                  value={address} placeholder="Enter your address" required></textarea>
                </label>
                <div className='mx-4 flex justify-between text-lg'>
                  <div>Total :</div>
                  <div><span className='text-blue-500'>{total}</span> dhs</div>
                </div>
                {cart.items.length > 0 ?
                <button type="submit" 
                  className={'z-30  bg-blue-900 text-xl text-white hover:drop-shadow-xl hover:bottom-[1px] relative'+
                  '  py-2 mt-1 w-full rounded-3xl '.concat(themeFont.className) +
                  ' text-center cursor-pointer '} >
                  Valider la commande
               </button>:
                <button type="submit" 
                  className={'z-30  bg-slate-400 text-xl text-white relative'+
                  '  py-2 mt-1 w-full rounded-3xl '.concat(themeFont.className) +
                  ' text-center '} disabled>
                  Valider la commande
                </button>
                }
              </form>
            </div>
          </div>
        </div>
        <div ref={ref} className='absolute h-4 w-4'></div>
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
                <p>Confirmation successful</p>
                <FaCheck className=' text-green-700'></FaCheck>
              </div>
              <FaWindowClose onClick={closeModal} className='text-blue-900 hover:text-sky-700 cursor-pointer'></FaWindowClose>
            </div>
            <div className={`text-center ${themeFont.className.toString()} text-blue-900`}>Thank you for your order! We're almost there! One of our agents will be reaching out to you shortly to finalize the details.</div>
            <button onClick={closeModalWithEmptyCart}
              className={'  bg-blue-900 text-xl text-white hover:drop-shadow-xl hover:bottom-[1px] relative'+
              '  py-2 px-6 self-center justify-self-end place-self-end mt-1 w-max rounded-3xl '+
              ' text-center cursor-pointer '.concat(themeFont.className)} >
                Empty Cart and Close
            </button>
          </div>
        </Modal>
    </Layout>
  )
}

export default Cart