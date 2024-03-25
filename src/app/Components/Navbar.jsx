import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-4 bg-gray-600 py-4 text-xl'>
        <NavbarItem title={'Trending'} param='fetchTrending'/>
        <NavbarItem title={'Top rated'} param='fetchTopRated'/>
    </div>
  )
}

export default Navbar