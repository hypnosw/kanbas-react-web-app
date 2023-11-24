import React from 'react';
import Assignment3 from "./a3";
// import {Link} from "react-router-dom";
import Nav from "../Nav";
import Assignment4 from "./a4/index";
import {Route, Routes} from "react-router";
import store from "./store";
import {Provider} from "react-redux";
import Assignment5 from "./a5";

function Labs() {
    return(
        <Provider store={store}>
            <div>
                <Nav/>
                <Routes>
                    <Route path="/" element={<h1>Pick an option from NavBar</h1>}></Route>
                    <Route path="/a3" element={<Assignment3/>}></Route>
                    <Route path="/a4" element={<Assignment4/>}></Route>
                    <Route path="/a5" element={<Assignment5/>}></Route>
                </Routes>
            </div>
        </Provider>

    );
}
export default Labs;