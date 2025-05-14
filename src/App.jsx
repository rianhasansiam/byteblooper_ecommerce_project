import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Navigation from "./components/Navigation"

import Home from "./pages/Home"
import FooterNavigation from "./components/FooterNavigation"



function App() {





  return (
    <>
 <Navbar></Navbar>
 
 <div className="flex ">


  <Navigation></Navigation>
<FooterNavigation></FooterNavigation>

  
  
 <Outlet></Outlet>
  

  
 </div>
    </>
  )
}

export default App
