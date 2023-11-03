import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import 'bootstrap';

function Dashboard({
  addCourse,
  deleteCourse,
  updateCourse,
  courses,
  course,
  setCourse,
}) {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Dashboard</h1>
      <hr/>
      <h3 className="mb-3">Published Courses ({courses.length})</h3>
      <hr/>
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
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
