import React from "react";
import {Link} from "react-router-dom";
// import "./dashboard.css";

export const CourseCard = ({course}) => {
    const cardWidth = {
        width:"250px",
    };

    const wdColorImage = {
        "background-color": "rgb(0, 118, 184)",
        height:"146px",
    };

    return (
        <div className="course-card">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Home`} >
                <div className="card">
                    {/*<img className="card-img-top" src="..." alt="Card image cap"/>*/}
                    <div style={wdColorImage}></div>
                    <div className="card-body">
                        <h5 className="card-title">{course.name}</h5>
                        <p className="card-text">The class starts on: {course.startDate}
                            <br/> ends on: {course.endDate}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}