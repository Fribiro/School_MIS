import React from 'react'
import LoginPage from './auth/Login'
import Navbar from './Navbar'
import Slider from './Slider'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import Nav from './subscribe'

// //import Dash from "../pages/Dash"
// import Main from "../pages/Main"

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <SectionOne />
        <SectionTwo />
        <Nav />
    </div>
  )
}

// const Homepage = () => {
//   return ( 
//     <div>
     
//        {/* <Dash></Dash> */}
//          <Navbar/>
//         <Slider></Slider>
//         <SectionOne />
//         <SectionTwo /> 
//          <Main></Main> 
//     </div>
//   )
// }

 export default Homepage