import React from "react";
import { NavLink } from "react-router-dom";
function ShowItemCard() {
  return (
    <NavLink
    className={`flex items-center justify-center `}
    >
    <div className=" bg-addbg2 p-4 w-[300px] rounded-xl lg:w-[500px]">
      <div className=" text-right">
        <NavLink 
        to={"/"}
        className="text-lg font-semibold">X</NavLink>
      </div>

      <div className=" flex items-center flex-col ">
        <img src="https://i.postimg.cc/X76WN36G/tameto.png" className="my-3" alt="" />

        <h3 className="text-xl font-semibold">ItemName</h3>
        <p className=" text-lg font-semibold my-3">Price</p>

        <div className=" flex justify-evenly gap-4">
          <button className=" bg-fff p-1.5 px-4 rounded-sm font-semibold">Add</button>
          <button className=" bg-greenColor text-fff font-semibold p-1.5 px-4 rounded-sm">Buy</button>
          
        </div>
      </div>
    </div>
    </NavLink>
  );
}

export default ShowItemCard;
