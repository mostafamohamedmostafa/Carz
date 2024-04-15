import React from "react";
import { TeamData } from "./Data";
export const Team = () => {
  return (
    <section className="TeamSection container">
      <h1>Our Team</h1>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's stan.
      </p>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {TeamData.map((TeamData, index) => {
          return (
            <div className="col " data-aos="fade-up" data-aos-duration="1000" key={index}>

              <div className="card h-100">
                <img
                  src={TeamData.TeamImage}
                  className="card-img-top"
                  alt={TeamData.ImageAlt}
                />
                <div className="card-body">
                  <h5 className="card-title">{TeamData.TeamMemberName}</h5>
                  <p className="card-text">{TeamData.JobDesc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
