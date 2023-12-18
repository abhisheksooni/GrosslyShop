import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'

import Categories_Cantener from './Components/Categories_Cantener'
import Items_Cantener from './Components/Items_Cantener'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className=" flex justify-center flex-col items-center">
<NavBar/>
    <Home/>
   <div className="m-5 lg:"></div>
    <Categories_Cantener/>
    <Items_Cantener/>
    </div>
   </>
  )
}

export default App
