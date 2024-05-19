import axios, { Axios } from 'axios';
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Productdetaills = () => {
    let [singleData, setsingleData] = useState([])
    let productid = useParams()
    console.log(productid);
    let getdata = ()=>{
        axios.get(`https://dummyjson.com/products/${productid}`).then((response)=>{
            setsingleData(response.data);
        })
    }

    useEffect(()=>{
        getdata()
    },[])

console.log(singleData);


  return (
    <div>
      <h2>0000</h2>
    </div>
  )
}

export default Productdetaills
