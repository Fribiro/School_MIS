import React from 'react'
import styled from "styled-components";
import TopBar from '../../components/TopBar'
import AdminNav from './AdminNav';
import AdminDash from './AdminDash';

const Container=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 98vh;
    overflow-y: hidden;
`
const DashWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 95%;
`

const AdminDashboard = () => {
  return (
      <Container>
      <TopBar></TopBar>
      <DashWrapper>
        <AdminNav></AdminNav>
        <AdminDash></AdminDash>
      </DashWrapper>
           
      </Container>
  )
}

export default AdminDashboard