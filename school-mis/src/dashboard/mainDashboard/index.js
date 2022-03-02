import React from 'react'
import { DashboardWrapper } from './Dashboard.style'
import DashboardContainer from './DashboardContainer'
import DashboardTopbar from './DashboardTopbar'

const Dashboard = () => {
  return (
      <DashboardWrapper>
          <DashboardTopbar />
          <DashboardContainer />
      </DashboardWrapper>
  )
}

export default Dashboard