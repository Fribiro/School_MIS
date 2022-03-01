import "./sidebar.css";
import {
    LineStyle,
    Timeline,
    BarChart,
    DateRange,
    PostAdd,
    AccountBox,
    EventAvailableOutlined ,
  
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">teacher Dashboard</h3>
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
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                < AccountBox className="sidebarIcon" />
                students
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                < PostAdd  className="sidebarIcon" />
                Exams
              </li>
            </Link>
            <li className="sidebarListItem">
              <DateRange className="sidebarIcon" />
              Attendance
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
            
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
         
          </ul>
        </div>
      </div>
    </div>
  );
}
