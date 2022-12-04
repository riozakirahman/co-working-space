import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav class="navbar  navbar-expand-lg navbar-dark bg-warning  fixed-top">
      <div class="container-xxl">
        <a class="navbar-brand" href="#">
          Working Space
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav  me-2">
            <li class="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#facility">
                Facility
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#booking">
                Booking
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link " href="#location">
                Location
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-light">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
