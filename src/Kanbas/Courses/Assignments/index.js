import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "../../kanbas-styles.css";
import "./index.css";
import {FaPlus} from "react-icons/fa";
import {FaEllipsis} from "react-icons/fa6";


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="mt-3 col-10">
            <div className="d-flex justify-content-between wd-top-buttons">
                <input type="text" className="form-control wd-search-field" placeholder="Search for Assignment"/>
                <div>
                    <button type="button" className="btn wdKanbasBgGray">
                        <FaPlus/>Group
                    </button>
                    <button type="button" className="btn btn-danger">
                        <FaPlus/>Assignment
                    </button>
                    <button type="button" className="btn wdKanbasBgGray">
                        <FaEllipsis/>
                    </button>
                </div>
            </div>
            <hr/>
            <h2 className="wd-assignment-title wdKanbasBgGray
             wdKanbasBorderGray">Assignments for course {courseId}</h2>
            <div className="list-group">
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item wd-assignment-item">
                        <strong>{assignment.title}</strong>
                        <div>
                            <small>
                                <span className="wdKanbasRed">Multiple Modules</span> |
                                Due Sep 18 at 11:59PM | 100 pts
                            </small>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;