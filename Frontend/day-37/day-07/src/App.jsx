import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { useState } from 'react'
import UserCard from './components/UserCard'
const App = () => {
  const [toggle, setToggle] = useState(false)
const [user ,setUser]=useState([])


  return (
    <div className='bg-black h-screen w-screen text-amber-50  flex justify-center items-center'>

      {toggle ? <Login setToggle={setToggle}  setUser={setUser}/> : <Register setToggle={setToggle} setUser={setUser} />}
      {
        user.map((elem)=>{
return <UserCard elem ={elem}/>
        })
      }

    </div>
  )
}

export default App
