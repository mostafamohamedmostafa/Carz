import React from "react";
import Hero1 from "../images/Hero1.jpg";
import Hero2 from "../images/Hero2.jpg";
import Hero3 from "../images/Hero3.jpg";
import Hero4 from "../images/Hero4.jpg";

export const HeroSection = () => {
  const HeroText =
    "Our skilled team of certified technicians is here to provide top-notch car repair and auto services to ensure your vehicle performs at its best. Our skilled team of certified technicians.";
  return (
    <section className="HeroSection">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card text-bg-dark">
              <img src={Hero1} className="card-img" alt="Hero Section Image" />
              <div
                className="card-img-overlay HeroSectionOverLayText "
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <h1 className="card-title tracking-in-contract-bck">AUTOMOTIVE REPAIR MAINTENANCE</h1>
                <p className="card-text  ">{HeroText}</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card text-bg-dark ">
              <img src={Hero2} className="card-img" alt="Hero Section Image" />
              <div
                className="card-img-overlay HeroSectionOverLayText "
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <h1 className="card-title tracking-in-contract-bck">CAR REPAIR & AUTO SERVICES</h1>
                <p className="card-text">{HeroText}</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card text-bg-dark">
              <img src={Hero3} className="card-img" alt="Hero Section Image" />
              <div
                className="card-img-overlay HeroSectionOverLayText"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <h1 className="card-title tracking-in-contract-bck">AUTOMOTIVE REPAIR MAINTENANCE</h1>
                <p className="card-text">{HeroText}</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card text-bg-dark ">
              <img src={Hero4} className="card-img" alt="Hero Section Image" />
              <div
                className="card-img-overlay HeroSectionOverLayText "
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <h1 className="card-title tracking-in-contract-bck">CAR REPAIR & AUTO SERVICES</h1>
                <p className="card-text">{HeroText}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};
