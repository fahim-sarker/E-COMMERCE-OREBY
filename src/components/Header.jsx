import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Lg from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const Header = () => {
    let [show, setShow] = useState(false)


    return (
        <>
            <header className='lg:px-0 px-[20px]'>
            <Container>
                <div className="flex py-[32px] bg-[#ffff]">
                    <div className="w-1/4">
                        <img src={Lg} alt="logo" />
                    </div>

                    <div className="w-3/4 z-50">
                        <ul className={`lg:flex gap-x-[40px] lg:justify-center pt-[30px] lg:pt-[0] lg:static text-center font-sans] text-[20px] absolute  duration-700 ease-out ${show == true ?"bg-[aliceblue] w-[60%]  top-[50px] left-[0px] h-full" : "bg-[] top-[50px] left-[-100px]"}`}>
                            <li className='py-[5px] lg:py-[0px] font-normal hover:font-bold hover:text-[#262626] text-[#767676] duration-300 ease-in-out'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='py-[5px] lg:py-[0px] font-normal hover:font-bold  hover:text-[#262626] text-[#767676] duration-300 ease-in-out'>
                                <Link to="/product">shop</Link>
                            </li>
                            <li className='py-[5px] lg:py-[0px] font-normal hover:font-bold hover:text-[#262626] text-[#767676] duration-300 ease-in-out'>About</li>
                            <li className='py-[5px] lg:py-[0px] font-normal hover:font-bold hover:text-[#262626] text-[#767676] duration-300 ease-in-out'>Contacts</li>
                            <li className='py-[5px] lg:py-[0px] font-normal hover:font-bold  hover:text-[#262626] text-[#767676] duration-300 ease-in-out'>Journal</li>
                        </ul>
                    </div>
                    <div className="lg:hidden" onClick={()=> setShow (!show)}>
                        {show == true ?< ImCross /> :<FaBars/>}
                    </div>
                </div>
            </Container>
            </header>
        </>

    )
}

export default Header



