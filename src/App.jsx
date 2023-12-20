import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Categories_Cantener from './Components/Categories_Cantener'
import Items_Cantener from './Components/Items_Cantener'
import OfferCantener from './Offer Card/OfferCantener'
import Footer from './Components/Footer'
import AddCart from './Components/AddCart/AddCart'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className=" flex justify-center flex-col items-center ">
<NavBar/>
    <Home/>
   <div className="m-5 lg:"></div>
    <Categories_Cantener/>
    <Items_Cantener/>
    <OfferCantener/>
    <AddCart/>
    </div>

    <Footer/>
   </>
  )
}

export default App
