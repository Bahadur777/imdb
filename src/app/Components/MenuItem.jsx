import React from 'react'
import Link from 'next/link'


const MenuItem = ({title, address, icons}) => {
  return (
   <Link href={address || '#'}>
   <icons>{icons}</icons>
   <p>{title}</p>
   </Link>
  )
}

export default MenuItem