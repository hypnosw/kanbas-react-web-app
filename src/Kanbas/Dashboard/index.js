import React, {useState} from "react";
import db from "../Database";
import '../kanbas-styles.css';
import {CourseCard} from "./courseCard";
import "./dashboard.css";

function Dashboard({ courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse }
) {

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