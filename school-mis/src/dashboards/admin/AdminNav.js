import React from 'react'
import styled from "styled-components";
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

const Sidebar = styled.div`
  width: 15%;
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;


.sidebarWrapper {
  padding: 20px;
  color: #555;
}

.sidebarMenu {
  margin-bottom: 10px;
}

.sidebarTitle {
  font-size: 13px;
  color: rgb(187, 186, 186);
}

.sidebarList {
  list-style: none;
  padding: 5px;
}

.sidebarListItem {
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
}

.sidebarListItem.active,
.sidebarListItem:hover {
  background-color: rgb(240, 240, 255);
}

.sidebarIcon{
    margin-right: 5px;
    font-size: 20px !important;
}
.link{
  text-decoration: none;
  color: inherit;
}

`

function AdminNav() {
  return (
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
            <Link to="/students" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Students
              </li>
              
            </Link>
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
  )
}

export default AdminNav