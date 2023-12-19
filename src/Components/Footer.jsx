import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className=' flex items-center justify-evenly gap-5 lg:gap-0 my-8 flex-col lg:flex-row'>
      <span> &#169; By Abhishek 2023, All Rights Reserver</span>
      <div className="">
        <button className=' bg-greenColor text-fff p-3 rounded-full hover:bg-blackColor'><FaFacebookF /></button>
        <button className=' bg-greenColor text-fff p-3 mx-3 rounded-full hover:bg-blackColor'><IoLogoInstagram /></button>
        <button className=' bg-greenColor text-fff p-3 rounded-full hover:bg-blackColor'><TfiLinkedin /></button>
        <button className=' bg-greenColor text-fff p-3 mx-3 rounded-full hover:bg-blackColor'><FaTwitter /></button>
      </div>
    </div>
  )
}

export default Footer
