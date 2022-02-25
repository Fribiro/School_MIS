import React from 'react'
import styled from "styled-components";
import TrChart from './TrChart';
import TrInfo from './TrInfo';
import { teacherData } from '../../dummyData';


const Home =styled.div`
    flex: 4;
`

const HomeWidgets=styled.div`
    display: flex;
    margin: 20px;
`
function TrDash() {
  return (
    <>

        <Home>
           <TrInfo/>
            <TrChart data = {teacherData} title="class Performance" grid dataKey="Courses"/> 
      
        </Home>
        <HomeWidgets>
          {/* <Widget /> */}
         
        </HomeWidgets>

    </>
  )
}

export default TrDash