import React from 'react'
import OfferCard from './OfferCard'
import addimg from '../Components/Imgs/Offer1-img.png'
import addimg2 from '../Components/Imgs/Offer2-img.png'


function OfferCantener() {
  return (
    <div className=' flex items-center gap-8 xl:gap-[5rem] flex-col md:flex-row md:justify-evenly lg:justify-around lg:max-w-[1322px] '>
    <OfferCard Img={addimg}/>
    <OfferCard Img={addimg2} Bg={"addbg2"}/>
    </div>
    
  )
}


export default OfferCantener
