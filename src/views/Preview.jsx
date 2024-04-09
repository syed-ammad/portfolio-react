import React from "react";
import { Link } from "react-router-dom";

const previewDemo = [
  {
    img: "dark0",
    title: "Dark Mode (Professional Portfolio)",
    routerPath: "/home-dark",
    delayAnimation: "50",
  },
  {
    img: "light0",
    title: "Light Mode (Classic Portfolio)",
    routerPath: "/home-light",
    delayAnimation: "",
  },
];

const Preview = () => {
  return (
    <div>
      <section className="banner text-center">
        <div className="content">
          <h1>Syed Ammad</h1>
          <h2>Personal Portfolio - Senior Software Engineer</h2>
        </div>
      </section>
      {/* End .banner */}

      <section className="demo dark">
        <div className="container">
          <div className="row">
            {previewDemo.map((val, i) => (
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="content text-center">
                  <div className="bg_container">
                    <Link to={val.routerPath} rel="noreferrer">
                      <img
                        src={`img/intro/${val.img}.png`}
                        alt="demo"
                        className="img-responsive screenshot"
                      />
                    </Link>
                  </div>
                  <h2>{val.title}</h2>
                  <div className="anchor">
                    <h6>
                      <Link
                        className="btn"
                        to={val.routerPath}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Lets Go 🤗
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End .Demo */}

      {/* End footer */}
    </div>
  );
};

export default Preview;
