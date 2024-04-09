import React from "react";
import SliderWrapper from "./SliderWrapper";

const ModalEightContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Rando - Anonymous App</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
                <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">Mobile App</span>
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
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">Flutter,Firebase</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.rando_ivylab"
                  target="_blank"
                  rel="noreferrer"
                >
                  rando app
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
       <SliderWrapper images={['img/projects/rando_1.png', 'img/projects/rando.png','img/projects/rando_1.png']} />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalEightContent;
