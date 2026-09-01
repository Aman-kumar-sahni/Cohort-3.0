import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router';
import { Navigate } from 'react-router';
const RoleBasedRoute = ({allowedRoles}) => {
    let {employee}=useSelector((store)=>store.auth);
    if(!allowedRoles.includes(employee?.role)){
        return <Navigate to ={"/unauthorized"}/>
    }
  return <Outlet/> 
}

export default RoleBasedRoute
