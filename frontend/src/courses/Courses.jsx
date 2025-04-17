import React from 'react'
import Course from '../components/Course.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
   
function Courses() {
  return (
    <>
      <Navbar/>
      
      <div className='min-h-screen mt-1.5 '>
      <Course/>
      </div>
      <Footer/>
    </>
  )
}

export default Courses