import React from 'react'
import Navbar from './../../component/nav-bar/navbar'
import Footer from './../../component/footer/footer'
import './home.css'
function Home() {
  return (
    <div>
        <Navbar/>
        <div className="home">
        <h1>This is homepage</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Home