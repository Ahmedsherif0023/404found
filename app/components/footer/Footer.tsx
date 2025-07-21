import React from "react";
import "./Footer.css";
import Logo from "../../../public/assets/Logooo.png";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
 <div className="footer-container">
       <div className="footer">
         <div className="nav">
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
             <li>
               <NavLink to="/contact"> Contact</NavLink>
             </li>
           </ul>
           <ul className="socials">
               <span className="connected">Stay Connected</span>
               <li> <a href="#"><FaFacebook /></a> </li>
               <li> <a href="#"><FaLinkedin /></a> </li>
               <li> <a href="#"><FaInstagram /></a> </li>
           </ul>
       
         </div>
        
       </div>
    <div className="contact">
           <ul>
               <li><MdEmail /> <span>ahmedsherifoo23@gmail.com</span> </li>
               <li><FaPhoneAlt /> <span>+201274375560</span> </li>
               <li><IoLocationSharp /> <span>Egypt</span> </li>
           </ul>
           <p>
                &copy; 2025 404 Found. All rights reserved. | Designed by Ahmed Sherif
           </p>
         </div>
 </div>

  );
};

export default Footer;
