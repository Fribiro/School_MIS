import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from './components/Homepage';
import Login from './components/auth/Login';

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
      </Routes>

    </BrowserRouter>
  );
}

export default App;
