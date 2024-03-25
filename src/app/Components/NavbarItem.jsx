'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({title, param}) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
   <Link className={`hover:text-amber-600 transition-color duration-300 ${genre === param ? 'underline underline-offset-4 decoration-amber-500 rounded-lg ':''}  `} 
   href={`/?genre=${param}`}>
    <p className=''>{title}</p>
   </Link>
  )
}

export default NavbarItem