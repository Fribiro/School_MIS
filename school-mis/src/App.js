import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
// import {render } from "react-dom"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from './components/Homepage';
import Login from './components/auth/Login';
import AdminDashboard from './dashboards/admin/AdminDashboard'
import StudentsDashboard from './dashboards/students/StudentsDashboard';
import TeachersDashboard from './dashboards/teachers/TeachersDashboard'
import StudentList from './dashboards/admin/studentPages/studentList/StudentList';

library.add(faArrowRightLong)


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<Student />} />
        <Route path="/newStudent" element={<NewStudent />} />
        <Route path="/newReports" element={<NewReports />} />
        <Route path="/studentsReports/:id" element={<StudentReport />} />
        <Route path="/studentsReports" element={<StudentsReportsList />} />
        <Route path="/student-dashboard" element={<StudentsDashboard />} />
        <Route path="/teacher-dashboard" element={<TeachersDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/students" element={<UserList />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

