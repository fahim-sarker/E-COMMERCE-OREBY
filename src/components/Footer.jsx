import Container from './Container'
import React from 'react'
import Flex from './Flex'
import Ft from "../assets/logo.png"
import { FaFacebookF,FaLinkedinIn,FaInstagram  } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-[#F5F5F3] py-[55px]'>
      <Container>
        <Flex>
            <div className="lg:w-[15%]">
                <h2 className='font-sans text-[16px] font-bold text-[#262626] pb-4'>MENU</h2>
                <ul className='text-[16px] font-sans font-normal text-[#6D6D6D]'>
                    <li className='pb-[6px]'>Home</li>
                    <li className='pb-[6px]'>Shop</li>
                    <li className='pb-[6px]'>About</li>
                    <li className='pb-[6px]'>Contact</li>
                    <li className='pb-[6px]'>Journal</li>
                </ul>
            </div>
            <div className="lg:w-[15%]">
                <h2 className='font-sans text-[16px] font-bold text-[#262626] pb-4'>SHOP</h2>
                <ul className='text-[16px] font-sans font-normal text-[#6D6D6D]'>
                    <li className='pb-[6px]'>Category 1</li>
                    <li className='pb-[6px]'>Category 2</li>
                    <li className='pb-[6px]'>Category 3</li>
                    <li className='pb-[6px]'>Category 4</li>
                    <li className='pb-[6px]'>Category 5</li>
                </ul>
            </div>
            <div className="lg:w-[20%]">
                <h2 className='font-sans text-[16px] font-bold text-[#262626] pb-4'>HELP</h2>
                <ul className='text-[16px] font-sans font-normal text-[#6D6D6D]'>
                    <li className='pb-[6px]'>Privacy Policy</li>
                    <li className='pb-[6px]'>Terms & Conditions</li>
                    <li className='pb-[6px]'>Special E-shop</li>
                    <li className='pb-[6px]'>Shipping</li>
                    <li className='pb-[6px]'>Secure Payments</li>
                </ul>
            </div>
            <div className="lg:w-[35%]">
                <ul className='text-[16px] font-sans font-bold text-[#6D6D6D]'>
                    <li className='pb-[6px]'>(052) 611-5711</li>
                    <li className='pb-[6px]' >company@domain.com</li>
                    <li className='pb-[6px]'>575 Crescent Ave. Quakertown, PA 18951</li>
                </ul>
            </div>
            <div className="lg:w-[15%]">
               <img src={Ft} alt="footer" />
            </div>
        </Flex>
        <Flex className="justify-between pt-[65px]">
            <div className="flex gap-x-3">
                <FaFacebookF/>
                <FaLinkedinIn />
                <FaInstagram />
            </div>
            <div className="">
                <p  className='text-[16px] font-sans font-normal text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Footer
