import { Link } from "react-router-dom";
import { React, useState } from "react";
import "../kanbas.css";
function Dashboard({
  addCourse,
  deleteCourse,
  updateCourse,
  courses,
  course,
  setCourse,
}) {
    return (
        <div className="page-content">
          <div className="list-group">
            <h1 className="header">Dashboard</h1>
            <hr/>
            <h4>Published Courses (3)</h4>
            <hr/>
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
            <div className="mb-4">
          <input
            type="text"
            className="form-control d-inline-block mr-2"
            style={{ width: "auto" }}
            placeholder="New Course"
            value={course.name}
            onChange={(event) => {
              setCourse({ ...course, name: event.target.value });
          }}
          />
        <button className="btn btn-success ms-2 me-2" onClick={addCourse}>Add</button>
        <button className="btn btn-primary" onClick={() => updateCourse(course)}>Update</button>
        </div>
      
      <div className="list-group">
        {courses.map((course, index) => (
          <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <Link to={`/Kanbas/Courses/${course._id}`} className="text-dark">
              {course.name}
            </Link>
            <div>
              <button
                className="btn btn-warning me-2"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course);
                }}
              >
                Delete
              </button>
            </div>
          </div>
      ))
} </div>
</div>
</div>
    )}

export default Dashboard;
