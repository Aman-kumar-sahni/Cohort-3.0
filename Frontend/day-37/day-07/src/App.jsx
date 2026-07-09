import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { useState } from 'react'
const App = () => {
  const [toggle ,setToggle]=useState(true)
  return (
    <div className='bg-black h-screen w-screen text-amber-50  flex justify-center items-center'>

      {toggle ?<Login setToggle={setToggle}/>:<Register setToggle={setToggle}/>}


    </div>
  )
}

export default App
