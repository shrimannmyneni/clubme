import './navbar.css'
import React from 'react'
import { FaHome, FaUser, FaTh } from "react-icons/fa"

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li className="home">
                        <a href="/" aria-label="Go to Home page">
                            <FaHome />
                        </a>
                    </li>

                    <li className="dashboard">
                        <a href="/dashboard" aria-label="Go to Dashboard page">
                            <FaTh />
                        </a>
                    </li>

                    <li className="profile">
                        <a href="/profile" aria-label="Go to Profile page">
                            <FaUser />
                        </a>
                    </li>
                    
                    <li className="login">
                        <a href="/login" aria-label="Login to your account">Login</a>
                    </li>


                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
