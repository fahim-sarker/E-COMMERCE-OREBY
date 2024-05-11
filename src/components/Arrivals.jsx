import React, { useContext } from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivalsitem from './Arrivalsitem';
import { apidata } from './ContextApi';

const Arrivals = () => {
  let data = useContext(apidata)
  return (
    <>
        <Container>
            <h2 className='font-sans text-[#262626] text-[39px] pb-[48px] font-bold'>New Arrivals</h2>
            <Flex className="justify-between flex-wrap">
              {data.map((item)=>(
                <Arrivalsitem item={item}/>
              ))}
            </Flex>
        </Container>
    </>        
  )
}

export default Arrivals
