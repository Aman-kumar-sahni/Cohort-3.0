import React from 'react'

const UserCard = () => {
  return (
    <div className='bg-black h-95 w-60 p-2 flex flex-col gap-1 border border-2 text-amber-50 border-gray-400 '>
      <div className='h-60 w-55  '>
         <img className=' w-full h-full object-cover' src="https://cdn.pixabay.com/photo/2024/05/09/12/24/ai-generated-8750915_1280.jpg" alt="Image"></img> 

      </div>
      
        <h1> name </h1>
        <h1> gamil</h1>
        <h1> Contact</h1>


<div className='flex gap-2 items-center justify-center'>
            <button className='bg-emerald-500 h-8 w-25 rounded-xl'>Edit</button>
                        <button className='bg-red-800 h-8 w-25 rounded-xl'>Delete</button>


</div>
      
    </div>
  )
}

export default UserCard
