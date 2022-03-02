import React, { useState } from 'react'
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
import AdminLanding from './AdminLanding';
import StudentList from './students/StudentList';
import CourseList from './courseList/courseList';

const DashboardContainer = () => {
  const [visible, setVisible] = useState(false);
  const [courses, setCourses] = useState(false);
  const [students, setStudents] = useState(false);
  const [teachers, setTeachers] = useState(false);


  return (
      <DashWrapper>
      <Sidebar >
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active" onClick={() => {
                setVisible(false);
              }}>
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
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
              <li className="sidebarListItem" onClick={() => {
                setVisible(true);
                setStudents(true);
              }}>
                  <PermIdentity className="sidebarIcon" />
                  Students
                </li>
              <li className="sidebarListItem" onClick={() => {
                setVisible(true);
                setTeachers(true);
              }}>
                  <PermIdentity className="sidebarIcon" />
                  Teachers
                </li>
              <li className="sidebarListItem" onClick={() => {
                setVisible(true);
                setCourses(true);
              }}>
                  <MenuBookOutlined className="sidebarIcon" />
                  Courses
                </li>
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
        {!visible ? <AdminLanding /> : null}
        {visible && students && !courses ? <StudentList /> : null}
        {/* {visible && teachers ? <TeacherList /> : null} */}
        {visible && courses && students ? <CourseList/> : null}
      </DashContentWrapper>
      </DashWrapper>
      
  )
}

export default DashboardContainer