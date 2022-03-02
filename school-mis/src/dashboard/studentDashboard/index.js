import React from 'react'
import { DashboardWrapper } from '../mainDashboard/Dashboard.style'
import DashboardTopbar from '../mainDashboard/DashboardTopbar'
import StudentDashContainer from './StudentDashContainer'

const StudentDashboard = () => {
  return (
    <DashboardWrapper>
        <DashboardTopbar />
        <StudentDashContainer />
    </DashboardWrapper>
  )
}

export default StudentDashboard