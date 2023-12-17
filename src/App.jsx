import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className=" flex justify-center flex-col items-center ">
<NavBar/>
    <Home/>
   </div>
   </>
  )
}

export default App
