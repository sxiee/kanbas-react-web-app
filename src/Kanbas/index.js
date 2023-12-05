import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
<<<<<<< Updated upstream
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
=======
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
function Kanbas() {
    const [courses, setCourses] = useState([]);
    const URL = "http://localhost:4000/api/courses";
    const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
    };
    useEffect(() => {
    findAllCourses();
}, []);
>>>>>>> Stashed changes
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
<<<<<<< Updated upstream
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
=======
  const addCourse = async() => {
    const response = await axios.post(URL, course);
    setCourses([
    response.data,
>>>>>>> Stashed changes
      ...courses,
    ]);
    setCourse({ name: "" });
  };
  const deleteCourse = async (course) => {
    const response = await axios.delete(
<<<<<<< Updated upstream
      `${URL}/${course._id}`
    );
    setCourses(courses.filter((c) => c._id !== course._id));
  };
  const updateCourse = (course) => {
=======
        `${URL}/${course._id}`
    );
    setCourses(courses.filter((c) => c._id !== course._id));
  };
  const updateCourse = async(course) => {
    const response = await axios.put(
        `${URL}/${course._id}`,
        course
        );
>>>>>>> Stashed changes
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  setCourses={setCourses}
                  course={course}
                  setCourse={setCourse}
                  addCourse={addCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
