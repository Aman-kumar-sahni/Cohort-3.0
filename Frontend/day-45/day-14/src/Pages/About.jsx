import React from 'react'
import { Outlet } from 'react-router'

const About = () => {
  return (
    <div>
      This is About Page
      <Outlet/>
    </div>
  )
}

export default About
