import React, { useContext, useEffect, useRef, useState } from 'react';
import Container from './Container';
import { FaBars, FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import Cart from '../assets/cart.png';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { apidata } from './ContextApi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let data = useSelector((state) => state.Product.cartitem);
  let [catshow, setCatShow] = useState(false);
  let [usershow, setUserShow] = useState(false);
  let [usercartshow, setUserCartShow] = useState(false);
  let information = useContext(apidata);
  let [searchinput, setSearchInput] = useState('');
  let [searchfilter, setSearchFilter] = useState([]);
  let [selectedItemIndex, setSelectedItemIndex] = useState(-1); // Track selected item index
  let navigate = useNavigate();

  let catref = useRef();
  let userref = useRef();
  let usercartref = useRef();

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (catref.current.contains(e.target)) {
        setCatShow(!catshow);
      } else {
        setCatShow(false);
      }
      if (userref.current.contains(e.target)) {
        setUserShow(!usershow);
      } else {
        setUserShow(false);
      }
      if (usercartref.current.contains(e.target)) {
        setUserCartShow(!usercartshow);
      } else {
        setUserCartShow(false);
      }
    });
  }, [catshow, usershow, usercartshow]);

  let handleInput = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === '') {
      setSearchFilter([]);
    } else {
      let info = information.filter((item) =>
        item.title.toLowerCase().includes(e.target.value)
      );
      setSearchFilter(info);
    }
    setSelectedItemIndex(-1); // Reset selected item index on input change
  };

  let handleSingleSearch = (id) => {
    navigate(`/product/${id}`);
    setSearchFilter([]);
    setSearchInput('');
  };

  let handleKeyDown = (e) => {
    if (searchfilter.length === 0) return;

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedItemIndex((prevIndex) =>
        prevIndex <= 0 ? searchfilter.length - 1 : prevIndex - 1
      );
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedItemIndex((prevIndex) =>
        prevIndex === searchfilter.length - 1 ? 0 : prevIndex + 1
      );
    } else if (e.key === 'Enter' && selectedItemIndex !== -1) {
      handleSingleSearch(searchfilter[selectedItemIndex].id);
    }
  };

  return (
    <>
      <nav className="bg-[#F5F5F3] py-5 lg:px-0 px-5">
        <Container>
          <div className="flex justify-between items-center">
            <div className="w-1/5">
              <div ref={catref} className="flex items-center gap-x-3">
                <div className="">
                  <FaBars />
                </div>
                <div className="">
                  <p className="text-[14px] font-sans font-normal hidden lg:block hover:text-[#262626] text-[#262626] transition ease-in-out delay-400">
                    Shop by Category
                  </p>
                </div>
                {catshow && (
                  <div className=" z-50 absolute top-[180px] bg-[#262626] w-[250px] pl-[10px]  py-[20px]">
                    <ul className="text-[14px] font-sans font-normal text-white capitalize ">
                      <li className="py-[10px] duration-300 ease-in-out hover:pl-5 border-b border-[#D8D8D8]">
                        accecories
                      </li>
                      <li className="py-[10px] duration-300 ease-in-out hover:pl-5 border-b border-[#D8D8D8]">
                        furniture
                      </li>
                      <li className="py-[10px] duration-300 ease-in-out hover:pl-5 border-b border-[#D8D8D8]">
                        electronics
                      </li>
                      <li className="py-[10px] duration-300 ease-in-out hover:pl-5 border-b border-[#D8D8D8]">
                        cloths
                      </li>
                      <li className="py-[10px] duration-300 ease-in-out hover:pl-5 border-b border-[#D8D8D8]">
                        bags
                      </li>
                      <li className="py-[10px] duration-300 ease-in-out hover:pl-5 border-b border-[#D8D8D8]">
                        home appliances
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="3/5 relative mr-5">
              <div className="">
                <input
                  value={searchinput}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  placeholder="Search Products"
                  className="pl-[20px] py-[16px] h-[50px] lg:w-[601px] outline-none "
                />
              </div>
              <div className="absolute top-[50%] translate-y-[-50%] right-[20px]">
                <FaSearch />
              </div>
              {searchfilter.length > 0 && (
                <div className="w-[600px] h-[400px] overflow-y-scroll z-50 absolute top-[80px] left-0 pb-3 ">
                  {searchfilter.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => handleSingleSearch(item.id)}
                      className={`flex bg-[#F0F0F0] justify-around items-center py-[10px] ${
                        index === selectedItemIndex ? 'bg-[aliceblue]' : ''
                      }`}
                    >
                      <div className="w-[30%]">
                        <img
                          className="h-[120px] w-[150px]"
                          src={item.thumbnail}
                          alt=""
                        />
                      </div>
                      <div className="w-[60%]">
                        <h2 className="font-sans text-[16px] capitalize font-bold pb-[10px]">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-1/5 items-center relative">
              <div className="flex justify-end gap-x-4">
                <div ref={userref} className="flex">
                  <FaUser />
                  <IoMdArrowDropdown />
                </div>
                {usershow && (
                  <div className=" bg-[#000] w-[200px] py-5 px-5 absolute top-[30px] z-50 lg:left-0 left-[-150px]">
                    <ul className="text-white font-sans text-[16px] capitalize">
                      <li className="pb-[10px] hover:pl-[10px] duration-300 ease-in-out">
                        login
                      </li>
                      <li className="pb-[10px] hover:pl-[10px] duration-300 ease-in-out">
                        sign up
                      </li>
                      <li className="pb-[10px] hover:pl-[10px] duration-300 ease-in-out">
                        my accopunt
                      </li>
                    </ul>
                  </div>
                )}
                <div ref={usercartref} className="">
                  <div className="realative">
                    <FaShoppingCart />
                    {data.length > 0 && (
                      <div className="h-[20px] w-[20px] leading-[20px] bg-[#262626] text-white rounded-full absolute top-[-18px] right-[-12px] text-center">
                        {data.length}
                      </div>
                    )}
                  </div>
                </div>
                {usercartshow && (
                  <div className="w-[300px] z-50 absolute top-[20px] right-0 bg-[#fff] pb-3">
                    <div className="flex bg-[beige] justify-around items-center py-[10px]">
                      <div className="">
                        <img src={Cart} alt="" />
                      </div>
                      <div className="">
                        <h2 className="font-sans text-[16px] capitalize font-bold pb-[10px]">
                          black smart watch
                        </h2>
                        <h4 className="font-sans text-[16px] capitalize font-bold">
                          $44.00
                        </h4>
                      </div>
                      <div className="">
                        <RxCross2 />
                      </div>
                    </div>

                    <div className="py-[10px] px-3">
                      <h3 className="font-sans text-[16px] capitalize">
                        subtotal:<span className="font-sans text-[16px] capitalize font-bold">
                          {' '}
                          $44.00
                        </span>
                      </h3>
                    </div>
                    <div className="flex justify-between px-3">
                      <div className="">
                        <a
                          className="w-[130px] h-[50px] inline-block leading-[50px] text-center border-2 border-[#262626] font-sans text-[16px] capitalize font-bold hover:bg-[#262626] duration-500 ease-in-out hover:text-white rounded-l"
                          href="#"
                        >
                          view cart
                        </a>
                      </div>
                      <div className="">
                        <a
                          className="w-[130px] h-[50px] inline-block leading-[50px] text-center border-2 border-[#262626] font-sans text-[16px] capitalize font-bold bg-[#000] text-white hover:bg-[#fff] duration-500 ease-in-out hover:text-black rounded-l"
                          href="#"
                        >
                          checkout
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;

