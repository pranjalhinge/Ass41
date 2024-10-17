import React from 'react'
import Navbar from './../../component/nav-bar/navbar'
import Footer from './../../component/footer/footer'
import './about.css'
function about() {
  return (
    <div>
        <Navbar/>
        <div className="about">
        <h2>This is aboutpage</h2>
        </div>
        <Footer/>
    </div>
  )
}

export default about