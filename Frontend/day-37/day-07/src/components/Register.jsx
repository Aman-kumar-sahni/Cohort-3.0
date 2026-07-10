import React from 'react'
import { useState } from 'react'

const Register = ({ setToggle ,setUser}) => {
  const [formdata, setFormData] = useState({})

  function formHandler(e) {
    let { name, value } = e.target
    setFormData({ ...formdata, [name]: value })

  }
  function submitHandler(e){
e.preventDefault()
setUser((prev)=>[...prev,formdata])
setFormData({
  username:"",
  email:"",
  password:""
})
  }



  return (

    <div className='bg-amber-50 h-90 w-90 rounded-xl flex flex-col gap-2 pl-9 pt-10 text-black'>
      <h1 className='font-bold text-2xl text-amber-950'>Register</h1>
      <form onSubmit={submitHandler} className='flex flex-col gap-3 pt-5 '>
        <input required  value={formdata.username} onChange={formHandler} name="username" type="text" placeholder='Enter Username' className='h-10 w-70 border border-2 border-black rounded-xl p-2 border-amber-950'></input>

        <input required value={formdata.email}onChange={formHandler} name="email" type="text" placeholder='Enter email' className='h-10 w-70 border border-2 border-black rounded-xl p-2 border-amber-950'></input>
        <input required value={formdata.password} onChange={formHandler} name="password" type="password" placeholder='Enter Password' className='h-10 w-70 border border-2 border-black rounded-xl p-2 border-amber-950'></input>
        <button className='h-10 w-70 bg-amber-950 rounded-xl  text-amber-50 text-2xl font-bold flex justify-center '> Register</button>
      </form>
      <p className='pt-3 pl-1'>Already have an account? <span onClick={() => {

        setToggle((prev) => !prev)

      }} className='font-bold cursor-pointer'> Login here</span></p>
    </div>
  )
}

export default Register
