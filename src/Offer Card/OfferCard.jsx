import React from 'react'

import { FaArrowRight } from "react-icons/fa6";
import '../App.css'

function OfferCard({Img , P1, P2, Btn,Bg="addbg"}) {
  return (
    <div className="bg-img rounded-md ">
      <div className={`bg-opacity-60 bg-${Bg} flex flex-row items-end lg:gap-12`}>
        {/* text */}
        <div className="p-4 pr-0">
            <span className='text-fff bg-addbtnbg py-1  rounded-sm px-4'>Free Delivery</span>
            <p className=' font-semibold text-blackColor text-xl my-4'>Free delivery over Rs.910</p>
            <p className=' text-greyColor font-medium my-4 w-[15rem]'>Shop $50 product and get free delivery anywhre.</p>
            <button className='transition ease-in-out duration-400 text-fff text-base bg-greenColor py-3 px-5 font-semibold rounded-lg hover:bg-greyColor flex items-center gap-2'><p>Shop Now</p> <FaArrowRight /></button>
            {/* <button>Shop Now <FaArrowRight /></button> */}
        </div>
        {/* img */}
        <div className="">
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default OfferCard
