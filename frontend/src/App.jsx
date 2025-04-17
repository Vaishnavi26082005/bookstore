import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/home.jsx'
import {} from "react-router-dom"
import Course from './components/Course.jsx'
import Courses from './courses/Courses.jsx'
import Signup from './components/Signup.jsx'


const App = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white '>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App