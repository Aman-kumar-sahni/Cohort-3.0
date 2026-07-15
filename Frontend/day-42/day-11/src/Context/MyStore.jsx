import { createContext,useState } from "react";

export const Laila = createContext()


export function ContextProvider({children}){
 const [theme,setTheme]=useState("Dark")
  const [color,setColor]=useState("blue")
 const [toggle,setToggle]=useState(true)


return <Laila.Provider value ={{theme ,color,setTheme,setColor,toggle,setToggle}}>
    
    {children}
   </Laila.Provider>

}




