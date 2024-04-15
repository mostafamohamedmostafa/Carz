import React from "react";
import { CLientsServiceData } from "./Data";
export const Clients = () => {
  return (
    <section className="ClientsSection container">
      <h1>TRUSTED CLIENT</h1>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {CLientsServiceData.map((CLientsServiceData, index) => {
          return (
            <div
              className="col "
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
            >
              <div className="card h-100">
                <img
                  src={CLientsServiceData.ClientImage}
                  className="card-img-top img-fluid"
                  alt={CLientsServiceData.ImageALt}
                />
                <div className="card-body">
             
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
