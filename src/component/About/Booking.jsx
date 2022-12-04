import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Booking = () => {
  const options = {
    rootMargin: "0px 0px -50% 0px",
  };
  const { ref: myRef, inView: myElementVisible } = useInView(options);

  return (
    <div className="container-xxl  bg-dark" id="booking">
      <main className="p-4" id="booking" ref={myRef}>
        <h1 className="text-center text-light my-5">Book Now</h1>
        <div
          className={`
            ${"row justify-content-center align-items-center flex-wrap my-5 "}
            ${
              myElementVisible
                ? "animate__animated animate__fadeInDown animate__slow"
                : ""
            }
            `}
        >
          <div className="col-md-8 col-lg-4 col-xl-3 mb-3">
            <div className="card">
              <div class="card-body text-center">
                <img
                  src="https://media.istockphoto.com/id/1343501655/photo/2022-calendar-page-on-blue-background-business-planning-appointment-meeting-concept.jpg?b=1&s=170667a&w=0&k=20&c=ggA_LmMoVkt7SWKPqvmYq6AZLT3y45ncBSCEdyXEY-g="
                  class="img-thumbnail border-0 mb-2"
                  alt="..."
                ></img>
                <h5 class="card-title">Book Online</h5>
                <p class="card-text text-muted">
                  Book Us from our whatsapp and schedule your attendance with
                  downpayment
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-4 col-xl-3 mb-3">
            <div className="card">
              <div class="card-body text-center">
                <img
                  src="https://media.istockphoto.com/id/1327611460/photo/interior-of-a-modern-luxurious-open-plan-co-working-office-space.jpg?b=1&s=170667a&w=0&k=20&c=SB-BneiLWB-5AhO-d1BrUMEkNTjzYh89Y_PgpgofHa4="
                  class="img-thumbnail border-0 mb-2"
                  alt="..."
                ></img>
                <h5 class="card-title">Attend your service time</h5>
                <p class="card-text text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, veritatis?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-4 col-xl-3 mb-3">
            <div className="card">
              <div class="card-body text-center">
                <img
                  src="https://media.istockphoto.com/id/1347685599/photo/young-asian-man-with-eyes-closed-enjoying-music-over-headphones-while-relaxing-on-the-sofa-at.jpg?b=1&s=170667a&w=0&k=20&c=NeQDLMcvaWM3C8RpW1S6VE0aGg8CJIXkKvl51EzAqRQ="
                  class="img-thumbnail border-0 mb-2"
                  alt="..."
                ></img>
                <h5 class="card-title">Enjoy our facilities</h5>
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

export default Booking;
