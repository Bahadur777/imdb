import React from 'react'
import Card from './Card';
const Result = ({ results }) => {
    return (
      <div className='sm:grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-8  gap-4 max-w-6xl mx-auto py-5'>
        {
          results.map((result) => (
            
            <Card className='' key={result.id} result={result}/>
          ))
        }
      </div>
    );
  };
  
  export default Result;
  