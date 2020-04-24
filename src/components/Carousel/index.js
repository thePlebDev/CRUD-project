import React, {useState,useEffect} from 'react'

import {next,back} from './iterationFunctions'

import './carousel.css'




const Carousel = (props)=>{
  const  profiles = props.profile[0]
  const [carousel, setCarousel] = useState(profiles)
  console.log(carousel)

return(
  <div className = "main-container">
    <div className="info-container">
      <div>
        { carousel.name }
      </div>
      <div>
        { carousel.age }
      </div>
      <div>
        { carousel.height }
      </div>
    </div>
    <button onClick={()=> {back(carousel.id,props.profile,setCarousel)}} >Back</button>
    <button onClick={()=> {next(carousel.id,props.profile,setCarousel)}} >Next</button>
  </div>
)
}


export default Carousel
