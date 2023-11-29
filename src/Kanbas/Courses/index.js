import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import db from "../Database";

function Courses() {
    const { courseId } = useParams();
    const location = useLocation();
    const course = db.courses.find((course) => course._id === courseId);
  
    const isHome = location.pathname.endsWith(`/Kanbas/Courses/${courseId}/Home`);
    const isModules = location.pathname.endsWith(`/Kanbas/Courses/${courseId}/Modules`);
  
    let breadcrumb;
    if (isHome) {
      breadcrumb = <span style={{ color: 'black' }}> > Home</span>;
    } else if (isModules) {
      breadcrumb = <span style={{ color: 'black' }}> > Modules</span>;
    }
    return (
      <div>
        <div className="course-header">
          <span style={{ color: 'red' }}>{course.name}</span>
          {breadcrumb}
          <hr/>
        </div>
  
        <div className="course-layout">
          <CourseNavigation />
          <div className="course-content">
            <Routes>
              <Route path="/" element={<Navigate replace to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
  

export default Courses;