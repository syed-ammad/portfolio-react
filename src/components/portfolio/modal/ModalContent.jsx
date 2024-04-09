import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalContent = ({
  name,
  client,
  technologies,
  images,
  urls,
  projectType,
  description,
}) => {
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
          <h3>{name}</h3>
          <p className="project-label">{description}</p>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">{projectType}</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">{client ?? "/"}</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Technologies </span>:{" "}
              <span className="ft-wt-600 uppercase">
                {technologies.join(",")}
              </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              {urls.map((e) => {
                return (
                  <span
                    style={{ marginRight: 5 }}
                    className="ft-wt-600 uppercase"
                  >
                    <a href={e.url} target="_blank" rel="noreferrer">
                      {e.name.toUpperCase() + " "}
                    </a>
                  </span>
                );
              })}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <div style={{ height: 400 }}>
          <Slider {...settings}>
            {images.map((img, i) => {
              return (
                <div key={i} className="slide_item">
                  <img src={img} alt="slide " />
                </div>
              );
            })}
          </Slider>
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalContent;
