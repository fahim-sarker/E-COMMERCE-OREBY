import React from 'react'
import Container from './Container'
import Ad from "../assets/Ad_1.png"
import Ad1 from "../assets/Ad_2.png"
import Ad2 from "../assets/Ad_3.png"

const Ads = () => {
  return (
    <section className="lg:py-[150px] py-[0]">
      <Container>
        <div className="flex justify-between">
            <div className="w-[48%]">
                <img src={Ad} alt="" />
            </div>
            <div className="w-[48%]">
                <img className='md:mb-[17px] lg:mb-[40px] mb-[10px] ' src={Ad1} alt="" />
                <img src={Ad2} alt="" />
            </div>
        </div>
      </Container>
    </section>
  )
}

export default Ads
