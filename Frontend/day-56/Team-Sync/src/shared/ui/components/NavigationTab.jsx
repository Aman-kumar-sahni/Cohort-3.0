import { ChartArea } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const NavigationTab = ({path,title}) => {
  return <NavLink className={"flex gap-3 pl-4"} to={path} >

    <ChartArea size={23}/>
{title}
  </NavLink>
}

export default NavigationTab
