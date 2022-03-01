import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
// import {render } from "react-dom"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from './components/Homepage';
import Login from './components/auth/Login';
//import AdminDashboard from './dashboards/admin/AdminDashboard'
import StudentsDashboard from './dashboards/students/StudentsDashboard';
import StudentList from "./pages/studentList/StudentList";
import Student from "./pages/student/Student";
import NewStudent from "./pages/newStudent/newStudent";

import NewReports from "./pages/newReports/newReports";
import StudentReport from "./pages/StudentReport/StudentReport";
import StudentsReportsList from "./pages/StudentsReportsList/StudentsReportsList";

//import TeachersDashboard from './dashboards/teachers/TeachersDashboard'

library.add(faArrowRightLong)


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route  path="/" element={<Home />}  />
            
            <Route path="/students" element={<StudentList />} />
  
            <Route path="/students/:id" element={<Student />} />
  
            <Route path="/newStudent" element={<NewStudent />} />
  
            <Route path="/newReports" element={<NewReports />} />
  
            <Route path="/studentsReports/:id" element={<StudentReport />} />
  
            <Route path="/studentsReports" element={<StudentsReportsList />} />
        <Route path="/student-dashboard" element={<StudentsDashboard />} />
        {/* <Route path="/teacher-dashboard" element={<TeachersDashboard />} /> */}
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
      
      </Routes>

    </BrowserRouter>
  );
}

export default App;

