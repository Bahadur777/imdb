import React from 'react'
import MenuItem from './MenuItem';
import { AiFillHome  } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import Link from 'next/link';
import DarkMoodSwitch from './DarkMoodSwitch';


const Header = () => {
  return (
    <div className=' flex items-center justify-between py-3 max-w-6xl mx-auto '>
       <div className='flex gap-4'>
       <MenuItem title="Home" icons={<AiFillHome/>} address='/'/>
        <MenuItem title="about" icons={<AiFillInfoCircle/>} address='/about'/>
        <MenuItem title="contact" icons={<AiFillInfoCircle/>} address='/contact'/>
       </div>
        <div className=" flex gap-4 items-center">
        <DarkMoodSwitch/>
          <Link href={"/"} className=' flex gap-2 items-center transform-500'>
        <span className=' text-2xl uppercase py-1 px-2 bg-amber-500 rounded-lg font-bold'>imdb</span>
        <span className=' text-xl hidden sm:inline'>clone</span>
       </Link>
        </div>
       
    </div>
  )
}

export default Header