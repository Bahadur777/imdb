'use client'
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// const API_KEY=process.env.API_KEY

// export default async function Home({searchParams}) {
//   const genre = useSearchParams.genre || 'fetchTrending'
//   const res = await fetch (
//     `https://api.themoviedb.org/3${
//          genre === 'fetchTopRated' ? `movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}& language= en.US&page=1`
//   );
//   const data = await res.json();
//    if(!res.ok){
//      throw new Error("Fail to fetch");
//   }
//   const results = data.results;

//   return (
//     <div>
//     home
//     </div>
//   );
// }

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react"; // Import useState and useEffect
import Result from "@/Components/Result";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Home({ searchParams }) {
  const [results, setResults] = useState([]); // Define state for results

  const genre = useSearchParams.genre || "fetchTrending";

  useEffect(() => {
    // Use useEffect to fetch data when component mounts or genre changes
    fetchData();
  }, ['genre']);

  async function fetchData() {
    try {
      const url = `https://api.themoviedb.org/3${
        genre === 'fetchTopRated' ? `/movie/top_rated`:`/trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=1`;
      console.log("Fetching data from:", url); // Log the URL being fetched
      const res = await fetch(url);
  
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
  
      const data = await res.json();
      console.log("Data from API:", data); 
      const results = data.results;
      setResults(results); // Update results state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults([]); // Set results to an empty array in case of error
    }
  }
  
  return (
    <div>
      <Result results={results} />
    </div>
  );
}
