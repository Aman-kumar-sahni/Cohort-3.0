import About from './Components.jsx/about'
import { ContextProvider } from './Context/MyStore.jsx'
import  { useContext } from 'react'
import { Laila } from './Context/MyStore.jsx'
const App = () => {
            const data = useContext(Laila)
  

  return (
    <div>

      <h1>i m {data}</h1>
      <ContextProvider>
      <About/>

      </ContextProvider>

    </div>
  )
}

export default App
