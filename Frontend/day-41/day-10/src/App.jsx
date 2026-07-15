import React, { useContext } from 'react'
import { myStore } from './assets/Context/mystore'
const App = () => {
 let data =  useContext(myStore)
console.log(data)
  return (
    <div>
      
      <h2>{data}</h2>
      
    </div>
  )
}

export default App
