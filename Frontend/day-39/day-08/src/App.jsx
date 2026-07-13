import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {
       const [user,setUser]= useState([])
 const [toggle,setToggle]= useState(true)
  return (
    
    <div className='bg-gray-800 h-screen w-screen p-2 flex flex-col gap-2'>
      <Navbar setToggle={setToggle}/>
     <div className='h-full w-full flex flex-row  gap-5 '>
       {toggle? (user.map((elem)=>{return <UserCard elem ={elem}/>})):      <Form setUser={setUser}  setToggle={setToggle} />
 }
     </div>
    </div>
  )
}

export default App
