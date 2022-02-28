import styled from 'styled-components';
const NewReportsWrapper = styled.div`
.newReports {
  flex: 4;
}

.newReportsForm {
  display: flex;
  flex-wrap: wrap;
}

.newReportsItem {
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
}

.newReportsItem > label {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
}

.newReportsItem > input {
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
}

.newReportsGender > input {
  margin-top: 15px;
}

.newReportsGender>label{
    margin: 10px;
    font-size: 18px;
    color: #555;
}

.newReportsSelect{
    height: 40px;
    border-radius: 5px;
}

.newReportsButton{
    width: 200px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
}
`

export default function NewReports() {
  return (
    <NewReportsWrapper className="newReports">
      <h1 className="newReportsTitle">New Reports</h1>
      <form className="newReportsForm">
        <div className="newReportsItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newReportsItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newReportsItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newReportsItem">
          <label>Aggregate Grade</label>
          <input type="text" placeholder=" A " />
        </div>
        <div className="newReportsItem">
          <label>Attendance</label>
          <input type="text" placeholder=" 100%" />
        </div>

        <div className="newReportsItem">
          <label>Active</label>
          <select className="newReportsSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newReportsButton">Create</button>
      </form>
    </NewReportsWrapper>
  );
}
