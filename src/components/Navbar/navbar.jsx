import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaTh } from "react-icons/fa";

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li className="home">
                        <Link to="/" aria-label="Go to Home page">
                            <FaHome />
                        </Link>
                    </li>

                    <li className="dashboard">
                        <Link to="/dashboard" aria-label="Go to Dashboard page">
                            <FaTh />
                        </Link>
                    </li>

                    <li className="profile">
                        <Link to="/profile" aria-label="Go to Profile page">
                            <FaUser />
                        </Link>
                    </li>

                    <li className="login">
                        <Link to="/login" aria-label="Login to your account">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
