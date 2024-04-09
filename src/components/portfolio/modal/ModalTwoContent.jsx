import React from "react";

const ModalTwoContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>SYED NFT Project Beta</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">Website</span>
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
              <span className="ft-wt-600 uppercase">
                Nextjs,frbse Moralis
              </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://syed-nft.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  syed-nft.vercel.app/
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <a href="https://syed-nft.vercel.app/"  target="_blank">
        <img src="img/projects/syed_nft.png" alt="Portolio" />
        </a>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTwoContent;
