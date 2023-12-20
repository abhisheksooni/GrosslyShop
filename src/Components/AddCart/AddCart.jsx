import React, { useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";


function AddCart({add}) {

    console.log(add);

  return (
    <div className={` ${add} flex items-center flex-col  w-80 px-4 p-4 border rounded-xl backdrop-blur-sm`}>
      <div className=" flex  justify-between w-full px-2 text-blackColor font-bold">
        <span>Shopping Cart</span>
        <button className='text-blackColor font-extrabold text-2xl hover:text-greyColor'><RxCross2 /></button>
      </div>

      <div className=" flex items-center justify-between w-full m-2 bg-addbg2 rounded-md px-3 py-2">
        <div className=" flex gap-5 items-center">
        <div className=" "><img src="" alt=""  className='w-11 h-12 rounded-full'/></div>
            <div className=" ">
            <p className='text-blackColor font-semibold text-lg'>Name</p>
            <p className=' text-greyColor font-medium text-[13px]'>Rs. 357</p>
            </div>
        </div>
            <div className=" flex items-center flex-col pr-1  gap-2">
                <button className=' bg-greenColor text-fff p-1.5 rounded-full'><RiDeleteBin6Line /></button>
                <div className=" flex gap-4  items-center ">
                    <button className='text-xl hover:text-greenColor px-1'>-</button>
                    <span> 1 </span>
                    <button className='text-xl hover:text-greenColor px-1'>+</button>
                </div>
            </div>
      </div>

{/* bottom btn */}
      <div className=" flex items-end px-2 gap-3 mt-5 justify-between  w-full ">
        <div className="px-2">
        <p className=' text-greyColor text-sm font-semibold mb-1'>Total</p>
        <p className=' text-greenColor text-xl font-bold'>Rs. 846</p>
        </div>
        <button className='transition ease-in-out duration-400 text-fff text-base bg-greenColor py-2 px-3 font-semibold rounded-lg hover:bg-greyColor flex items-center gap-2'> Checkout <FaArrowRight /></button>
      </div>
    </div>
  )
}

export default AddCart
