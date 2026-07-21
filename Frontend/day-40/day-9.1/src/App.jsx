import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import SignupForm from './Components/Form'
import UserCard from './Components/UserCard'

const App = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("user1")) || [])
  const [updatedData,setUpdatedData]=useState(null)
  const [toggle, setToggle] = useState(true)
  function deleteHandler(id) {
    let newData = data.filter((elem, idx) => idx !== id)
    localStorage.setItem("user1", JSON.stringify(newData))
    setData(newData)
  }
  return (
    <div className='h-screen w-screen flex flex-col p-2  gap-5'>

      <Navbar setToggle={setToggle} />
      {toggle ? (<div className='flex gap-2'>
        {data.map((elem, index) => {

          return <UserCard key={index} elem={elem} idx={index} deleteHandler={deleteHandler} setToggle={setToggle} setUpdatedData={setUpdatedData} />

        })}

      </div>) :
        <SignupForm setData={setData} setToggle={setToggle} data={data}  updatedData={updatedData} setUpdatedData={setUpdatedData}/>


      }
    </div>
  )
}

export default App
