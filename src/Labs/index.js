import React from 'react';
import Assignment3 from "./a3";
import {Link} from "react-router-dom";
import Nav from "../Nav";
import Assignment4 from "./a4/index";
import {Route, Routes} from "react-router";

function Labs() {
    return(
        <div>
            <Nav/>
            <Routes>
                <Route path="/a3" element={<Assignment3/>}></Route>
                <Route path="/a4" element={<Assignment4/>}></Route>
            </Routes>
        </div>
    );
}
export default Labs;