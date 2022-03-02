import React, { useState } from 'react'
import AdminDash from '../../dashboards/admin/AdminDash';
import StudentList from '../../dashboards/admin/studentPages/studentList/StudentList';
import { DashContentWrapper, DashWrapper, Sidebar } from './Dashboard.style';
import {
  LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,

    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,

    MenuBookOutlined,
  } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { userRoles } from '../../dummyData';

const DashboardContainer = () => {
  const [visible, setVisible] = useState(false);

  return (
      <DashWrapper>
      <Sidebar >
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/" className="link">
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Courses
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              {/* <Link to="/students" className="link" > */}
              <li className="sidebarListItem" onClick={() => {
                setVisible(true);
              }}>
                  <PermIdentity className="sidebarIcon" />
                  Students
                </li>

              {/* </Link> */}
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Teachers
                </li>

              </Link>
              <Link to="/products" className="link">
                <li className="sidebarListItem">
                  <MenuBookOutlined className="sidebarIcon" />
                  Courses
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
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </Sidebar>


      <DashContentWrapper>
        {!visible ? <AdminDash /> : null}
        {visible ? <StudentList /> : null}
      </DashContentWrapper>
      </DashWrapper>
      
  )
}

export default DashboardContainer