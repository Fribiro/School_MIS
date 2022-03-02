import React from 'react'
import { DashboardWrapper } from '../mainDashboard/Dashboard.style'
import DashboardTopbar from '../mainDashboard/DashboardTopbar'
import TeacherDashContainer from './TeacherDashContainer'

const TeacherDashboard = () => {
  return (
    <DashboardWrapper>
        <DashboardTopbar />
        <TeacherDashContainer />
    </DashboardWrapper>
  )
}

export default TeacherDashboard