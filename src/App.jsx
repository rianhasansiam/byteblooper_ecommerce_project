import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Navigation from "./components/Navigation"
import 'react-toastify/dist/ReactToastify.css';
import FooterNavigation from "./components/FooterNavigation"
import { ToastContainer } from "react-toastify";

function App() {
  return (
   <div className=" overflow-x-hidden">
    <Navbar />
      <div className="flex min-h-screen">
        <Navigation />
        <div className="flex-1">
          <Outlet />
        </div>
        <FooterNavigation />
      </div>
      <ToastContainer />
   </div>
  )
}

export default App
