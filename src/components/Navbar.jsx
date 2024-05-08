import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBars, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Cart from "../assets/cart.png"
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    let [catshow, setcatShow] = useState(false)
    let [usershow, setuserShow] = useState(false)
    let [usercartshow, setusercartShow] = useState(false)

    let catref = useRef ()


    useEffect(()=>{
        document.addEventListener("click",(e)=>{
           if(catref.current.contains(e.target) == true){
            setcatShow(!catref)
           }else{
            setcatShow(false)
           }
        })
    },[])

    return (
        <>
            <nav className='bg-[#F5F5F3] py-5 lg:px-0 px-5'>
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="w-1/5">
                            <div ref={catref} className="flex items-center gap-x-3">
                                <div className="">
                                    <FaBars />
                                </div>
                                <div className="">
                                    <p className='text-[14px] font-sans font-normal hidden lg:block  hover:text-[#262626] text-[#262626] transition ease-in-out delay-400'>Shop by Category</p>
                                </div>
                                {catshow &&
                                    <div className=" z-50 absolute top-[180px] bg-[#262626] w-[250px] pl-[10px]  py-[20px]">
                                        <ul className='text-[14px] font-sans font-normal text-white capitalize '>
                                            <li className='py-[10px] duration-300 ease-in-out hover:pl-5'>accecories</li>
                                            <li className='py-[10px] duration-300 ease-in-out hover:pl-5'>furniture</li>
                                            <li className='py-[10px] duration-300 ease-in-out hover:pl-5'>electronics</li>
                                            <li className='py-[10px] duration-300 ease-in-out hover:pl-5'>cloths</li>
                                            <li className='py-[10px] duration-300 ease-in-out hover:pl-5'>bags</li>
                                            <li className='py-[10px] duration-300 ease-in-out hover:pl-5'>home appliances</li>
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="3/5 relative">
                            <div className="">
                                <input type="search" placeholder='Search Products' className='pl-[20px] py-[16px] h-[50px] lg:w-[601px] outline-none border-2 border-[#262626]' />
                            </div>
                            <div className="absolute top-[50%] translate-y-[-50%] right-[20px]">
                                <FaSearch />
                            </div>
                        </div>
                        <div className="w-1/5 items-center relative">
                            <div className="flex justify-end gap-x-4">
                                <div className="flex">
                                    <FaUser />
                                    <IoMdArrowDropdown />
                                </div>
                                {usershow &&
                                    <div className=" bg-[#000] w-[200px] py-5 px-5">
                                        <ul className='text-white font-sans text-[16px] capitalize'>
                                            <li className='pb-[10px] hover:pl-[10px] duration-300 ease-in-out'>login</li>
                                            <li className='pb-[10px] hover:pl-[10px] duration-300 ease-in-out'>sign up</li>
                                            <li className='pb-[10px] hover:pl-[10px] duration-300 ease-in-out'>my accopunt</li>
                                        </ul>
                                    </div>
                                }
                                <div className="">
                                    <FaShoppingCart />
                                </div>
                                {usercartshow &&
                                    <div className="w-[300px] z-50 absolute top-[20px] right-0 ">
                                        <div className="flex bg-[beige] justify-around items-center py-[10px]">
                                            <div className="">
                                                <img src={Cart} alt="" />
                                            </div>
                                            <div className="">
                                                <h2 className='font-sans text-[16px] capitalize font-bold pb-[10px]'>black smart watch</h2>
                                                <h4 className='font-sans text-[16px] capitalize font-bold'>$44.00</h4>
                                            </div>
                                            <div className="">
                                                <RxCross2 />
                                            </div>
                                        </div>

                                        <div className="py-[10px]">
                                            <h3 className='font-sans text-[16px] capitalize'>subtotal:<span className='font-sans text-[16px] capitalize font-bold'> $44.00</span></h3>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="">
                                                <a className='w-[148px] h-[50px] inline-block leading-[50px] text-center border-2 border-[#262626] font-sans text-[16px] capitalize font-bold' href="#">view cart</a>
                                            </div>
                                            <div className="">
                                                <a className='w-[148px] h-[50px] inline-block leading-[50px] text-center border-2 border-[#262626] font-sans text-[16px] capitalize font-bold bg-[#000] text-white' href="#">checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default Navbar
