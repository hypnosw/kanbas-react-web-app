import React from 'react';
import {HashRouter, Link} from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import {Navigate, Route, Routes} from "react-router";
import HelloWorld from "../Labs/a3/HelloWorld";
import Labs from "../Labs";
import './kanbas-styles.css';
import Courses from "./Courses";




function Kanbas() {
    return(
        <div className="d-flex">
            <KanbasNavigation/>

            <div className="wd-main-content-wrapper">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses/>} />
                </Routes>
            </div>
        </div>

    );
}
export default Kanbas;