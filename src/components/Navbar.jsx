import React from 'react'
import Container from './Container'
import { FaBars,FaSearch,FaUser,FaShoppingCart   } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = () => {
    return (
        <>
            <nav className='bg-[#F5F5F3] py-5'>
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="w-1/5">
                            <div className="flex items-center gap-x-3">
                                <div className="">
                                <FaBars />
                                </div>
                                <div className="">
                                <p className='text-[14px] font-sans font-normal  hover:text-[#262626] text-[#262626] transition ease-in-out delay-400'>Shop by Category</p>
                                </div>
                            </div>
                        </div>
                        <div className="3/5 relative">
                            <div className="">
                                <input type="search" placeholder='Search Products' className='pl-[21px] py-[16px] h-[50px] w-[601px] outline-none border-2 border-[#262626]'/>
                            </div>
                            <div className="absolute top-[50%] translate-y-[-50%] right-[20px]">
                                <FaSearch />
                            </div>
                        </div>
                        <div className="w-1/5 items-center">
                            <div className="flex justify-end gap-x-4">
                            <div className="flex">
                                <FaUser />
                                <IoMdArrowDropdown/>
                            </div>
                            <div className="">
                                <FaShoppingCart />
                            </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default Navbar
