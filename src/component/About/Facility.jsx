import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Facility = () => {
  const options = {
    rootMargin: "0px 0px -50% 0px",
  };
  const { ref: myRef, inView: myElementVisible } = useInView(options);
  return (
    <div id="facility" className="container-xxl bg-warning ">
      <main className=" bg-warning p-4 facility" id="facility">
        <h1 className={"text-center text-light my-5 "}>Our Facility</h1>
        <div
          className={`${"row justify-content-center align-items-center flex-wrap my-5 overflow-hidden"} ${
            myElementVisible
              ? "animate__animated animate__fadeIn animate__slower"
              : ""
          }`}
          ref={myRef}
        >
          <div className="col-md-8 col-lg-4 col-xl-3 mb-3">
            <div className="card">
              <div class="card-body text-center">
                <img
                  src="https://media.istockphoto.com/id/1313359908/id/foto/rak-buku.jpg?s=612x612&w=0&k=20&c=ER9ylxmKNXp6CWF_Hy92yEva1SLkMYtKNWQrgo4kq4M="
                  class="img-thumbnail border-0 mb-2"
                  alt="..."
                ></img>
                <h5 class="card-title">Library</h5>
                <p class="card-text text-muted">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-4 col-xl-3 mb-3">
            <div className="card">
              <div class="card-body text-center">
                <img
                  src="https://media.istockphoto.com/id/1137939519/photo/young-african-american-programmer-working-on-desktop-pc-in-the-office.jpg?b=1&s=170667a&w=0&k=20&c=zBcgZ6iFfcJJu2n6ZCBB6DVMUoZXq57jTvwj00c9cXM="
                  class="img-thumbnail border-0 mb-2"
                  alt="..."
                ></img>
                <h5 class="card-title">Working Space</h5>
                <p class="card-text text-muted">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-4 col-xl-3 mb-3">
            <div className="card">
              <div class="card-body text-center">
                <img
                  src="https://media.istockphoto.com/id/1346194218/photo/modern-school-girl-distance-learning-and-eating-healthy-snack.jpg?b=1&s=170667a&w=0&k=20&c=vBbOLW3vyTPy2N6y8UhR2aAHR1k98UO4Wlx1tWR5D70="
                  class="img-thumbnail border-0 mb-2"
                  alt="..."
                ></img>
                <h5 class="card-title">Snack</h5>
                <p class="card-text text-muted">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Facility;
