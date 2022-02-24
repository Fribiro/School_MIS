import React from 'react'
import LoginPage from './auth/Login'
import Navbar from './Navbar'
import Slider from './Slider'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import Nav from './subscribe'
import { Footer } from './footer/footer'


const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <SectionOne />
        <SectionTwo />
        <Nav />
        <Footer />
    </div>
  )
}

export default Homepage