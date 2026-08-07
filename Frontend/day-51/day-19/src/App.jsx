import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBYAmount } from './store/CounterSlice'

const App = () => {
  const dispatch= useDispatch()
 const {count} = useSelector((state)=>(state.counter))
  return (
    <div>
      My Count is {count}
      <button onClick={()=>{ dispatch(increment())}    }>increment</button>
      <button onClick={()=>{dispatch(decrement())}    }>Decrement</button>
      <button onClick={()=>{dispatch(incrementBYAmount(5))}    }>incrementByAmount</button>

    </div>
  )
}

export default App
