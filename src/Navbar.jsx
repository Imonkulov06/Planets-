import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <h1 className="navbar-title">THE PLANETS</h1>
                    <ul className="navbar-list">
                        <li className="navbar-links mercury-link">
                            <Link to="mercury" className="navbar-link">
                                mercury
                            </Link>
                        </li>
                        <li className="navbar-links venus-link">
                            <Link to='venus' className="navbar-link">venus</Link>
                        </li>
                        <li className="navbar-links earth-link">
                            <Link to='earth' className="navbar-link">earth</Link>
                        </li>
                        <li className="navbar-links mars-link">
                            <Link to='mars' className="navbar-link">mars</Link>
                        </li>
                        <li className="navbar-links jupiter-link">
                            <Link to='jupiter' className="navbar-link">jupiter</Link>
                        </li>
                        <li className="navbar-links saturn-link">
                            <Link to='saturn' className="navbar-link">saturn</Link>
                        </li>
                        <li className="navbar-links uranus-link">
                            <Link to='uranus' className="navbar-link">uranus</Link>
                        </li>
                        <li className="navbar-links neptune-link">
                            <Link to='neptune' className="navbar-link">neptune</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
