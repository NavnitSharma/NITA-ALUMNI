import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250" }} className="footer">
      <div className="container border-top mt-5">
        <div className="row mt-3">
          <div className="col">
            <img
              src="./media/logo.png"
              style={{ width: "45%" }}
              alt="logo"
            />
            <p className="fs-6 mb-4">
              &copy; 2024 - 2025,
              <br /> All rights reserved.
            </p>
            <div className="icon-container text-muted">
              <i class="fa-brands fa-x-twitter social "></i>
              <i class="fa-brands fa-square-facebook social"></i>
              <i class="fa-brands fa-instagram social"></i>
              <i class="fa-brands fa-linkedin-in social"></i>
            </div>
            <hr/>
            <div className="icon-container-2 text-muted">
              <i class="fa-brands fa-youtube social"></i>
              <i class="fa-brands fa-whatsapp social"></i>
              <i class="fa-brands fa-telegram social"></i>
            </div>
          </div>
          <div className="col">
            <p>SARC</p>
            <a href="" style={{ textDecoration: "none", color: "#8D918D" }}>
              About
            </a>
          </div>
          <div className="col" style={{ textDecoration: "none" }}>
            <p>Support</p>
            <a href="" style={{ textDecoration: "none", color: "#8D918D" }}>
              Contact us
            </a>
            <br></br>
            <a href="" style={{ textDecoration: "none", color: "#8D918D" }}>
              Support portal
            </a>
          </div>
          <div className="col">
            <p>Register</p>
            <a href="" style={{ textDecoration: "none", color: "#8D918D" }}>
              Register yourself
            </a>
            <br></br>
            <a href="" style={{ textDecoration: "none", color: "#8D918D" }}>
              Login
            </a>
          </div>
        </div>
        <div className="mt-5 text-muted text-center" style={{ fontSize: "11px" }}>
        <div className="text-center">
      <p className="text-center">copyrights <i class="fa-regular fa-copyright"></i>&nbsp;2024 Student alumini relation cell (SARC) All rights reserved.<br/>Designed and developed by SARC TEAM</p>
     
      </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
