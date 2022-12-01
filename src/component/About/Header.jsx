import React from "react";
import "../../css/header.css";

const Header = () => {
  return (
    <header className="container-xxl my-5 p-5" id="header">
      <div className="row justify-content-center ">
        <div className="col-md-7 ">
          <img
            src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            alt=""
            className="img-fluid intro-img rounded-2"
          />
        </div>
        <div className="col-md-5">
          <div className="row justify-content-center">
            <div className="col-xxl-10  p-1 m-0">
              <h1 className="display-3 text-dark text-center text-md-start fw-bold rounded-2">
                Co-Working Space{" "}
                <span className="display-4 text-muted text-md-start">
                  Bekasi
                </span>
              </h1>
            </div>
            <div className="col-xxl-10 p-1 m-0">
              <p className="lead me-0 ms-0  text-center text-md-start">
                Cozy working space for you to have peace in work
              </p>
            </div>
            <div className="col-xxl-10 p-1 m-0 d-flex justify-content-center justify-content-md-start">
              <button type="button" class="btn btn-dark ">
                Visit Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
