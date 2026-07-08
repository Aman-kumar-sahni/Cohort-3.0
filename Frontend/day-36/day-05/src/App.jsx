import React, { useState } from 'react'

const App = () => {
let [name,setName]=useState("Aman")
const [email,setEmail]=useState("email")
const [password,setPassword]=useState("password")
 function submitHandler(e){
e.preventDefault()
setName(name)

 }

  return (
    <div className='bg-blue-200 h-screen w-screen flex flex-col   justify-center items-center'>
  <div className='bg-amber-50 h-auto w-auto flex flex-col  justify-center items-center border-2 border-b-black  rounded-xl'>
    <input onChange={(e)=>{
      name=e.target.value
    }} className="h-10 w-50 bg-amber-50 m-2 border border-2 border-b-black"type="text" placeholder='enter name '></input>
    <input className="h-10 w-50 bg-amber-50 m-2 border border-2 border-b-black"type="text" placeholder='enter email '></input>
    <input className="h-10 w-50 bg-amber-50 m-2 border border-2 border-b-black"type="text" placeholder='enter password'></input>
      <button onSubmit={submitHandler} className='h-10 w-50 bg-emerald-600 mb-1 rounded-xl'>submit</button>
     
  </div>
<h1>{name}</h1>
<h1>{email}</h1>
<h1>{password}</h1>


    </div>
  )
}

export default App
