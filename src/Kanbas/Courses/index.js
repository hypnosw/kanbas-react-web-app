import db from "../../Kanbas/Database";
import {Navigate, Route, Routes, useParams, Link, useLocation} from "react-router-dom";
import React from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import '../kanbas-styles.css';
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";



function Courses() {
    const URL = process.env.REACT_APP_SERVER_URL + "/courses";

    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    // console.log(course);
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        // console.log(`Response.data: ${response.data}`);

        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);
    // console.log(`After UseEffect: ${JSON.stringify(course)}`);

    const { pathname } = useLocation();
    const pathArray = pathname.split("/");
    const current = pathArray[pathArray.length -1];
    // console.log("path:" + pathname);

    return (

        <div className="wd-main-wrapper">
            <h1 className="wd-breadcrumb-h1">
                <div className="d-flex align-items-center bg-white">
                    <button className="wd-burger-btn">
                        <GiHamburgerMenu className="wdKanbasRed"/>
                    </button>
                    <nav id="wd-bread" aria-label="breadcrumb">
                        <ol className="breadcrumb m-0 ">
                            <li className="breadcrumb-item " aria-current="page">
                                <Link to={`/Kanbas/Courses/${courseId}`}
                                      className="wdListNoLine wdKanbasRed">
                                    CS {courseId}
                                </Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">{current}</li>
                        </ol>
                    </nav>
                </div>
            </h1>
            <hr/>
            <CourseNavigation/>
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route
                            path="/Assignments/Assignment-editor/:assignmentId/*"
                            element={<AssignmentEditor/>}/>
                        />
                        <Route path="Grades" element={<Grades/>}/>
                        {/*<Route path="/assignment-editor" element={<AssignmentEditor/>}/>*/}

                    </Routes>
                </div>
            </div>


        </div>
    );
}
export default Courses;