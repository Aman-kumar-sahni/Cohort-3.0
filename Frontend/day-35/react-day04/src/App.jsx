import React from 'react'
import "./App.css"
import Counter from './Counter'
const App = () => {

  //setfunction =>re render krta hai component k0 
  //update krta hai state ko 
  //sam value update krne par rerender nhi krega
  return (
    <div    className='bg-amber-400'>
      <h1 className='text-xl '>hello </h1>
      <Counter/>
      </div>
  )
}

export default App
