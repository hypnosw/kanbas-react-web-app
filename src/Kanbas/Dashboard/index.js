import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import '../kanbas-styles.css';
import {CourseCard} from "./courseCard";
import "./dashboard.css";

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <div className="wd-page-container">
                <h1>Dashboard</h1>
                <hr/>
                <div className="wd-courses-wrapper">
                    <h2 className="m-2 p-0">Published Courses({courses.length})</h2>
                    <hr/>

                    <div className="wd-cards d-flex col-9 flex-row justify-content-around flex-wrap">
                        {
                            courses.map(
                                course => {
                                    return (<CourseCard course={course} />);
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