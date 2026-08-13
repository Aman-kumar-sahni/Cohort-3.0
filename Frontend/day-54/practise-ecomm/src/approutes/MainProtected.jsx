import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'

const MainProtected = () => {
  const navigatge = useNavigate()
const { user } = useSelector((state) => state.auth);
console.log(user)
  if(!user) return  navigatge("/")
  return <Outlet/>
}

export default MainProtected
