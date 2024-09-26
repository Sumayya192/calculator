'use client'; // Add this at the top to make the component a Client Component

import React, { useState } from 'react';

export default function Counter() {
  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{padding:"20px"}}>
      <h1 style={{padding:"20px",}}>Counter: {count}</h1>
      <button onClick={increment} style={{margin:"20px",border:"1px black solid"}}>Increment</button>
      <button onClick={decrement} style={{margin:"20px"}}>Decrement</button>
      <button onClick={reset} style={{padding:"20px"}}>Reset</button>
    </div>
  );
}
