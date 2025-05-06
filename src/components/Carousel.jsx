import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import d1 from "../image/ds1.png";
import d2 from "../image/ds2.jpg";
import d3 from "../image/ds3.jpeg";
import d4 from "../image/d6.webp";

const Carousel = () => {
    

const Carousel = () => {
  useEffect(() => {
    // Bootstrap requires initialization for dynamic components
    const carousel = document.querySelector("#carouselExampleCaptions");
    new window.bootstrap.Carousel(carousel, {
      interval: 3000, // Auto-slide every 3 seconds
      ride: "carousel",
    });
  }, [])};
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
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
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={d4} className=" ci d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h3 >
              Planning an outdoor event? Rain or shine, we've got you
              covered—literally! At <b className="text-primary bg-light">GIBS EVENT PALACE</b>
            </h3>
            <p >PART OF YOUR PARTY</p>
          </div>
        </div>
        <div className=" ci carousel-item">
          <img src={d2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h3 >
              we offer high-quality, durable, and stylish event tents perfect
              for weddings, corporate events, parties, trade shows, and more.
            </h3>
            <p >Weather-Resistant & Durable</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={d3} className="  ci d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h3 >Easy Setup & Customizable Sizes</h3>
            <p >Make your event unforgettable with a tent that stands out! 🌟</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
        <span className="visually-hidden bg-primary">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );

}
export default Carousel;
