import React from 'react'
import Navbar from '../../shared/ui/components/Navbar'
import HomePage from '../../features/dashboard/ui/HomePage'
import { Outlet } from 'react-router'

const MainProtected = () => {
  return  <Outlet/>
}

export default MainProtected
