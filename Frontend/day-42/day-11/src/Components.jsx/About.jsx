import React, { useEffect, useState } from 'react'
import { Laila } from '../Context/MyStore'
import  { useContext } from 'react'

const About = () => {
          const {theme ,color,setTheme,setColor,toggle,setToggle} = useContext(Laila)
       
useEffect(()=>{
            console.log("colour is changing ")
            setColor("Black")
            console.log("now color is black ")
            return ()=>{
                console.log("returnning....")
            }
        },[toggle])
        console.log(color)

  return (
    <div>
      hey i m about {color}
    
<button onClick={()=>{
setToggle((prev)=>!prev)
}}>change togggle  </button>
    </div>
  )
}

export default About
