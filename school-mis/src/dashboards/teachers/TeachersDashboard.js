import React from 'react'
import styled from 'styled-components'
import TopBar from '../../components/TopBar'
import TrDash from './TrDash'
import TrNav from './TrNav'


const Container=styled.div`
    display: flex;
    margin-top: 10px;
`

const TeachersDashboard = () => {
  return (
    <>
    <TopBar/>
    
    <Container>
       <TrNav/>
    
       <TrDash/>
    </Container>
    </>
  )
}

export default TeachersDashboard