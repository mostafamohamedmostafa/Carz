import React from "react";
import Navlogo from "../images/Navlogo.gif";
import { Link, Route, Routes } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <section className="NavigationSection mb-0 mt-0">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link  " aria-current="page" to="Carz">
                Carz
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link  "
                  aria-current="page"
                  to="AboutUsPage"
                >
                  AboutUsPage
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link  "
                  aria-current="page"
                  to="ServicePage"
                >
                  ServicePage
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link  "
                  aria-current="page"
                  to="PricingPage"
                >
                  PricingPage
                </Link>
              </li>

              
              <li className="nav-item ">
                <Link
                  className="nav-link  "
                  aria-current="page"
                  to="TeamMemberPage"
                >
                  TeamMemberPage
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
