import React, { useEffect ,useContext} from 'react'
import Navbar from './components/Navbar'
import MyRoutes from './routes/MyRoutes'
import { MyStore } from './context/MyContext'
const App = () => {
  
 const { GetProducts
}= useContext(MyStore)

useEffect(()=>{
GetProducts()
},[])
  return (
    <div className='flex flex-col gap-2'>
      <Navbar/>
      <MyRoutes/>
    </div>
  )
}

export default App
