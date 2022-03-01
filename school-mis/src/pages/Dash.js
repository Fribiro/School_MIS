import React from 'react'
import FeaturedInfo from '../components/FeaturedInfo'
// import Chart from '../components/Chart'
import styled from "styled-components";
import Chart from '../components/Chart';
import { userData } from '../dummyData';
import WidgetLg from '../components/widgetLg';

const Home =styled.div`
    flex: 4;
`

const HomeWidgets=styled.div`
    display: flex;
    margin: 20px;
`

function Dash() {
  return (
    <div>
        <Home>
           <FeaturedInfo></FeaturedInfo>
           <Chart data = {userData} title="School Performance" grid dataKey="School Performance"/>
      
        </Home>
        <HomeWidgets>
         <WidgetLg/>
        </HomeWidgets>
        
        {/* <Chart></Chart> */}
    </div>
  )
}

export default Dash