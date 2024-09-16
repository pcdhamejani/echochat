import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">EchoChat</Link>
            <div className="nav-links">
                <Link to="/login" className="nav-item">Login</Link>
                <Link to="/signup" className="nav-item">Sign Up</Link>
            </div>
        </nav>
    )
}