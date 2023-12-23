import React, { useState } from 'react'
import pi from './Imgs/image 7.png'
import { TbShoppingCart } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

import { add } from '../Reduxfolder/Cartslice';
import {useDispatch} from 'react-redux'


function ItemsCard({ItemName, Price, Itemimg,prodect}) {
    
let a = "https://drive.google.com/file/d/1DaOVnDhB6Ju2B1006Iy0205pLGL0-_P5/view?usp=drive_link"
const [prodects,setprodect] = useState({})
const dispatch = useDispatch();

const handleadd = () =>{
dispatch(add(prodect))
}

  return (
    
    <>
    <NavLink
    to={"ShowItemCard"}
    >

    
    <div className="min-w-[153px]  bg-itemBack rounded-xl snap-normal snap-center hover:bg-itemHover transition ease-in-out duration-400 hover:scale-105">
    <div className=' flex flex-col items-center '>
        <img src={Itemimg} alt="Items" />
   
    </div>
        <div className=" p-3">
          <div className="  ">
          {/* <p className=' text-greyColor text-right  text-sm'>Veg.</p> */}
        <p className=' font-bold text-blackColor text-center '>{ItemName} 500g.</p>
          </div>
        {/* Prices */}
        <div className="flex justify-between items-center my-2">
        <p className='text-greenColor tex font-semibold'>Rs. {Price}</p>
        <button
        onClick={()=>handleadd}
        className='flex items-center font-semibold text-greenColor bg-lightGreen p-1 px-2 rounded-md gap-1 hover:bg-greenColor hover:text-fff'> <TbShoppingCart/>  Add</button>
        </div>
        </div>
        </div>
        </NavLink>
    </>
  )
}

export default ItemsCard
