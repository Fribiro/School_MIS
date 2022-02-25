import React from 'react'
import LoginPage from './auth/Login'
import Navbar from './Navbar'
import Slider from './Slider'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'


const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
    </div>
  )
}

export default Homepage