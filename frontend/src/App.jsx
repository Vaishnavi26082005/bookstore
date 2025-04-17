import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/home.jsx'
import {} from "react-router-dom"
import Course from './components/Course.jsx'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Course/>}/>
      </Routes>
    </>
  )
}

export default App