import { useState } from 'react'

function UseState() {
    const[ count, setCount ] = useState(0);
  return (
    <div>
       <h1>USESTATE</h1>
       <h2>COUNT: {count} </h2>
    </div>
  );
}

export default UseState


