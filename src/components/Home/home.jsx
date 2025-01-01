import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.css";

export default function home() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/media/pic1.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img src="/media/pic2.jpeg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img src="/media/pic3.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="news-event">
        <h4 className="mt-2 mx-4 mb-3 news">NEWS & EVENTS</h4>
        <div className="row">
          <div className="col-6">
            <div className="news-list-block">
              <div className="news-content">
                <h4 className="news-title">
                  <i class="fa-solid fa-angles-right"></i>&nbsp;
                  <a href="">NITA Alumni Meet 2025</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="alumni-count row">
        <div className="col-3 text-center">
          <i class="fa-regular fa-user" style={{ fontSize: "60px" }}></i>
          <p>
            12200
            <br />
            ALUMNI
          </p>
        </div>
        <div className="col-3 text-center">
          <i class="fa-solid fa-trophy" style={{ fontSize: "60px" }}></i>
          <p>
            10
            <br />
            CENTER
          </p>
        </div>
        <div className="col-3 text-center">
          <i class="fa-solid fa-pen-ruler" style={{ fontSize: "60px" }}></i>
          <p>
            11
            <br />
            DEPARTEMENT
          </p>
        </div>
        <div className="col-3 text-center">
          <i class="fa-solid fa-book" style={{ fontSize: "60px" }}></i>
          <p>
            10
            <br />
            PROGRAMMES
          </p>
        </div>
      </div>
      <div className="social-feed-heading">
        <a href="">SOCIAL MEDIA FEED</a>
      </div>
      <div className="row text-center mt-3">
        <div className="col-4 youtube-video">
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/QySabe3a0O8?si=m2yabDYEV1Od1ftp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-6">
          <h4>Twitter feed</h4>
        </div>
      </div>
      <div className="contact-us">
        <a href="">CONTACT US</a>
      </div>
      <div className="row mt-3 text-center">
      <div className="col-6 map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.3732380301053!2d91.41884467537147!3d23.84087667860872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753ec19aaa69b0d%3A0xf1c683a298e69e7b!2sNational%20Institute%20of%20Technology%20Agartala!5e0!3m2!1sen!2sin!4v1735710921257!5m2!1sen!2sin" width="600" height="450"style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="col-6"></div>
      </div>
    </div>
  );
}
