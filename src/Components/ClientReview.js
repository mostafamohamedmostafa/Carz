import React from "react";
import ClientReview1 from "../images/ClientReview1.jpg";
import ClientReview2 from "../images/ClientReview2.jpg";
import ClientReview3 from "../images/ClientReview3.jpg";
import ClientReview4 from "../images/ClientReview4.jpg";

export const ClientReview = () => {
  const ClientReviewText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan. ";

  return (
    <section className="ClientReviewSection container">
      <h1>SEE WHAT OUR SATISFIED CUSTOMER SAYS</h1>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row row-cols-1 row-cols-md-2 g-0">
              <div className="col ">
                <div className="card h-100">
                  <div className="card-body ClientText">
                    <h1 className="">Client Name</h1>
                    <p className="">{ClientReviewText}</p>
                  </div>
                </div>
              </div>
              <div className="col  WhyUsImage">
                <div className="card h-100">
                  <img
                    src={ClientReview1}
                    className="card-img-top"
                    alt="Mini Service"
                  />
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row row-cols-1 row-cols-md-2  g-0">
              <div className="col ">
                <div className="card h-100">
                  <div className="card-body ClientText">
                    <h1 className="">Client Name</h1>
                    <p className="">{ClientReviewText}</p>
                  </div>
                </div>
              </div>
              <div className="col  WhyUsImage">
                <div className="card h-100">
                  <img
                    src={ClientReview2}
                    className="card-img-top"
                    alt="Mini Service"
                  />
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row row-cols-1 row-cols-md-2  g-0">
              <div className="col ">
                <div className="card h-100">
                  <div className="card-body ClientText">
                    <h1 className="">Client Name</h1>
                    <p className="">{ClientReviewText}</p>
                  </div>
                </div>
              </div>
              <div className="col  WhyUsImage">
                <div className="card h-100">
                  <img
                    src={ClientReview3}
                    className="card-img-top"
                    alt="Mini Service"
                  />
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row row-cols-1 row-cols-md-2  g-0">
              <div className="col ">
                <div className="card h-100">
                  <div className="card-body ClientText">
                    <h1 className="">Client Name</h1>
                    <p className="">{ClientReviewText}</p>
                  </div>
                </div>
              </div>
              <div className="col  WhyUsImage">
                <div className="card h-100">
                  <img
                    src={ClientReview4}
                    className="card-img-top"
                    alt="Mini Service"
                  />
                  <div className="card-body"></div>
                </div>
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
