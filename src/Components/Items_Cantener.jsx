import React from 'react'
import ItemsCard from './ItemsCard'
import { FaChevronRight } from "react-icons/fa6";


function Items_Cantener() {
  return (
    <div className="lg:max-w-[1322px] flex flex-col">

  <div className="lg:max-w-[1322px] lg:w-[100vw] flex justify-between p-1 lg:p-5 ">
      <span className='text-2xl lg:text-3xl  font-semibold text-blackColor'>Featured Products</span>
      <button className='transition ease-in-out duration-400 text-fff text-base bg-greenColor py-2 px-6 font-semibold rounded-lg hover:bg-greyColor hidden lg:block'>More</button>
  </div>
  
    <div className='flex overflow-x-auto items-center gap-5 w-[330px] h-[225px] sm:w-[700px] lg:w-[860px] xl:w-[1200px] my-5 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden'>
      <ItemsCard/>
      <ItemsCard/>
      <ItemsCard/>
      <ItemsCard/>
      <ItemsCard/>
      <ItemsCard/>
      <button className=' bg-backColor text-lg text-blackColor py-3 px-2 font-bold rounded-lg block lg:hidden '><FaChevronRight /></button>
    </div>
    
    </div>
  )
}

export default Items_Cantener
