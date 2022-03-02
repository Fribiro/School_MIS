import React, { useState }  from 'react';
import { DashContentWrapper, DashWrapper, Sidebar } from '../mainDashboard/Dashboard.style';
import {
    LineStyle,
    Timeline,
    AccountBox,
    DateRange,
    PostAdd,
    BarChart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import TeacherDashLanding from './TeacherDashLanding';

const TeacherDashContainer = () => {
    const [visible, setVisible] = useState(false);

  return (
      <DashWrapper>
          <Sidebar>
              <div className="sidebarWrapper">
                  <div className="sidebarMenu">
                      <h3 className="sidebarTitle">Teacher</h3>
                      <ul className="sidebarList">
                          <Link to="/" className="link">
                              <li className="sidebarListItem active">
                                  <LineStyle className="sidebarIcon" />
                                  Home
                              </li>
                          </Link>
                          <li className="sidebarListItem">
                              <Timeline className="sidebarIcon" />
                              class
                          </li>

                      </ul>
                  </div>
                  <div className="sidebarMenu">
                      <h3 className="sidebarTitle">Quick Menu</h3>
                      <ul className="sidebarList">
                          <Link to="/students" className="link">
                              <li className="sidebarListItem">
                                  <AccountBox className="sidebarIcon" />
                                  Students
                              </li>

                          </Link>
                          <Link to="/users" className="link">
                              <li className="sidebarListItem">
                                  <PostAdd className="sidebarIcon" />
                                  Exams
                              </li>

                          </Link>
                          <Link to="/products" className="link">
                              <li className="sidebarListItem">
                                  <DateRange className="sidebarIcon" />
                                  Attendance
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
              {!visible ? <TeacherDashLanding /> : null}
          </DashContentWrapper>
      </DashWrapper>
  )
}

export default TeacherDashContainer