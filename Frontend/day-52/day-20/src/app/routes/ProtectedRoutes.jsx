import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'

const ProtectedRoutes = () => {
 const navigate  =    useNavigate()

const user = useSelector((state) => state.auth.user);console.log(user)
if(!user) return  navigate("/login")
  return <Outlet/>
}

export default ProtectedRoutes
