import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'
const PublicProtected = () => {
  const navigate = useNavigate()
const { user } = useSelector((state) => state.auth);
   console.log(user)

 if(user)return navigate ("/main")
  return <Outlet/>
}

export default PublicProtected
