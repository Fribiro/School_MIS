import React from 'react'
import StudInfo from './StudInfo';

import styled from "styled-components";
import Chart from '../students/StudChart'
import { studentData } from '../../dummyData';



const Home =styled.div`
    flex: 4;
`

const HomeWidgets=styled.div`
    display: flex;
    margin: 20px;
`
function StudDash() {
  return (
    <>

        <Home>
           <StudInfo></StudInfo>
            <Chart data = {studentData} title="My Performance" grid dataKey="Marks"/> 
      
        </Home>
        <HomeWidgets>
          {/* <Widget /> */}
         
        </HomeWidgets>

    </>
  )
}

export default StudDash