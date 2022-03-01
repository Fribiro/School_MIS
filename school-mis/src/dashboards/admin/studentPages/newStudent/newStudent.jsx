import styled from 'styled-components';
const NewStudentWrapper = styled.div`
.newStudent {
  flex: 4;
}

.newStudentForm {
  display: flex;
  flex-wrap: wrap;
}

.newStudentItem {
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
}

.newStudentItem > label {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
}

.newStudentItem > input {
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
}

.newStudentGender > input {
  margin-top: 15px;
}

.newStudentGender>label{
    margin: 10px;
    font-size: 18px;
    color: #555;
}

.newStudentSelect{
    height: 40px;
    border-radius: 5px;
}

.newStudentButton{
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

export default function NewStudent() {
  return (
    <NewStudentWrapper className="newStudent">
      <h1 className="newStudentTitle">New Student</h1>
      <form className="newStudentForm">
        <div className="newStudentItem">
          <label>Studentname</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newStudentItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newStudentItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newStudentItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newStudentItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newStudentItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newStudentItem">
          <label>Gender</label>
          <div className="newStudentGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newStudentItem">
          <label>Active</label>
          <select className="newStudentSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newStudentButton">Create</button>
      </form>
    </NewStudentWrapper>
  );
}
