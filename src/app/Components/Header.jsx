import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome  } from "react-icons/ai";

const Header = () => {
  return (
    <div>
        <MenuItem title="Home" icons={<AiFillHome/>} address='/'/>
        <MenuItem title="about" icons={<AiFillHome/>} address='/about'/>
    </div>
  )
}

export default Header