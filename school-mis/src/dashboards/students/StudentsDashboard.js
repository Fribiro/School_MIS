import React from 'react'
import styled from "styled-components";
import TopBar from '../../components/TopBar'


import StudNav from '../students/StudNav'
import StudDash from '../students/StudDash'

const Container=styled.div`
    display: flex;
    margin-top: 10px;
`
function StudentsDashboard() {
  return (
    <>
    <TopBar/>
    <Container>
       <StudNav/>
    
       <StudDash/>
    </Container>
    </>
  )
}

export default StudentsDashboard