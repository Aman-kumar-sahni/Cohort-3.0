import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import SignupForm from './Components/Form'
import UserCard from './Components/UserCard'

const App = () => {
   const [data,setData]=useState([])
console.log(data)
const [toggle,setToggle]=useState(true)
  return (
    <div className='h-screen w-screen flex flex-col p-2  gap-5'>
      
      <Navbar setToggle={setToggle}/>
      {toggle ?  (<div className='flex gap-2'>
        {data.map((elem,index)=>{

        return <UserCard key ={index} elem={elem}/>
        
      })}
        
      </div>):
            <SignupForm setData={setData}  setToggle={setToggle}/>


}
    </div>
  )
}

export default App
