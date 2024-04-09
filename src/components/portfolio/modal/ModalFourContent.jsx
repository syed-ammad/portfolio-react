import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "./SliderWrapper";

const ModalFourContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
            <h3>KE REALITY - REAL ESTATE</h3>
              <div className="row open-sans-font">
              <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">App</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">/</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Technologies </span>:{" "}
              <span className="ft-wt-600 uppercase">Flutter,Firebase</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a href="/" target="_blank" rel="noreferrer">
                  KE_REALITY
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
            <SliderWrapper images={['img/projects/kE_0.jpg','img/projects/kE_1.jpg','img/projects/kE_2.jpg']} />
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalFourContent;
