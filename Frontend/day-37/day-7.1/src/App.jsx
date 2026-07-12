import React from 'react'
import FormCard from './components/formCard'
import  { useState } from "react";
import UserCard from './components/UserCard';

const App = () => {
      const [user ,setUser]=useState([])

  return (

    <div className='h-screen w-screen flex justify-center items-center gap-4'>
      <FormCard setUser={setUser}/>
      {
        user.map((elem)=>{
          return <UserCard username={elem.username} password={elem.password} image={elem.image}  email={elem.email}/>
        })
      }
    </div>
  )
}

export default App
