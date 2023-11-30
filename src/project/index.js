import Signin from "./users/signin";
import {Routes, Route, Navigate, Link, useLocation} from "react-router-dom";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";
function Project() {
    const {pathname} = useLocation();

    return (
        <div className="row">
            <div className="col-2">
                <nav>
                    <div className="list-group">
                        <Link className={`list-group-item ${pathname.includes("home")? "active" : ""}`}
                              to="/project/home">Home</Link>
                        <Link className={`list-group-item ${pathname.includes("signin")? "active" : ""}`}
                              to="/project/signin">Signin</Link>
                        <Link className={`list-group-item ${pathname.includes("signup")? "active" : ""}`}
                              to="/project/signup">Signup</Link>
                        <Link className={`list-group-item ${pathname.includes("account")? "active" : ""}`}
                              to="/project/account">Account</Link>


                    </div>
                </nav>
            </div>

            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/account/:id" element={<Account />} />
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default Project;