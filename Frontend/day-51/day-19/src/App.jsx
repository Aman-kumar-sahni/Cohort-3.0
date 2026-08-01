import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrement, increaseByAmount, increment } from './features/counter/counterSlice'
const App = () => {
  const count = useSelector((state) => state.counter.count)
 let dispatch =useDispatch()
  return (
    <div  className='bg-amber-700'>
      <h1>{count}</h1>
<button onClick={()=>{
  dispatch(increment())
}}>
  Increment
  
</button>
<button onClick={()=>{
  dispatch(increaseByAmount(5))
}}>
  increment by amount
</button><button onClick={()=>{

  dispatch(decrement())
}}>
    decrement

</button>
    </div>
  )
}

export default App
