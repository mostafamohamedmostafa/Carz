import React from "react";
import MiniService1 from "../images/MiniService1.png";
import MiniService2 from "../images/MiniService2.png";
import MiniService3 from "../images/MiniService3.png";

export const MiniService = () => {
  const MiniServiceText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan. ";
  return (
    <section className="MiniServiceSection container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col " data-aos="fade-up" data-aos-duration="1000">
          <h1 className="SpecailTextFont">01</h1>

          <div className="card h-100">
            <img
              src={MiniService1}
              className="card-img-top"
              alt="Mini Service"
            />
            <div className="card-body">
              <h5 className="card-title">PERFOMANCE CHECK</h5>
              <p className="card-text">{MiniServiceText}</p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-up" data-aos-duration="1100">
          <h1 className="SpecailTextFont">02</h1>
          <div className="card h-100">
            <img
              src={MiniService2}
              className="card-img-top"
              alt="Mini Service"
            />
            <div className="card-body">
              <h5 className="card-title">AUTO REPAIR</h5>
              <p className="card-text">{MiniServiceText}</p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-up" data-aos-duration="1200">
          <h1 className="SpecailTextFont">03</h1>

          <div className="card h-100">
            <img
              src={MiniService3}
              className="card-img-top"
              alt="Mini Service"
            />
            <div className="card-body">
              <h5 className="card-title">FLEET SERVICES</h5>
              <p className="card-text">{MiniServiceText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
