import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../shared/ui/components/Navbar'

const MainLayouts = () => {
  
  return<>
<Navbar/>
  <main>
    <Outlet/>
  </main>
  </>
}

export default MainLayouts
