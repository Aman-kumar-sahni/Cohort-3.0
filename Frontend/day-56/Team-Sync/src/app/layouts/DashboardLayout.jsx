import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../shared/ui/components/Navbar'
const DashboardLayout = () => {
  
  return <>
  <Navbar/>
  <main>
    <Outlet/>
  </main>
  </>
}

export default DashboardLayout
