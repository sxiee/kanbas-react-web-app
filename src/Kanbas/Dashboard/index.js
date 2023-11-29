import { Link } from "react-router-dom";
import db from "../Database";
import '../kanbas.css'
function Dashboard() {
    const courses = db.courses;

    return (
        <div className="page-content">
          <div className="list-group">
            <h1 className="header">Dashboard</h1>
            <hr/>
            <h4>Published Courses (3)</h4>
            <div className="cards-container">
            {courses.map((course) => (
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card">
                <div class="card-header bg-primary">
                <div className="action-icons">⋮</div>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{course.number}</h2>
                  <p className="card-text">{course.name}</p>
                  <p className="card-text">{course.endDate}</p>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
      );
}
export default Dashboard;
