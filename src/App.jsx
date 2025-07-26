import './App.css'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import { cityContext } from './context'
import { useState } from 'react'
import Body from './sections/Body'



function App() {
  const[city, setCity] = useState("No data available");

  

  return (
    <> 
    <div className="max-w-[400px] border-2 mx-auto my-2">
      <cityContext.Provider value={{city, setCity}}>
        <Navbar/>
        <Body/>
        <Footer/>
      </cityContext.Provider>
    </div>
    
      
    </>
  )
}

export default App
