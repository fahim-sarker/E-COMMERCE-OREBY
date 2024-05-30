import Container from '../components/Container'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import Lg from "../assets/logo.png"
import Flex from '../components/Flex';
import { useDispatch, useSelector } from 'react-redux';
import { productdeccrement, productincrement } from '../components/slice/ProductSlice';

const Cart = () => {
  let dispatch = useDispatch()
  let data = useSelector((state)=>state.Product.cartitem)

  let handleincrement = (index) =>{
   dispatch(productincrement(index))
  }
  let handledecrement = (index) =>{
   dispatch(productdeccrement(index))
  }

  return (
    <div className='my-[80px]'>
      <Container>
        <h2 className='font-sans font-bold text-[36px]'>Cart</h2>
        <p className='text-[16px] font-sans font-normal pb-[80px]'>Home  &#62;  Cart</p>
        <div className="border-2 border-[#F0F0F0]">
          <div className="bg-[#F5F5F3] h-[90px] flex justify-between items-center">
            <div className="w-[40%]">
              <h4 className='pl-10 text-[16px] font-sans font-bold'>Product</h4>
            </div>
            <div className="w-[15%]">
              <h4 className='text-[16px] font-sans font-bold text-center'>Price</h4>
            </div>
            <div className="w-[30%]">
              <h4 className='text-[16px] font-sans font-bold text-center'>Quantity</h4>
            </div>
            <div className="w-[15%]">
              <h4 className='text-[16px] font-sans font-bold text-center'>Total</h4>
            </div>
          </div>
          {data.map((item,index)=>(
          <Flex className="justify-between py-10 items-center border-b border-[#F0F0F0]">
            <div className="flex  items-center w-[40%] pl-10 gap-x-20">
              <RxCross2 />
              <img className='h-[150px] w-[150px]' src={item.thumbnail} alt="" />
              <p className='text-[16px] font-sans font-bold'>{item.title}</p>
            </div>
            <div className="w-[15%]">
              <p className='text-[16px] font-sans font-bold text-center'>${item.price}</p>
            </div>
            <div className="w-[30%]">
              <div className="w-[136px] h-[36px]  flex leading-[36px]  px-[25px] gap-x-6 mx-auto">
                <p onClick={()=>handledecrement(index)} className='font-bold text-[25px]'>-</p>
                <p className='font-bold'>{item.qty}</p>
                <p onClick={()=>handleincrement(index)} className='font-bold text-[25px]'>+</p>
              </div>
            </div>
            <div className="w-[15%]">
              <p className='text-[16px] font-sans font-bold text-center'>${item.price}</p>
            </div>
          </Flex>
          ))}
          <div className="flex justify-between px-10 pt-5">
            <div className="flex py-4 items-center">
              <p className='font-sans text-[16px] font-bold pr-[80px]'>SIZE :</p>
              <select className='w-[136px] h-[36px] border-2 px-3' name="" id="">
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
              </select>
            </div>
            <div className="">
              <p className='text-[16px] font-sans font-normal'>Update cart</p>
            </div>
          </div>
        </div>
        <p className='text-end text-[16px] font-sans font-bold py-4'>Cart totals</p>
      </Container>
    </div>
  )
}

export default Cart
