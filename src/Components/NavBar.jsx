import React from "react";
import Logoimg from "./Imgs/Filled_outline.png";
import sicon from "./Imgs/li_search.png";
import { LiaHeart } from "react-icons/lia";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";

function NavBar() {


    let like = 5;
    let cart = 0;
 let cartPrise = 3578
  return (
    <nav className=" flex items-center justify-between w-[95vw] p-5 2xl:max-w-screen-2xl">
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

      {/* My Cart */}
      <button className=" transition ease-in-out duration-400 flex items-center gap-2 hover:text-greyColor ">
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
    </nav>
  );
}

export default NavBar;
