import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import {render } from "react-dom"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from './components/Homepage';
import Login from './components/auth/Login';
//import AdminDashboard from './dashboards/admin/AdminDashboard'
import StudentsDashboard from './dashboards/students/StudentsDashboard';

//import TeachersDashboard from './dashboards/teachers/TeachersDashboard'

library.add(faArrowRightLong)


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-dashboard" element={<StudentsDashboard />} />
        {/* <Route path="/teacher-dashboard" element={<TeachersDashboard />} /> */}
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
      
      </Routes>

    </BrowserRouter>
  );
}

export default App;
