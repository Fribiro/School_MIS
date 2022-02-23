import React from 'react'
import LoginPage from './auth/Login'
import Navbar from './Navbar'
import Slider from './Slider'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'


const Homepage = () => {
  return (
    <div>
        {/* <SectionOne />
        <SectionTwo /> */}
        <Navbar />
        <Slider />
        <SectionOne />
        <SectionTwo />
        <LoginPage />
    </div>
  )
}

export default Homepage