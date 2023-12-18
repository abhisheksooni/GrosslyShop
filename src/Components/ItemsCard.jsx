import React, { useState } from 'react'
import pi from './Imgs/image 7.png'
import { TbShoppingCart } from "react-icons/tb";





function ItemsCard({ItemName="Added", Price=35, img=pi}) {

  // starts code copy in 
    
  return (
    
    <>
    <div className="min-w-[153px]  bg-itemBack rounded-xl snap-normal snap-center hover:bg-itemHover transition ease-in-out duration-400 hover:scale-105">
    <div className=' flex flex-col items-center '>
        <img src={img} alt="Items" />
   
    </div>
        <div className=" p-3">
          <div className="  ">
          {/* <p className=' text-greyColor text-right  text-sm'>Veg.</p> */}
        <p className=' font-bold text-blackColor text-center '>{ItemName} 500g.</p>
          </div>
        {/* Prices */}
        <div className="flex justify-between items-center my-2">
        <p className='text-greenColor tex font-semibold'>Rs. {Price}</p>
        <button className='flex items-center font-semibold text-greenColor bg-lightGreen p-1 px-2 rounded-md gap-1'> <TbShoppingCart/>  Add</button>
        </div>
        </div>
        </div>
    </>
  )
}

export default ItemsCard
