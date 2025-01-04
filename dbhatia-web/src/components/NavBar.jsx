import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-blue-400 text-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link to="/" className="text-xl font-bold">Home</Link>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/sectoral-exposure">Sectoral Exposure</Link></li>
            <li><Link to="/knowledge-bank">Knowledge Bank</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
