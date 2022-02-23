import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'


const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Slider></Slider>
        <SectionOne />
        <SectionTwo />
    </div>
  )
}

export default Homepage