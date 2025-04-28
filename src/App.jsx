import { Outlet, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar'
import './App.css'
import Footer from './Components/Footer';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";




function App() {
  const [loading,setLoading]=useState(false)
 const location=useLocation()
 useEffect(()=>{
  setLoading(true)
  const timeout=setTimeout(() => {
    setLoading(false)
  }, 1000);
  return ()=>clearTimeout(timeout)
 },[location])

  return (
    <>
      <Navbar />
      {loading?<Loading/>:<Outlet/>
      }
      <ToastContainer />
     
      <Footer />
    </>
  )
}

export default App
