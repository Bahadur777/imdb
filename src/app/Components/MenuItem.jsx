import React from 'react'
import Link from 'next/link'


const MenuItem = ({title, address, icons}) => {
  return (
   <Link href={address || '#'} className='hover:text-amber-500'>
   <icons className='sm:hidden text-2xl'>{icons}</icons>
   <p className='uppercase hidden sm:inline text-sm'>{title}</p>
   </Link>
  )
}

export default MenuItem