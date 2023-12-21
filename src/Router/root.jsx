import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import App from '../App'
import { Outlet } from 'react-router-dom'

function root() {
  return (
    <>
    <div className='flex justify-center flex-col items-center '>
    <NavBar/>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default root
