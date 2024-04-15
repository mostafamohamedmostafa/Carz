import React from "react";
import WhyUsImage from "../images/WhyUsImage.jpg";
export const WhyUsComponent = () => {
  const WhyUsComponentText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan. ";

  return (
    <section className="WhyUsSection container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col ">
          <div className="card h-100">
            <h1 className="">WHY CHOOSE US</h1>
            <p className="">{WhyUsComponentText}</p>

            <div className="card-body">
              <h1 className="SpecailTextFont">CERTIFIED TECHNICIANS</h1>
              <h1 className="SpecailTextFont">COMPREHENSIVE REPAIR SERVICES</h1>
              <h1 className="SpecailTextFont">900 FIVE STAR REVIEWS</h1>
              <h1 className="SpecailTextFont">WARRANTY ON REPAIRS</h1>
              <button className="btn btn-danger">About Us Page</button>
            </div>
          </div>
        </div>
        <div className="col  WhyUsImage">
          <div className="card h-100">
            <img src={WhyUsImage} className="card-img-top" alt="Mini Service" />
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
