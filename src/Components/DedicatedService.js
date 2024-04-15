import React from "react";
import { DedicatedServiceData } from "./Data";
export const DedicatedService = () => {
  const DedicatedServiceText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan. ";

  return (
    <section className="DedicatedServiceSection container">
      <h1>DEDICATED SERVICES</h1>
      <p>{DedicatedServiceText}</p>
      {DedicatedServiceData.map((DedicatedService, index) => {
        return (
          <div className="card mb-3" data-aos="fade-up" data-aos-duration="1000">
            <div className="row g-0" data-aos="fade-up" data-aos-duration="1100">
              <div className="col-md-6" >
                <img
                  src={DedicatedService.ServiceImage}
                  className="img-fluid rounded-start"
                  alt={DedicatedService.ImageAlt}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title">
                    {DedicatedService.ServiceTitle}
                  </h2>
                  <p className="card-text">{DedicatedService.ServiceDec}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
