import "./newCourse.css";

export default function NewCourse() {
  return (
    <div className="newCourse">
      <h1 className="addCourseTitle">New Course</h1>
      <form className="addCourseForm">
        <div className="addCourseItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addCourseItem">
          <label>Name</label>
          <input type="text" placeholder="Mathematics" />
        </div>
        
        <div className="addcourseItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addCourseButton">Create</button>
      </form>
    </div>
  );
}
