import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'

const AppRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path = "/" element={<Home/>}/>
                <Route path = "/about" element={<About/>}>
                        <Route path = "contact" element={<Contact/>}/>

                </Route>
                
                

    </Routes>
    </div>
  )
}

export default AppRoutes
