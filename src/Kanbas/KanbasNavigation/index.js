import React from "react";
import { Link, useLocation } from "react-router-dom";
import './KanbasNavigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaInbox} from "react-icons/fa";
import {BiHelpCircle, BiHistory, BiLogoCreativeCommons, BiUser} from "react-icons/bi";
import {AiOutlineDashboard} from "react-icons/ai";
import {LiaBookSolid} from "react-icons/lia";
import {BsFillCalendarDayFill} from "react-icons/bs";
import {PiProjectorScreenChartFill} from "react-icons/pi";
import neulogo from "./neu-logo.png";

function KanbasNavigation() {
    // const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox",
    // "History", "Studio", "Commons", "Help"];
    // const icons = [
    //     <BiUser/>, <AiOutlineDashboard/>, <LiaBookSolid/>, <BsFillCalendarDayFill/>, <FaInbox/>,
    //     <BiHistory/>, <SiRstudio/>, <BiLogoCreativeCommons/>, <BiHelpCircle/>
    // ]
    const linksWithIcons = [
        { name: "Account", icon: <BiUser/> },
        { name: "Dashboard", icon: <AiOutlineDashboard /> },
        { name: "Courses", icon: <LiaBookSolid /> },
        { name: "Calendar", icon: <BsFillCalendarDayFill /> },
        { name: "Inbox", icon: <FaInbox /> },
        { name: "History", icon: <BiHistory /> },
        { name: "Studio", icon: <PiProjectorScreenChartFill /> },
        { name: "Commons", icon: <BiLogoCreativeCommons /> },
        { name: "Help", icon: <BiHelpCircle /> }
    ];
    const { pathname } = useLocation();
    return (
        <nav className="list-group wd-nav-menu">
            <Link to="/Kanbas/">
                <img className="wd-neu-logo" src={neulogo} alt="NEU Logo"/>
            </Link>

            {linksWithIcons.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link.name}`}
                    className={`list-group-item
                    ${pathname.includes(link.name) && "active"}`}
                    >
                    {/*<a href="${}"></a>*/}
                    <span className="wd-menu-icons">
                        {link.icon}
                    </span>
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}
export default KanbasNavigation;