import {
    PermIdentity,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  //import "./user.css";
  import styled from 'styled-components';
  
  const studentReportWrapper = styled.div`
  
.studentReport {
  flex: 4;
  padding: 20px;
}

.studentReportTitleContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.studentReportAddButton {
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
}

.studentReportContainer {
  display: flex;
  margin-top: 20px;
}

.studentReportShow {
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
}

.studentReportUpdate {
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
}

.studentReportShowTop {
  display: flex;
  align-items: center;
}

.studentReportShowImg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.studentReportShowTopTitle {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.studentReportShowstudentReportname {
  font-weight: 600;
}

.studentReportShowstudentReportTitle {
  font-weight: 300;
}

.studentReportShowBottom{
    margin-top: 20px;
}

.studentReportShowTitle {
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
}

.studentReportShowInfo{
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
}

.studentReportShowIcon{
    font-size: 16px !important;
}

.studentReportShowInfoTitle{
    margin-left: 10px;
}

.studentReportUpdateTitle{
    font-size: 24px;
    font-weight: 600;
}

.studentReportUpdateForm{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.studentReportUpdateItem{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.studentReportUpdateInput{
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
}

.studentReportUpdateRight{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.studentReportUpdateUpload{
    display: flex;
    align-items: center;
}



.studentReportUpdateButton{
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
}
  `
  export default function StudentReport() {
    return (
      <studentReportWrapper className="studentReport">
        <div className="studentReportTitleContainer">
          <h1 className="studentReportTitle">Edit studentReport</h1>
          <Link to="/newstudentReport">
            <button className="studentReportAddButton">Create</button>
          </Link>
        </div>
        <div className="studentReportContainer">
          <div className="studentReportShow">
            <div className="studentReportShowTop">
              {/* <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="studentReportShowImg"
              /> */}
              <div className="studentReportShowTopTitle">
                <span className="studentReportShowstudentReportname">Festus Ribiro</span>
                <span className="studentReportShowstudentReportTitle">Fullstack Developer</span>
              </div>
            </div>
            <div className="studentReportShowBottom">
              <span className="studentReportShowTitle">Report</span>
              <div className="studentReportShowInfo">
                <PermIdentity className="studentReportShowIcon" />
                <span className="studentReportShowInfoTitle">Festo001</span>
              </div>
              <span className="studentReportShowTitle">Aggregate Grade</span>
              <div className="studentReportShowInfo">
                <PermIdentity className="studentReportShowIcon" />
                <span className="studentReportShowInfoTitle"> A </span>
              </div>
              <span className="studentReportShowTitle"> Attendance </span>
              <div className="studentReportShowInfo">
                <PermIdentity className="studentReportShowIcon" />
                <span className="studentReportShowInfoTitle"> 80% </span>
              </div>

            </div>
          </div>
          <div className="studentReportUpdate">
            <span className="studentReportUpdateTitle">Edit</span>
            <form className="studentReportUpdateForm">
              <div className="studentReportUpdateLeft">
                <div className="studentReportUpdateItem">
                  <label>username</label>
                  <input
                    type="text"
                    placeholder="fRibiro"
                    className="studentReportUpdateInput"
                  />
                </div>
                <div className="studentReportUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Festus Ribiro"
                    className="studentReportUpdateInput"
                  />
                </div>
                <div className="studentReportUpdateItem">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="fribiro@gmail.com"
                    className="studentReportUpdateInput"
                  />
                </div>
                <div className="studentReportUpdateItem">
                  <label>Aggregate Grade</label>
                  <input
                    type="text"
                    placeholder=" A "
                    className="studentReportUpdateInput"
                  />
                </div>
                <div className="studentReportUpdateItem">
                  <label>Attendance</label>
                  <input
                    type="text"
                    placeholder=" 100% "
                    className="studentReportUpdateInput"
                  />
                </div>
              </div>
            </form>
            <div className="container">
            <div className="studentReportUpdateRight">
                <div className="studentReportUpdateUpload">
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="studentReportUpdateButton">Update</button>
              </div>
              </div>
          </div>
        </div>
      </studentReportWrapper>
    );
  }
  