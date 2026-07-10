import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {
 const [toggle,setToggle]= useState(true)
  return (
    
    <div className='bg-gray-800 h-screen w-screen p-2 flex flex-col gap-2'>
      <Navbar setToggle={setToggle}/>
      {toggle? <UserCard />:      <Form />
 }
    </div>
  )
}

export default App
