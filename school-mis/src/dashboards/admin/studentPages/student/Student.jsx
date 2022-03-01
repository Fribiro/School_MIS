import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
//import "./user.css";
import styled from 'styled-components';

const StudentWrapper = styled.div`
.Student {
  flex: 4;
  padding: 20px;
}

.StudentTitleContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.StudentAddButton {
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
}

.StudentContainer {
  display: flex;
  margin-top: 20px;
}

.StudentShow {
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
}

.StudentUpdate {
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
}

.StudentShowTop {
  display: flex;
  align-items: center;
}

.StudentShowImg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.StudentShowTopTitle {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.StudentShowStudentname {
  font-weight: 600;
}

.StudentShowStudentTitle {
  font-weight: 300;
}

.StudentShowBottom{
    margin-top: 20px;
}

.StudentShowTitle {
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
}

.StudentShowInfo{
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
}

.StudentShowIcon{
    font-size: 16px !important;
}

.StudentShowInfoTitle{
    margin-left: 10px;
}

.StudentUpdateTitle{
    font-size: 24px;
    font-weight: 600;
}

.StudentUpdateForm{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.StudentUpdateItem{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.StudentUpdateInput{
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
}

.StudentUpdateRight{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.StudentUpdateUpload{
    display: flex;
    align-items: center;
}



.StudentUpdateButton{
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
}
`
export default function Student() {
  return (
    <StudentWrapper className="Student">
      <div className="StudentTitleContainer">
        <h1 className="StudentTitle">Edit Student</h1>
        <Link to="/newStudent">
          <button className="StudentAddButton">Create</button>
        </Link>
      </div>
      <div className="StudentContainer">
        <div className="StudentShow">
          <div className="StudentShowTop">
            {/* <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="StudentShowImg"
            /> */}
            <div className="StudentShowTopTitle">
              <span className="StudentShowStudentname">Festus Ribiro</span>
              <span className="StudentShowStudentTitle">Fullstack Developer</span>
            </div>
          </div>
          <div className="StudentShowBottom">
            <span className="StudentShowTitle">Account Details</span>
            <div className="StudentShowInfo">
              <PermIdentity className="StudentShowIcon" />
              <span className="StudentShowInfoTitle">Festo001</span>
            </div>
            <div className="StudentShowInfo">
              <CalendarToday className="StudentShowIcon" />
              <span className="StudentShowInfoTitle">01.01.1990</span>
            </div>
            <span className="StudentShowTitle">Contact Details</span>
            <div className="StudentShowInfo">
              <PhoneAndroid className="StudentShowIcon" />
              <span className="StudentShowInfoTitle">+254 700123456</span>
            </div>
            <div className="StudentShowInfo">
              <MailOutline className="StudentShowIcon" />
              <span className="StudentShowInfoTitle">festori@gmail.com</span>
            </div>
            <div className="StudentShowInfo">
              <LocationSearching className="StudentShowIcon" />
              <span className="StudentShowInfoTitle">Nairobi| Kenya</span>
            </div>
          </div>
        </div>
        <div className="StudentUpdate">
          <span className="StudentUpdateTitle">Edit</span>
          <form className="StudentUpdateForm">
            <div className="StudentUpdateLeft">
              <div className="StudentUpdateItem">
                <label>Studentname</label>
                <input
                  type="text"
                  placeholder="Fribiro"
                  className="StudentUpdateInput"
                />
              </div>
              <div className="StudentUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Festus Ribiro"
                  className="StudentUpdateInput"
                />
              </div>
              <div className="StudentUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="fribiro@gmail.com"
                  className="StudentUpdateInput"
                />
              </div>
              <div className="StudentUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+254 700123456"
                  className="StudentUpdateInput"
                />
              </div>
              <div className="StudentUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Nairobi | Kenya"
                  className="StudentUpdateInput"
                />
              </div>
            </div>
          </form>
          <div className="container">
          <div className="StudentUpdateRight">
              <div className="StudentUpdateUpload">
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="StudentUpdateButton">Update</button>
            </div>
            </div>
        </div>
      </div>
    </StudentWrapper>
  );
}
