import React from 'react'
import CategoriesCard from './CategoriesCard'
import { FaChevronRight } from "react-icons/fa6";


function Categories_Cantener() {

  
  return (
   
   
    <div className="lg:max-w-[1322px] flex lg:items-center flex-col">

  <div className="lg:max-w-[1322px] lg:w-[100vw] flex justify-between p-1 lg:p-5 ">
      <span className='text-2xl lg:text-3xl  font-semibold text-blackColor'>Explore Categories</span>
      <button className='transition ease-in-out duration-400 text-fff text-base bg-greenColor py-1 px-3 lg:px-5 font-semibold rounded-lg hover:bg-greyColor'>More</button>
  </div>
  
    <div className='flex overflow-x-auto items-center gap-5 w-[330px] h-[225px] sm:w-[700px] lg:w-[860px] xl:w-[1200px] my-5 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden'>
     <CategoriesCard/>
     <CategoriesCard/>
     <CategoriesCard/>
     <CategoriesCard/>
     <CategoriesCard/>
     <CategoriesCard/>
     <CategoriesCard/>
     <button className=' bg-backColor text-lg text-blackColor py-3 px-2 font-bold rounded-lg block lg:hidden '><FaChevronRight /></button>
    </div>
    
    </div>
   
  
  )
}

export default Categories_Cantener
