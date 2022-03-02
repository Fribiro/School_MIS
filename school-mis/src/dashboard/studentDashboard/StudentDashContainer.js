import React, { useState } from 'react'
import { DashContentWrapper, DashWrapper, Sidebar } from '../mainDashboard/Dashboard.style';
import {
    LineStyle,
    Timeline,
    EventAvailableOutlined,
    DateRange,
    PostAdd,
    BarChart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import StudentDashLanding from './StudentDashLanding';

const StudentDashContainer = () => {
    const [visible, setVisible] = useState(false);

  return (
    <DashWrapper>
        <Sidebar>
              <div className="sidebarWrapper">
                  <div className="sidebarMenu">
                      <h3 className="sidebarTitle">STUDENT</h3>
                      <ul className="sidebarList">
                          <Link to="/" className="link">
                              <li className="sidebarListItem active">
                                  <LineStyle className="sidebarIcon" />
                                  Home
                              </li>
                          </Link>
                          <li className="sidebarListItem">
                              <Timeline className="sidebarIcon" />
                              Performance
                          </li>

                      </ul>
                  </div>
                  <div className="sidebarMenu">
                      <h3 className="sidebarTitle">Quick Menu</h3>
                      <ul className="sidebarList">
                          <Link to="/students" className="link">
                              <li className="sidebarListItem">
                                  <EventAvailableOutlined className="sidebarIcon" />
                                  Attendance
                              </li>

                          </Link>
                          <Link to="/users" className="link">
                              <li className="sidebarListItem">
                                  <PostAdd className="sidebarIcon" />
                                  Results
                              </li>

                          </Link>
                          <Link to="/products" className="link">
                              <li className="sidebarListItem">
                                  <DateRange className="sidebarIcon" />
                                  Schedules
                              </li>
                          </Link>
                          {/* <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li> */}
                          <li className="sidebarListItem">
                              <BarChart className="sidebarIcon" />
                              Reports
                          </li>
                      </ul>
                  </div>


              </div>
        </Sidebar>

        <DashContentWrapper>
            {!visible ? <StudentDashLanding /> : null}
        </DashContentWrapper>
    </DashWrapper>
  )
}

export default StudentDashContainer