import React from "react";
import {Link} from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#7CAADC" }}
    >
      <div class="container">
        <Link class="navbar-brand" to="/">
        <div className="logo">
          <img
            src="./media/mainlogo.png"
            style={{ width: "9%" }}
            alt="logo"
          />
          <p className=" logo-text text-muted fs-6 mx-2">NIT AGARTALA <br/> ALUMNI</p>
          </div>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"  
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  ABOUT
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/event">
                  EVENT
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/initiative">
                  INITIATIVE
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/team">
                  TEAM
                </Link>
              </li>
              <li class="nav-item" style={{width:"90%"}}>
                <Link class="nav-link active" href="#">
                <button className="button">Register</button>
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
