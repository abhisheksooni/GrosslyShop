import React, { useState } from "react";
import Logoimg from "./Imgs/Filled_outline.png";
import sicon from "./Imgs/li_search.png";
import { LiaHeart } from "react-icons/lia";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import AddCart from "./AddCart/AddCart";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
// import AddCart from './Components/AddCart/AddCart'

function NavBar(props) {

    let like = 5;
    let cart = 0;
 let cartPrise = 3578

 let [a ,seta]=useState("inline")

//  let a = "inline"
 function onClick(){
  // a = "hidden"
 if(a==="inline"){
//  a = "hidden"
console.log(seta("hidden"));
 }
 else{
  // a = "inline"
  console.log(seta("inline"));
 }
  // console.log(a===?"a":"hidden");
  // console.log();

  
// console.log(a === "ok" ? "no" : "ok");
  }

  console.log(a);


  return (
    <nav className=" flex items-center justify-between w-[95vw] p-5 2xl:max-w-screen-2xl relative">
      {/* logo */}
      <div className=" flex gap-2">
        <img
          src={Logoimg}
          alt="Logo"
          style={{ writh: "49px", height: "49px" }}
        />
        <div className="">
          <p className=" text-greenColor font-extrabold text-2xl leading-none">
            Grocey.
          </p>
          <p className=" text-greyColor text-sm leading-none">WABSITE</p>
        </div>
      </div>

      {/* Search */}
      <div className=" hidden items-center gap-2 md:flex">
        <div className=" flex items-center gap-1">
        <div className=" w-[1.5px] h-6 bg-greyColor"></div>
        <input type="text" placeholder="Search for items..." className="text-greyColor font-medium pl-2 focus:outline-none" />
        </div>
        <button className="transition ease-in-out duration-400 bg-greenColor text-fff p-2 rounded-full hover:bg-greyColor">
          <img src={sicon} alt="" />
        </button>
      </div>

{/* My Cart */}
      <div className=" items-center gap-6 md:flex">
      {/* like component */}
      {/* <button className=" transition ease-in-out duration-400 flex items-center gap-2 px-2 py-1  hover:text-greyColor  ">
      <div className="w-7 h-[30px] relative">
  <div className="w-6 h-6 left-0 top-[6px] absolute" />
  <div className="w-[17px] h-[17px] left-[15px] top-0 absolute bg-emerald-400 rounded-full border-[1px] border-fff bg-greenColor" />
  <div className="left-[20px] top-[0.5px] absolute text-fff text-[11px] font-medium font-['Quicksand'] ">{like}</div>
    <div className=" text-3xl font-bold">
      <LiaHeart />
    </div>
</div>
<span className="font-medium">Wishlist</span>
      </button> */}
      

      <button
      onClick={onClick}
      className=" transition ease-in-out duration-400 flex items-center gap-2 hover:text-greyColor ">
      <div className="w-7 h-[30px] relative">
  <div className="w-6 h-6 left-0 top-[6px] absolute" />
  <div className="w-[17px] h-[17px] left-[15px] top-0 absolute bg-emerald-400 rounded-full border-[1px] border-fff bg-greenColor" />
  <div className="left-[21px] top-[0.5px] absolute text-fff text-[11px] font-medium font-['Quicksand'] ">{cart}</div>
    <div className=" text-3xl font-bold">
    <PiShoppingCartSimple /> 
    </div>
</div>
<div className=" flex flex-col">
<span className="font-medium hidden lg:flex">My Cart</span>
<span className="font-semibold text-[15px] text-greenColor leading-none">{/*Rs.{cartPrise}*/}</span>
</div>
      </button>
      </div>    
     {/* menu button */}
     {/* <button className="  text-2xl bg-greenColor p-2 rounded-full text-fff md:hidden">
      <IoMenu />
     </button> */}

    {/* <AddCart Addbtn={a}/> */}

    <div className={` ${a} flex items-center flex-col  w-80 px-4 p-4  rounded-xl bg-fff fixed lg:absolute z-10 top-[12vh] lg:top-[8vh] lg:right-0`}>
      <div className=" flex  justify-between w-full px-2 py-1.5 text-blackColor font-bold">
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
    </nav>

  );
}

export default NavBar;
