import React, { useState } from 'react';
import './Greeting.css';

// Task 1: Simple Button Click Event
const Greeting = () => {
  const [message, setMessage] = useState('Hello World');
  const toggleMessage=()=>{
    setMessage(message==='Hello World'? 'GoodBye World!' : "hello World")
  }

  return (
    <div className='greeting-box' >
     
      <h2>{message}</h2>
      <button onClick={toggleMessage}>
        Change message
      </button>
    </div>
  );
};

export default Greeting;
