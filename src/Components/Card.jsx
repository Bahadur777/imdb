import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiThumbsUp } from "react-icons/fi";

const Card = ({result}) => {
  console.log("check", result)
  return (
    <div className='group hover:shadow-md cursor-pointer sm:border sm:border-state-400 p-2 rounded-md transition-shadow duration-200 '>
   <Link href={`/movie/${result.id}`}>
        {<Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path }`} width={500} height={300} className='sm:round-t-lg sm:group-hover:opacity-75'>
       </Image> }
       <div>
        <p className=' line-clamp-2'>{result.overview}</p>
        <h1 className=' text-lg font-bold'>{result.title || result.name}</h1>
        <p className='flex items-center gap-x-2'>
          {result.release_date || result.first_air_date} <FiThumbsUp/>{result.vote_count}
        </p>
        <p>{result.media_type}</p>
       </div>
      </Link>
    </div>
  )
}

export default Card