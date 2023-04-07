import React from "react";
import { Link } from "react-router-dom";


function Nav() {

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/my-courses">My Courses</Link>
            <Link to="/web-concepts">Web Concepts</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/order">Order</Link>
            <Link to="/API">API</Link>
        </nav>
    );
}

export default Nav;