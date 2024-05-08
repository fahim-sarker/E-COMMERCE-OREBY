 import React from 'react'
 import Container from './Container'
 import { GiRoyalLove } from "react-icons/gi";
 import { TfiReload } from "react-icons/tfi";
 import { FaShoppingCart } from "react-icons/fa";

const Arrivals = () => {
  return (
    <section>
      <Container>
        <div className="lg:pb-[48px] px-[20px] lg:px-0">
          <h2 className='font-sans lg:text-[39px] text-[25px] font-bold capitalize'>New Arrivals</h2>
        </div>
        <div className="lg:flex justify-between pb-[24px]">
          <div className="group lg:w-[23%] bg-arr h-[370px] pl-[20px] pt-[20px] mb-5 bg-no-repeat bg-center bg-cover relative">
           <p className='w-[92px] h-[35px] bg-black text-center text-white leading-[35px] font-sans font-bold text-[14px]'>10%</p>
           <div className="opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:z-50 duration-700 ease-in-out bg-[#fff] absolute bottom-[-100px] right-0 z-[-1] w-full pr-[30px]">
            <div className="flex items-center gap-x-3 justify-end py-3">
            <p className='font-sans font-normal text-[16px] text-[#767676]'>Add to Wish List</p>
            <GiRoyalLove/>
            </div>
            <div className="flex items-center gap-x-3 justify-end py-3">
            <p className='font-sans font-normal text-[16px] text-[#767676]'>Compare</p>
            <TfiReload/>
            </div>
           <div className="flex items-center gap-x-3 justify-end py-3">
           <p className='font-sans font-bold text-[18px] text-[#262626]'>Add to Cart</p>
           <FaShoppingCart/>
           </div>
          </div>
          </div>
          <div className="group lg:w-[23%] bg-arr1 h-[370px] pl-[20px] pt-[20px] mb-5 bg-no-repeat bg-center bg-cover relative">
            <p className='w-[92px] h-[35px] bg-black text-center text-white leading-[35px] font-sans font-bold text-[14px]'>New</p>
            <div className="opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:z-50 duration-700 ease-in-out bg-[#fff] absolute bottom-[-100px] right-0 z-[-1] w-full pr-[30px]">
            <div className="flex items-center gap-x-3 justify-end py-3">
            <p className='font-sans font-normal text-[16px] text-[#767676]'>Add to Wish List</p>
            <GiRoyalLove/>
            </div>
            <div className="flex items-center gap-x-3 justify-end py-3">
            <p className='font-sans font-normal text-[16px] text-[#767676]'>Compare</p>
            <TfiReload/>
            </div>
           <div className="flex items-center gap-x-3 justify-end py-3">
           <p className='font-sans font-bold text-[18px] text-[#262626]'>Add to Cart</p>
           <FaShoppingCart/>
           </div>
          </div>
          </div>
          <div className="group lg:w-[23%] bg-arr2 h-[370px] pl-[20px] pt-[20px] mb-5 bg-no-repeat bg-center bg-cover relative">
          <p className='w-[92px] h-[35px] bg-black text-center text-white leading-[35px] font-sans font-bold text-[14px]'>New</p>
          <div className="opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:z-50 duration-700 ease-in-out bg-[#fff] absolute bottom-[-100px] right-0 z-[-1] w-full pr-[30px]">
            <div className="flex items-center gap-x-3 justify-end py-3">
            <p className='font-sans font-normal text-[16px] text-[#767676]'>Add to Wish List</p>
            <GiRoyalLove/>
            </div>
            <div className="flex items-center gap-x-3 justify-end py-3">
            <p className='font-sans font-normal text-[16px] text-[#767676]'>Compare</p>
            <TfiReload/>
            </div>
           <div className="flex items-center gap-x-3 justify-end py-3">
           <p className='font-sans font-bold text-[18px] text-[#262626]'>Add to Cart</p>
           <FaShoppingCart/>
           </div>
          </div>
          </div>
          <div className="group lg:w-[23%] bg-arr3 h-[370px] pl-[20px] pt-[20px] mb-5 bg-no-repeat bg-center bg-cover relative">
          <p className='w-[92px] h-[35px] bg-black text-center text-white leading-[35px] font-sans font-bold text-[14px]'>New</p>
          <div className="opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:z-50 duration-700 ease-in-out bg-[#fff] absolute bottom-[-100px] right-0 z-[-1] w-full pr-[30px]">
            <div className="flex items-center gap-x-3 justify-end py-3">
            <p className='font-sans font-normal text-[16px] text-[#767676]'>Add to Wish List</p>
            <GiRoyalLove/>
            </div>
            <div className="flex items-center gap-x-3 justify-end py-3">
            <p className='font-sans font-normal text-[16px] text-[#767676]'>Compare</p>
            <TfiReload/>
            </div>
           <div className="flex items-center gap-x-3 justify-end py-3">
           <p className='font-sans font-bold text-[18px] text-[#262626]'>Add to Cart</p>
           <FaShoppingCart/>
           </div>
          </div>
          </div>
        </div>
        <div className="lg:flex justify-between px-[20px] lg:px-0">
            <div className="flex gap-[113px] lg:w-[23%] pb-[15px]">
              <div className="">
                <p className='font-sans font-bold text-[18px] text-[#262626]'>Basic Crew Neck Tee</p>
              </div>
              <div className="">
                <p className='font-sans font-normal text-[16px] text-[#767676]'>$44.00</p>
              </div>
            </div>
            <div className="flex gap-[113px] lg:w-[23%] pb-[15px]">
            <div className="">
                <p className='font-sans font-bold text-[18px] text-[#262626]'>Basic Crew Neck Tee</p>
              </div>
              <div className="">
                <p className='font-sans font-normal text-[16px] text-[#767676]'>$44.00</p>
              </div>
            </div>
            <div className="flex lg:w-[23%] gap-[113px] pb-[15px]">
            <div className="">
                <p className='font-sans font-bold text-[18px] text-[#262626]'>Basic Crew Neck Tee</p>
              </div>
              <div className="">
                <p className='font-sans font-normal text-[16px] text-[#767676]'>$44.00</p>
              </div>
            </div>
            <div className="flex lg:w-[23%] gap-[113px] pb-[15px]">
            <div className="">
                <p className='font-sans font-bold capitalize text-[18px] text-[#262626]'>Basic Crew Neck Tee</p>
              </div>
              <div className="">
                <p className='font-sans font-normal text-[16px] text-[#767676]'>$44.00</p>
              </div>
            </div>
        </div>
        <div className="flex justify-between px-[20px] lg:px-0">
          <div className="w-[23%]">
            <p className='font-sans font-normal text-[16px] text-[#767676] capitalize'>black</p>
          </div>
          <div className="w-[23%]">
          <p className='font-sans font-normal text-[16px] text-[#767676] capitalize'>black</p>
          </div>
          <div className="w-[23%]">
          <p className='font-sans font-normal text-[16px] text-[#767676] capitalize'>black</p>
          </div>
          <div className="w-[23%]">
          <p className='font-sans font-normal text-[16px] text-[#767676] capitalize'>black</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Arrivals
