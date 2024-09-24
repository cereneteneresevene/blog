import React from 'react';
import { CiSearch } from "react-icons/ci";
import MenuItem from './MenuItem';
import { ThemeComp } from './ThemeComp';

const Header = () => {
  const menu = [
    {
      name: "Hakkımda",
      url: "https://github.com/cereneteneresevene",
    },
    {
      name: "Anasayfa",
      url: "/",
    },
    
  ]
  return (
    <div className='flex items-center gap-7 h-20 p-5 flex-1'>
      <div className='bg-purple-500 rounded p-3 text-2xl font-bold cursor-pointer'> Blog </div>
      
      <ThemeComp/>
      {
        menu.map((mn,i)=>(
          <MenuItem mn={mn} i={i}/>
        ))
      }
    </div>
  )
}

export default Header