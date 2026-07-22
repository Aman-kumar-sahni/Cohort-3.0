import React, { useContext } from 'react'
import { Routes,Route } from 'react-router'

import Home from '../pages/Home'
import About from '../pages/About'
import Shop from '../pages/Shop'
import { MyStore } from '../context/MyContext'
import ProductDetails from '../pages/ProductDetails'

const MyRoutes = () => {
  return (
    <div>
      <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/About" element={<About />} />
     <Route path="/Shop" element={<Shop/>} />
     <Route path="/details/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default MyRoutes
