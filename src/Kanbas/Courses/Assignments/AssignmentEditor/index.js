import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="col-11 wd-wrapper">
            <div>
                <h2>Assignment Name</h2>
                <input value={assignment.title}
                       className="form-control mb-2" />
                <input value={assignment.description} className="form-control wd-description-input"/>
            </div>

            <div className="justify-content-end d-flex">
                <div className="col-8 wd-points-assign">
                    <label className="d-flex align-items-center">Points
                        <input className="form-control wd-points-input" value="100"/>
                    </label>
                    <label className="d-flex mt-3 ">
                        Assign
                        <div className="form-control wd-assign-box">
                            <div className="mb-3">
                                <strong>Due</strong>
                                <input type="date" className="form-control"/>
                            </div>
                            <div className="justify-content-between d-flex">
                                <div className="wd-available-from">
                                    <strong>Available from</strong>
                                    <input type="date" className="form-control"/>
                                </div>
                                <div className="wd-available-from">
                                    <strong>Until</strong>
                                    <input type="date" className="form-control"/>
                                </div>
                            </div>
                        </div>
                    </label>

                </div>

            </div>
            <hr/>
            <div className="d-block float-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="btn btn-outline-dark wdKanbasBgGray wdKanbasBorderGray">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger me-2">
                    Save
                </button>
            </div>


        </div>
    );
}


export default AssignmentEditor;