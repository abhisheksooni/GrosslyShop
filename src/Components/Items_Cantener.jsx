import React from 'react'
import ItemsCard from './ItemsCard'
import { FaChevronRight } from "react-icons/fa6";


function Items_Cantener() {


  const it = [
    {
      id:1,
      name:"tameto",
      prices: 80 ,
      url:"https://i.postimg.cc/X76WN36G/tameto.png"
  },
  {
      id:2,
      name:"apple",
      prices: 120 ,
      url:"https://i.postimg.cc/3xkRD4Tw/apple.png"
  },
  {
      id:3,
      name:"carrot",
      prices: 55 ,
      url:"https://i.postimg.cc/x8jjjq5n/carrot.png"
  },
  {
      id:4,
      name:"vagitable",
      prices: 80 ,
      url:"https://i.postimg.cc/Dyj0ZQRD/image-17.png"
  },
  {
      id:5,
      name:"orange",
      prices: 85 ,
      url:"https://i.postimg.cc/Jn54Wjbp/orange.png"
  },
  {
      id:6,
      name:"Patato",
      prices: 35 ,
      url:"https://i.postimg.cc/3xzwj88F/potato.png"
  }
  ]

  

  return (
    <div className="lg:max-w-[1322px] flex lg:items-center flex-col">

  <div className="lg:max-w-[1322px] lg:w-[100vw] flex justify-between p-1 lg:p-5 ">
      <span className='text-2xl lg:text-3xl  font-semibold text-blackColor'>Featured Products</span>
      <button className='transition ease-in-out duration-400 text-fff text-base bg-greenColor px-3 py-1 lg:px-5 font-semibold rounded-lg hover:bg-greyColor '>More</button>
  </div>
  
    <div className='flex overflow-x-auto items-center  gap-5 w-[330px] h-[225px] sm:w-[700px] lg:w-[860px] xl:w-[1200px] my-5 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden'>
      {
        it.map((e)=>(
          <div className="" key={e.id}>
            <ItemsCard Itemimg={(e.url)} Price={e.prices} ItemName={e.name} prodect={e}/>
          </div>
            // console.log(e.url)

        ))
      }
      
      <button className=' bg-backColor text-lg text-blackColor py-3 px-2 font-bold rounded-lg block lg:hidden   '><FaChevronRight /></button>
    </div>
    
    </div>
  )
}

export default Items_Cantener
