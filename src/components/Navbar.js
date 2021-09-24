import React from 'react'
import { Link } from "react-router-dom";

import logo from '../pictures/logo_shipster.png'

import './Navbar.css'

function Navbar() {

  return (
    <nav role="navigation">
      <div className="logo-holder"><Link to="/">
        <img className="navbar--logo" alt="logo" src={logo}/></Link>
      </div>
      <div className="menuToggle">
        <ul className="menu">
          <li className="navbar--link-item"><Link to="/">Home</Link></li>
          <li className="navbar--link-item"><Link to="/result">Cargo ships</Link></li>
          <li className="navbar--link-item"><Link to="/about">About us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar