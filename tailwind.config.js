/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'main':"url('../public/Rectangle1.png')",
      }
    },
    colors:{
'greenColor':'#3BB77E',
'lightGreen':'#DEF9EC',
'blackColor':'#253D4E',
'greyColor':'#ADADAD',
'fff':'#fff',
'backColor':'#C5EAD9',
'itemBack':'#F2FCE4',
'itemHover':'#DEF9EC',
'addbtnbg':'#FFD480',
'addbg':'#FFF5E1',
'addbg2':'#D2EFE1',
    },
   
  plugins: [
    
  ],
}
}

