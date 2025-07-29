import React, { useState } from 'react'
import './Counter.css';

const Counter = () => {
    const [count, setCount]= useState(0)
  return (
    <div className='counter-card'>
      <h2>Count: {count}</h2>
      <button onClick={()=>{
        setCount(count +1)
      }}>Increase</button>
    </div>
  )
}

export default Counter
