import React from "react";
import "./css/Footer.scss";
const Footer = () => {
  return (
    <>
      
  
  
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 ">
              <a href="index.html">
                <div className="fs-2 text-white text-start fw-bold">CODING MASTER</div>
              </a>
              <div className="footer-about">
                <p className="text-white text-start mt-2">
                  Software development company. Coding Master is a top rated web
                  and mobile app development company excelling in design,
                  development and launch of web & mobile apps.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3 col-6 text-center">
              <div className="useful-link">
                <h2 className="text-white ">Useful Links</h2>
                <img
                  src="./assets/images/about/home_line.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="use-links">
                  <li>
                    <a href="index.html">
                      <i className="fa-solid fa-angles-right"></i> Home
                    </a>
                  </li>
                  <li>
                    <a href="about.html">
                      <i className="fa-solid fa-angles-right"></i> About Us
                    </a>
                  </li>
                  <li>
                    <a href="gallery.html">
                      <i className="fa-solid fa-angles-right"></i> Gallery
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <i className="fa-solid fa-angles-right"></i> Contact
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 text-center">
              <div className="social-links">
                <h2 className="text-white">Follow Us</h2>
                <img src="./assets/images/about/home_line.png" alt="" />
                <div className="social-icons">
                  <li>
                    <a href="">
                      <i className="fa-brands fa-facebook-f"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-instagram"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-linkedin-in"></i> Linkedin
                    </a>
                  </li>
                </div>
              </div>
            </div>
            
            <div className="col-md-3 col-6 text-center">
              <div className="address">
                <h2 className="text-white">Address</h2>
                <img
                  src="./assets/images/about/home_line.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="address-links">
                  <li className="address1">
                    <i className="fa-solid fa-location-dot"></i>Pakistan Lahore
                  </li>
                  <li className="address1">
                    <i className="fa-solid fa-location-dot"></i>LONDON,UK
                  </li>
                  {/* <li><a href=""><i className="fa-solid fa-phone"></i> +92 90904500112</a></li>
								   <li><a href=""><i className="fa-solid fa-envelope"></i> mail@1234567.com</a></li> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section id="copy-right">
        <div className="copy-right-sec">
          <i className="fa-solid fa-copyright m-2"></i>
          2023 Coding Master <a href="#">All rights reserved</a>
        </div>
      </section>
    </>
  );
};

export default Footer;
