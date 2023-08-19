import React from "react";
import "../css/Hero.scss";
import robot from "../assets/robot.png";
import Button from "../button/Button";
const Hero = () => {
  return (
    <>
      <div className="bg-herosec" id="home">
        <div className="container container-hero">
          <div className="wrapper pt-5">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="mt-5">
                  <div className="hero-text fs-5">We Build</div>
                  <div className="hero-heading text-gradient display-5 mt-2 fw-bold fs-1">
                    Agile <span className="heading-span-tag ">Software</span>{" "}
                    <br />
                    Development Teams
                  </div>
                  <div className="text-white mt-3 sercice-hero-text">
                    Artificial Intelligence | Blockchain | React.Js | Angular |
                    Software Development{" "}
                  </div>
                  <div className="btnlinkhero mt-3">
                    <Button label={"Explore more"} />
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center align-items-center life">
                <div className="img-i d-flex justify-content-end align-items-center">
                  <img src={robot} alt="" className="w-100" />
                </div>
                <div className="bg-blur-gradient w-50 h-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
