import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Navigation from "./components/Navigation"

import Home from "./Pages/Home"



function App() {





  return (
    <>
 <Navbar></Navbar>
 <div className="flex">
  <Navigation></Navigation>
  
 <Home></Home>
  

  
 </div>
    </>
  )
}

export default App
