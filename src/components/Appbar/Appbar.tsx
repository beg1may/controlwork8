import {NavLink} from "react-router-dom";
import React from "react";

const Appbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-bg-secondary px-5">
            <div className="container-fluid">
                <span className="navbar-brand">
                    Quotes central
                </span>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/quotes" className="nav-link">Quotes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/add-quote" className="nav-link">Submit new quotes</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Appbar;