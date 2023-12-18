import React from 'react'
import pi from './Imgs/tameto.png'

function CategoriesCard({ItemName="Added", Price=50, img=pi}) {
  return (<>
  
    <div className='min-w-[153px] h-[194px] bg-itemBack rounded-xl flex flex-col items-center snap-normal snap-center hover:bg-itemHover transition ease-in-out duration-400 hover:scale-110'>
        <img src={img} alt="Items" />
        <p className=' font-bold text-blackColor'>{ItemName}</p>
        <p className='text-greyColor font-semibold'>{Price}</p>
    </div>
    
    </>
  )
}

export default CategoriesCard
