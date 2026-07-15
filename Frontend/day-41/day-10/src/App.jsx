import React, { useContext } from 'react'
import { myStore } from './assets/Context/mystore'
const App = () => {
  let data =useContext(myStore)
  return (
    <div>
      {data}
    </div>
  )
}

export default App
