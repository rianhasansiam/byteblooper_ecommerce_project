import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Navigation from "./components/Navigation"
import 'react-toastify/dist/ReactToastify.css';


import FooterNavigation from "./components/FooterNavigation"
import { ToastContainer } from "react-toastify";



function App() {





  return (
    <>
 <Navbar></Navbar>
 
 <div className="flex ">


  <Navigation></Navigation>
<FooterNavigation></FooterNavigation>

  
  
 <Outlet></Outlet>
  

    <ToastContainer />
 </div>
    </>
  )
}

export default App
