import React from "react";
import { RiTwitterFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { MdFacebook } from "react-icons/md";
import Form from "./Footer/Form";

const Footer = () => {
  return (
    <div class="container">
      <footer class="py-5 ">
        <div class="row justify-content-between">
          <div class="col-6 col-md-2 mb-3">
            <h5>Sitemap</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Facility
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Location
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Contact
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <Form></Form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2022 Working Space. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-dark" href="#">
                <RiTwitterFill
                  style={{ width: "24px", height: "24px" }}
                ></RiTwitterFill>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <FiInstagram
                  style={{ width: "24px", height: "24px" }}
                ></FiInstagram>
              </a>
            </li>
            <li class="ms-3">
              <a
                class="link-dark"
                style={{ width: "24px", height: "24px" }}
                href="#"
              >
                <MdFacebook
                  style={{ width: "24px", height: "24px" }}
                ></MdFacebook>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
