import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#7CAADC" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="logo">
            <img src="./media/mainlogo.png" style={{ width: "9%" }} alt="logo" />
            <p className="logo-text text-muted fs-6 mx-2">NIT AGARTALA <br/> ALUMNI</p>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"  
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/event">EVENT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/initiative">INITIATIVE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/team">TEAM</Link>
              </li>
              <li className="nav-item" style={{ width: "90%" }}>
                <Link className="nav-link active" href="#">
                  <button className="login-button">Login</button>
                </Link> 
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
