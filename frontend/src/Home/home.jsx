import React from 'react'
import Navbar from '../components/Navbar'
import Bannner from '../components/Bannner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

function home() {
  return (
    <>
        <Navbar/>
        <Bannner/>
        <Freebook/>
        <Footer/>
    </>
  )
}

export default home