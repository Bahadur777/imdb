import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='flex justify-center'>
       <Image
      src="Spinner.svg"
      width={500}
      height={500}
      alt="Picture of the author"/>
    </div>
  )
}

export default loading