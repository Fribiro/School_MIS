import React from 'react'

import styled from "styled-components";
import { userData } from '../../dummyData'
import AdminInfo from './AdminInfo';
import AdminChart from './AdminChart';
//import Widget from './Widget';


const Home =styled.div`
    width: 100%;
`

const HomeWidgets=styled.div`
    display: flex;
    margin: 20px;
`

function AdminDash() {
  return (
      <>
      <Home>
        <AdminInfo/>        
       <AdminChart data = {userData} title="School Performance" grid dataKey="School Performance"/>

     </Home>
       <HomeWidgets>
           {/* <Widget/>        */}
     </HomeWidgets>
      
     </>
    
   
  )
}

export default AdminDash