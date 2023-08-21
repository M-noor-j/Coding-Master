import React from "react";
import "../css/About.scss";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import coding from "../assets/coding.jpg";
// import seo from "../assets/seo.png"
const About = () => {
  return (
    <>
      <section className="about-section " id="about">
      <div className="bg-blur-gradient w-25 h-25"></div>
        <div className="container">
          <div className="row row-aine">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 ">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">About Coding master</span>
                  <div className="text-white fs-3 fw-bold">
                    We are Creative Tech Enthusiast working since 2015
                  </div>
                </div>
                <div className="text text-white">
                  Coding master works at Css3 Transition since last 3 years. We
                  are here to provide touch notch solution for your website or
                  web application that helps you to make your website look
                  attractive & efficient in handling by creating usefull plugins
                  thats you need.
                </div>
                <div className="text text-white">
                  We are here to serve you next level tutorial that currently in
                  trend to match you with your expertise. Css3 transition is a
                  learning website. where you can find many good quality content
                  related to web development and tutorials about plugins. here
                  we are using html, html5, css, css3, jquery & javascript along
                  with inspirational UI design layout by professionals by using
                  Photoshop and adobe allustrator.
                </div>
              </div>
            </div>

            {/* <!-- Image Column --> */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      title="Rahul Kumar Yadav"
                      className="img-aine"
                      src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
