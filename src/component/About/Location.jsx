import React from "react";
import "../../css/location.css";
import { useInView } from "react-intersection-observer";
const Location = () => {
  const options = {
    rootMargin: "0px 0px -50% 0px",
  };
  const { ref: myRef, inView: myElementVisible } = useInView(options);
  return (
    <div className={`${"container-xxl bg-warning"} `} ref={myRef} id="location">
      <div className="p-4">
        <h1 className="text-center text-light my-5">Location</h1>
        <div className="row justify-content-center align-items-center my-5">
          <div className="col-md-8">
            <div class="mapouter">
              <div
                class={`${"gmap_canvas"} ${
                  myElementVisible
                    ? "animate__animated animate__fadeInDown"
                    : ""
                }`}
              >
                <iframe
                  class="gmap_iframe"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=400&amp;height=300&amp;hl=en&amp;q=Bekasi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <a href="https://formatjson.org/">format json</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
