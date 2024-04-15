import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";
import { GiLinkedRings } from "react-icons/gi";
import Navlogo from "../images/Navlogo.gif";
import { Link, Route, Routes } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="FooterSection container-fluid text-center">
      <div className="row row-cols-1 row-cols-md-3 g-2">
        <div className="col " data-aos="fade-up" data-aos-duration="1000">
          <div className="card h-100">
            <a className="navbar-brand" href="#">
              <img
                src={Navlogo}
                alt="Logo"
                width="64"
                height="64"
                class="d-inline-block "
              />
              Carz
            </a>

            <div className="card-body">
              <p className="card-title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's stan. Lorem Ipsum
                is.
              </p>
              <h1 className="card-title">
                <BsTelephonePlus />
                <a href="tel:01110457203">01110457203</a>
              </h1>
            </div>
          </div>
        </div>

        <div className="col " data-aos="fade-up" data-aos-duration="1400">
          <div className="card h-100">
            <h3>Quick Links</h3>

            <div className="card-body">
   
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link className="nav-link  " aria-current="page" to="Carz">
                  <GiLinkedRings />  Carz
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link
                    className="nav-link  "
                    aria-current="page"
                    to="AboutUsPage"
                  >
                    <GiLinkedRings /> AboutUsPage
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link
                    className="nav-link  "
                    aria-current="page"
                    to="ServicePage"
                  >
                  <GiLinkedRings />   ServicePage
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link
                    className="nav-link  "
                    aria-current="page"
                    to="PricingPage"
                  >
                  <GiLinkedRings />   PricingPage
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link
                    className="nav-link  "
                    aria-current="page"
                    to="TeamMemberPage"
                  >
                  <GiLinkedRings />   TeamMemberPage
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col " data-aos="fade-up" data-aos-duration="1400">
          <div className="card h-100">
            <h3>Contact Info</h3>

            <div className="card-body">
              <p className="card-title">
                <AiOutlineCheckCircle /> Feature One
              </p>
              <p className="card-title">
                <AiOutlineCheckCircle /> Feature Two
              </p>
              <p className="card-title">
                <AiOutlineCheckCircle /> Feature Three
              </p>
              <p className="card-title">
                <AiOutlineCheckCircle /> Feature Four
              </p>
              <p className="card-title">
                <AiOutlineCheckCircle /> Feature Five
              </p>
              <p className="card-title">
                <AiOutlineCheckCircle /> Feature Six
              </p>
              <p className="card-title">
                <AiOutlineCheckCircle /> Feature Seven
              </p>
              <p className="card-title">
                <AiOutlineCheckCircle /> Feature Eight
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
