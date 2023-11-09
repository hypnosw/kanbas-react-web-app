import React, {useEffect, useState} from 'react';
import {HashRouter, Link} from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import {Navigate, Route, Routes} from "react-router";

import './kanbas-styles.css';
import Courses from "./Courses";
import db from "./Database";
import {Provider} from "react-redux";
import store from "./store";
import axios from "axios";



function Kanbas() {

    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState(  {
                                               name: "New Course",
                                               number: "1",
                                               startDate: "2023-01-10",
                                               endDate: "2023-05-15",
                                               department: "D134",
                                               credits: 3
                                           });
    const URL = "http://localhost:4000/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
                       response.data,
                       ...courses,
                   ]);
        setCourse({ name: "" });
    };


    const deleteCourse = async (course) => {
        const response = await axios.delete(
            `${URL}/${course._id}`
        );
        setCourses(courses.filter(
            (c) => c._id !== course));
    };

    const updateCourse =  async(c) => {
        const response = await axios.put(
            `${URL}/${c._id}`,
            course
        );
        console.log(response.data);
        console.log(c.name);
        console.log(course.name);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {

                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return(
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation/>

                <div className="wd-main-content-wrapper">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={            <Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}/>} />
                        <Route path="Courses/:courseId/*" element={<Courses/>} />

                    </Routes>
                </div>
            </div>
        </Provider>


    );
}
export default Kanbas;