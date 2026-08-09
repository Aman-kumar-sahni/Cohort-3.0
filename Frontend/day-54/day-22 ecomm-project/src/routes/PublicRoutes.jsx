import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'


const PublicRoutes = () => {
  const navigate =useNavigate()
   const {isAuthenticated,user,isloading}=   useSelector((state)=>state.auth)
   if(isloading) return <h1>Loading State...</h1>
if(user) return navigate("/main")
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PublicRoutes
