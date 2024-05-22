import axios, { Axios } from 'axios';
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import Flex from '../components/Flex';
import { FaStar,FaRegStarHalfStroke,FaRegStar } from "react-icons/fa6";



const Productdetaills = () => {
  let [singleData, setsingleData] = useState([])
  let productid = useParams()
  let getdata = () => {
    axios.get(`https://dummyjson.com/products/${productid.id}`).then((response) => {
      setsingleData(response.data);

    })
  }
  console.log(singleData);

  useEffect(() => {
    getdata()
  }, [])

  let clientratings = Array.from({length:5},(elm, index)=>{
    let ratingnumber = index + 0.5
    return(
      singleData.rating >= index + 1 ? <FaStar  className='text-[#FFD881]'/> : singleData.rating >
      ratingnumber ? <FaRegStarHalfStroke className='text-[#FFD881]'/> :<FaRegStar className='text-[#FFD881]'/>
    )
  })





  return (
    <section className='py-5'>
      <Container>
        <Flex className="flex-wrap justify-between">
          {singleData?.images?.map((item)=>(
          <div className="lg:w-[32%] pb-[40px]">
            <img className='w-[100%] h-[400px]' src={item} alt="" />
          </div>
          ))}
        </Flex>
        <div className="">
          <h2 className='font-sans text-[#262626] text-[39px] font-bold pb-4'>Product</h2>
          <div className="flex items-center pb-3">
            {clientratings}
            <p className='font-sans text-[16px] font-normal pl-7'>1 Review</p>
          </div>
          <p className='font-sans text-[26px] font-bold pb-3 border-b border-[#D8D8D8]'> ${singleData.price}</p>
          <div className="flex items-center py-4">
            <div className="">
              <p className='font-sans text-[16px] font-bold'>COLOR :</p>
            </div>
            <div className="flex px-[60px] gap-x-4">
              <div className="w-[20px] h-[20px] bg-[#979797] rounded-full"></div>
              <div className="w-[20px] h-[20px] bg-[#FF8686] rounded-full"></div>
              <div className="w-[20px] h-[20px] bg-[#7ED321] rounded-full"></div>
              <div className="w-[20px] h-[20px] bg-[#B6B6B6] rounded-full"></div>
              <div className="w-[20px] h-[20px] bg-[#15CBA5] rounded-full"></div>
            </div>
          </div>
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
          <div className="flex py-6 items-center border-b border-[#D8D8D8]">
          <p className='font-sans text-[16px] font-bold pr-[35px]'>QUANTITY :</p>
          <div className="w-[136px] h-[36px] border-2 border-[#979797] flex leading-[36px]  px-[25px] gap-x-6">
            <p className='font-bold'>-</p>
            <p className='font-bold'>+</p>
            <p className='font-bold'>1</p>
          </div>
          </div>
          <div className="flex py-6 items-center border-b border-[#D8D8D8]">
          <p className='font-sans text-[18px] capitalize font-bold pr-[50px]'> stock :</p>
          <p className='font-sans text-[16px] font-normal'>{singleData.stock}</p>
          </div>
          <div className="flex py-6 items-center border-b border-[#D8D8D8] lg:gap-x-10 gap-x-4 lg:px-0 px-1">
          <p className='font-sans lg:text-[16px] font-medium  lg:px-[46px] px-[25px] lg:py-[16px] py-[10px] border-2 border-[#262626] text-center hover:bg-[#262626] hover:text-white duration-300 ease-in-out'>Add to Wish List</p>
          <p className='font-sans lg:text-[16px] font-medium lg:px-[46px] px-[25px] lg:py-[16px] py-[10px] border-2 border-[#262626] text-center hover:bg-[#262626] hover:text-white duration-300 ease-in-out'>Add to Cart</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Productdetaills
