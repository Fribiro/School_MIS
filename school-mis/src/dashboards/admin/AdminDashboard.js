import React from 'react'

import styled from "styled-components";
import { BrowserRouter as Router} from "react-router-dom";
import TopBar from '../../components/TopBar'
import AdminNav from './AdminNav';
import AdminDash from './AdminDash';

const Container=styled.div`
    display: flex;
    margin-top: 10px;
`





const AdminDashboard = () => {
  return (
     <>
      <TopBar></TopBar>
      <Container>
        <AdminNav></AdminNav>
        <AdminDash></AdminDash>
           
        </Container>
     </>
  )
}

export default AdminDashboard