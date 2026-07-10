import React from 'react'

const Form = () => {
    return (
        <div className='bg-amber-50 h-80 w-80  rounded-xl m-1 p-2 pl-10 gap-3 flex flex-col '>
            <input type="text" placeholder='Product name ' className='h-10 w-60 border border-2 border-black  p-2'></input>
            <input type="text" placeholder='Price ' className='h-10 w-60 border border-2 border-black  p-2'></input>
            <spna>Select Category:</spna>
            <select className='h-10 w-60 border border-2 border-black  p-1'>
                <option value="Mens">Mens</option>
                <option value="Women">Women</option>
                <option value="Kids">kids</option>

            </select>
            <input type="url" placeholder='image ' className='h-10 w-60 border border-2 border-black  p-2'></input>
            <button className='h-10 w-60   p-2 bg-blue-500'>CREATE</button>
        </div>
    )
}

export default Form
