import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import SignUp from './SignUp'
import SignIn from './SignIn'

const Main = () => {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signin' element={<SignIn />} /> 
            </Routes>
        </Router>
    </div>
  )
}

export default Main