
import React from 'react'
import styled from "styled-components";
import SideBar from '../components/SideBar';
import Dash from './Dash';
import { BrowserRouter as Router} from "react-router-dom";
import TopBar from '../components/TopBar';

const Container=styled.div`
    display: flex;
    margin-top: 10px;
`




function Main() {
  return (<>
        <TopBar></TopBar>
      <Container>
           <SideBar></SideBar>
           <Dash></Dash>
        </Container>
   


        </>
        
  )
}

export default Main