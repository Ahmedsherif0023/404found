import React from 'react'
import './Navbar.css';
import Logo from "../../../public/assets/Logooo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
            <a href="/">
        <div className="navbar-logo">
            <img src={Logo} alt="Logo" />
            <span>404 Found</span>
        </div>
            </a>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/work">Work</NavLink>
            </li>
            <li>
                <NavLink to="/process">Process</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/careers">Careers</NavLink>
            </li>
        </ul>

        <div className="navbar-btn">
            <a href="/contact" className="btn">Contact Us</a>
        </div>
    </nav>
  )
}

export default Navbar