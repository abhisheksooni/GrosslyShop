import React from 'react'
import heroimg from './Imgs/Hreo-img.png'
import { BsSend } from "react-icons/bs";

function Home() {
  return (

<div className=' bg-backColor lg:m-2'>
    {/* text */}
    <div className="lg:max-w-[1567px] md:min-h-[335px] lg:h-auto  lg:justify-between flex flex-col lg:flex-row py-5 lg:p-0   rounded-md bg-main bg-opacity-25  bg-cover">
    <div className=" text-center flex flex-col lg:ml-10 lg:my-auto lg:text-left">
<h2 className='text-6xl font-bold lg:w-[40rem] mb-7'>Don’t miss our daily amazing deals.</h2>
<p className='font-medium text-greyColor mb-12'>Save up to 60% off on your first order</p>

       <div className="w-80 h-12 flex justify-center lg:justify-start mb-7 mx-auto lg:m-0">
   <div className=" h-12  bg-fff rounded-sm justify-start items-center rounded-l-lg flex">
     <div className="justify-center items-center gap-2 flex">
     <BsSend className=' ml-2 text-greyColor '/>
       <input typeof='text'
        className="text-greyColor  font-medium w-[13rem] text-l mr-3 focus:outline-none"
       placeholder='Enter your email address...'
       />
     </div>
   </div>
     <button className="transition ease-in-out duration-400 text-fff text-base bg-greenColor p-3 font-semibold rounded-r-lg hover:bg-greyColor">Subscribe</button>
 </div>
    </div>
 
    {/* imgs */}
    <div className=" flex justify-end">
        <img 
        className=''
        src={heroimg} alt="" 
        />
    </div>
    </div>
</div>
  )
}

export default Home
