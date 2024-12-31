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
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="/media/pic2.jpeg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              
            </div>
          </div>
          <div class="carousel-item">
            <img src="/media/pic3.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
            </div>
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
                  <a href="">NITA Alumni Meet  2025</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
