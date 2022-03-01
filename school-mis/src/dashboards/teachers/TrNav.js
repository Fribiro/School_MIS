import React from 'react'
import styled from "styled-components";


import {
    LineStyle,
    Timeline,
    BarChart,
    EventAvailableOutlined,
    DateRange,
    PostAdd,
    AccountBox,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";

const Sidebar = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
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
  font-size: 20px;
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


function TrNav() {
  return (
    <>
    
     <Sidebar >
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
    </>
  )
}

export default TrNav