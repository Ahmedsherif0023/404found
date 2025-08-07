import React from 'react'
import './Navbar.css';
import Logo from "../../../public/favicon.ico";
import Name from "../../../public/Name.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
            <a href="/">
        <div className="navbar-logo">
            <img src={Logo} alt="Logo" className='Logo'/>
            <img src={Name} alt="Name" className='Name'/>
            
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
            <button className="btn">
                <NavLink to="/contact" >Contact Us</NavLink>
            </button>
        </div>
    </nav>
  )
}

export default Navbar