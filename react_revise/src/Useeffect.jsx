import React, { useEffect, useState } from 'react'

function Useeffect() {
    const [ count, setCount ] = useState(0);
    useEffect(() => {
        setTimeout(() => {
             setCount((prev) => prev+1);
            },1000);
},[]);
  return (
    <div>
      <h1>USEEFFECT</h1>
     <h2>COUNTER VALUE: { count }</h2>
    </div>
  )
}

export default Useeffect
