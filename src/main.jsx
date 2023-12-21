import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Root from './Router/root.jsx'
import Home from './Components/Home.jsx'
import AddCart from './Components/AddCart/AddCart.jsx'
import ShowItemCard from './Components/ShowItamsCard/ShowItemCard.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"",
        element:<App/>
      },
      {
        path:"cart",
        element:<AddCart/>
      },
      ,{
        path:"ShowItemCard",
        element:<ShowItemCard/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
