import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='bg-black flex  h-12 w-full p-2 rounded-xl text-amber-50 justify-between items-center'>
        <h1>USER</h1>
        <div className='flex gap-10  '>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>

        </div>
<button onClick={()=>{
    setToggle((prev)=>!prev)
}} className='bg-blue-600 rounded-xl  h-8 w-40 cursor-pointer'>CREATE USER</button>
      
    </div>
  )
}

export default Navbar
