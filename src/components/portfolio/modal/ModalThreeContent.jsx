import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalThreeContent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Wico NFC</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">APP</span>
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
                <a
                    href="https://appadvice.com/app/wico-digital/1572301737"
                    target="_blank"
                  rel="noreferrer"
                >
                  wico_app
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <Slider {...settings}>
          <div className="slide_item">
            <img src="img/projects/wico_1.png" alt="slide 1" />
          </div>
          <div className="slide_item">
            <img src="img/projects/wico_2.png" alt="slide 2" />
          </div>
          <div className="slide_item">
            <img src="img/projects/wico_0.png" alt="slide 3" />
          </div>
        </Slider>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalThreeContent;
