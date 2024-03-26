import React from 'react'
const Result = ({ results }) => {
    return (
      <div>
        {
          results.map((result) => (
            <div key={result.id}>
              <h1>{result.original_title}</h1>
            </div>
          ))
        }
      </div>
    );
  };
  
  export default Result;
  