import React, {useState} from "react";
import db from "../Database";
import '../kanbas-styles.css';
import {CourseCard} from "./courseCard";
import "./dashboard.css";

function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
                                  name: "New Course",      number: "New Number",
                                  startDate: "2023-09-10", endDate: "2023-12-15",
                              });
    const addNewCourse = () => {
        setCourses([...courses,
                       { ...course,
                           _id: new Date().getTime() }]);
    };

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    c.name = course.name;
                    c.startDate = course.startDate;
                    c.endDate = course.endDate;
                    return course;
                } else {
                    return c;
                }
            })
        );
    };



    return (
        <div>
            <div className="wd-page-container">
                <h1>Dashboard</h1>


                <hr/>
                <div className="wd-courses-wrapper">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="m-2 p-0">Published Courses({courses.length})</h2>
                        <button type="button" className="wd-add-course-btn btn btn-outline-dark" onClick={addNewCourse} >
                            Add
                        </button>
                    </div>
                    <input value={course.name} className="form-control"
                    onChange={(e)=>
                        setCourse({...course, name:e.target.value})}/>
                    <input value={course.number} className="form-control"
                    onChange={(e)=>
                        setCourse({...course, number:e.target.value})}/>
                    <input value={course.startDate} className="form-control" type="date"
                           onChange={(e)=>
                               setCourse({...course, startDate:e.target.value})}/>
                    <input value={course.endDate} className="form-control" type="date"
                           onChange={(e)=>
                               setCourse({...course, endDate:e.target.value})}/>

                    <hr/>

                    <div className="wd-cards d-flex col-9 flex-row justify-content-around flex-wrap">
                        {courses.map(
                                (course) => {
                                    return (<CourseCard course={course} deleteCourse={deleteCourse}
                                    setCourse={setCourse} updateCourse={updateCourse}/>);
                                }
                            )
                        }
                    </div>
                </div>



            </div>

        </div>
    );
}
export default Dashboard;