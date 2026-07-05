import React, { useState } from 'react'

const Counter = () => {
      const [state,setState]=useState(0)

  return (
    <div>
        <h1>count is {state}</h1>
    <button onClick={()=>{
        setState()
    }}>increase</button>
    </div>
  )
}

export default Counter
