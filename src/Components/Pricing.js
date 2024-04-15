import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
export const Pricing = () => {
  return (
    <section className="PricingSection container-fluid text-center">
      <h1>PRICING</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's stan. Lorem Ipsum is
        simply dummy text of the printing and typesetting industry.
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col " data-aos="fade-up" data-aos-duration="1000">
          <div className="card h-100">
            <h3>Total Car Care</h3>
            <h1>$299.99</h1>
            <div className="card-body">
            <p className="card-title"><AiOutlineCheckCircle /> Feature One</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Two</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Three</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Four</p>

       
            </div>
          </div>
        </div>
        <div className="col " data-aos="fade-up" data-aos-duration="1100">
          <div className="card h-100 Specail-Card">
            <h3>Performance Enhancement</h3>
            <h1>$699.99</h1>
            <div className="card-body">
            <p className="card-title"><AiOutlineCheckCircle /> Feature One</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Two</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Three</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Four</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Five</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Six</p>

       
            </div>
          </div>
        </div>
        <div className="col " data-aos="fade-up" data-aos-duration="1200">
          <div className="card h-100">
            <h3>Fleet Maintenance</h3>
            <h1>$499.99</h1>
            <div className="card-body">
            <p className="card-title"><AiOutlineCheckCircle /> Feature One</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Two</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Three</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Four</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Five</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Six</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Seven</p>
            <p className="card-title"><AiOutlineCheckCircle /> Feature Eight</p>

       
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
