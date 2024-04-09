'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

const SearchBox = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const submitHandle = (e)=>{
    
       e.preventDefault()
  }
  
  return (
    <div>
        <form action="" className="flex justify-between px-5" onSubmit={submitHandle} >
            <input type="text " placeholder='Search here.....' className='p-4 w-full outline-none placeholder-gray-500 h-14 rounded-md ' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button disable={search=== ''} className='text-amber-500 bg-white px-5 rounded-md disabled:text-gray-400' >Search</button>
        </form>
    </div>
  )
}

export default SearchBox