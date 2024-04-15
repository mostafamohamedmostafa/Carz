import React from "react";

export const Benefits = () => {
  return (
    <section className="BenefitsSection container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col " data-aos="fade-up" data-aos-duration="1000">

          <div className="card h-100">
            <div className="card-body">
              <h1 className="card-title SpecailTextFont ">30 +</h1>
              <p className="card-text">YEARS OF SERVICE</p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-up" data-aos-duration="1100">
          <div className="card h-100">
            <div className="card-body">
              <h1 className="card-title SpecailTextFont ">9086 +</h1>
              <p className="card-text">HAPPY CUSTOMERS</p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-up" data-aos-duration="1200">
          <div className="card h-100">
            <div className="card-body">
              <h1 className="card-title SpecailTextFont ">5086 +</h1>
              <p className="card-text">CUSTOMER SATISFACTION</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
