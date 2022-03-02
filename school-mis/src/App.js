import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from './components/Homepage';
import Login from './components/auth/Login';
import StudentList from "./dashboards/admin/studentPages/studentList/StudentList";
import Student from "./dashboards/admin/studentPages/student/Student";
import NewStudent from "./dashboards/admin/studentPages/newStudent/newStudent";

import NewReports from "./dashboards/admin/studentPages/newReports/newReports";
import StudentReport from "./dashboards/admin/studentPages/StudentReport/StudentReport";
import StudentsReportsList from "./dashboards/admin/studentPages/StudentsReportsList/StudentsReportsList";
import Dashboard from './dashboard/mainDashboard';
import StudentDashboard from './dashboard/studentDashboard';
import TeacherDashboard from './dashboard/teacherDashboard';

library.add(faArrowRightLong)


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<Student />} />
        <Route path="/newStudent" element={<NewStudent />} />
        <Route path="/newReports" element={<NewReports />} />
        <Route path="/studentsReports/:id" element={<StudentReport />} />
        <Route path="/studentsReports" element={<StudentsReportsList />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

