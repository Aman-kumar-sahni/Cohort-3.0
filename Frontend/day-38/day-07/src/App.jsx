import React from 'react'
import Form from './components/Form'
import { useState } from 'react'
import Card from './components/Card'
const App = () => {
  const [user ,setUser]=useState([])
  console.log(user)

  return (
    <div className='h-screen w-screen bg-blue-300 flex flex-row justify-center items-center gap-5'>
      <h1>this is form </h1>
<Form setUser={setUser}/>
{user.map((elem)=>{return <Card elem={elem}/>})}
    </div>
  )
}

export default App
