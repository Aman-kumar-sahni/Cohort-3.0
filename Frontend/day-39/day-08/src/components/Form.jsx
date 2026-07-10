import React from 'react'

const Form = () => {
    return (
        <div className=' flex flex-col text-amber-50 flex flex-col justify-center items-center  mt-40 '>
            <h1 className='font-bold text-amber-50 '>create User </h1>
            <form className='bg-black h-80 w-90 flex flex-col justify-center items-center gap-2 p-2 border border-2 border-gray-500'>
                <input className='h-10 w-full rounded-sm border border-2 border-gray-500 ' type="text" placeholder='Name' ></input>
                <input className='h-10 w-full rounded-sm border border-2 border-gray-500 ' type="text" placeholder='Email' ></input>
                <input className='h-10 w-full rounded-sm border border-2 border-gray-500 ' type="text" placeholder='Mobile' ></input>
                <input className='h-10 w-full rounded-sm border border-2 border-gray-500 ' type="text" placeholder='Image' ></input>
                <button className='h-10 w-full rounded-sm bg-blue-600 text-amber-50'> Add User</button>

            </form>
        </div>
    )
}

export default Form
