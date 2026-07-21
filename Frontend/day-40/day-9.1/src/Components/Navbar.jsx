import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='bg-blue-500 h-12 w-full flex flex-row justify-between items-center p-5 rounded-xl  '>
      <h1 className='font-bold'>Navbar</h1>
      <div className='flex flex-row gap-5 justify-center items-center font-bold '>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
   <button onClick={()=>{
    setToggle((prev)=>!prev)
   }}className='bg-emerald-950  text-amber-50  cursor-pointer font-bold h-10 w-40 rounded-xl'>Create User</button>
      
    </div>
  )
}

export default Navbar
