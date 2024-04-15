import React from "react";
import ContactFormPic from "../images/ContactFormPic.jpg";
export const ContactForm = () => {
  return (
    <section className="ContactForm container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col " data-aos="fade-up" data-aos-duration="1000">
          <div className="card h-100">
            <div className="card-body">
              <h1 className="card-title">REQUEST FOR A APPOINTMENT</h1>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's stan.
              </p>

              <img className="img-fluid" src={ContactFormPic}></img>
            </div>
          </div>
        </div>

        <div className="col" data-aos="fade-up" data-aos-duration="1200">
          <div className="card h-100">
            <div className="card-body">
              <form className="row g-3">
                <div className="col">
                  <label for="Full name" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    aria-label="Full name"
                  />
                </div>

                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>

                <div className="col-md-6">
                  <label for="PhoneNumber" className="form-label">
                    PhoneNumber
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="PhoneNumber"
                  />
                </div>

                <div className="col-md-6">
                  <label for="CarType" className="form-label">
                    CarType
                  </label>
                  <input type="text" className="form-control" id="CarType" />
                </div>

                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>

                <div className="col-md-6">
                  <label for="inputCity" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                  <label for="inputState" className="form-label">
                    State
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label for="inputZip" className="form-label">
                    Zip
                  </label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>

                <div className="col-12">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                  ></textarea>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
