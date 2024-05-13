import React from 'react'
import Container from './Container'
import Ad from "../assets/ad2.png"

const Ads2 = () => {
  return (
    <>
      <Container>
        <div className="lg:py-[130px] py-[20px]">
            <img src={Ad}alt="ads" />
        </div>
      </Container>
    </>
  )
}

export default Ads2
