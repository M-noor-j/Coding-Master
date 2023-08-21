import React from "react";
import "../css/Technologies.scss";
import robotic from "../assets/robotic.png";
import blockchain from "../assets/blockchain.png";
import ai from "../assets/ai.png";
import devops from "../assets/devops.png";
import datasci from "../assets/datasci.png";
import iot from "../assets/iot.png";
import seo from "../assets/seo.png";
import angular from "../assets/angular.png";
import android from "../assets/android.png";
import magento from "../assets/magento.png";
const Technologies = () => {
 
  return (
    <>
      <section id="features" className="section-padding w-100">
        <div className="container">
          <div className="section-header text-center ">
            <div className="shape wow fadeInDown"></div>
          </div>
          <div className="row ">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-left">
                <div className="box-item animated wow fadeInLeft">
                  <span className="icon-services">
                    <img src={blockchain} alt="" className="w-100" />
                  </span>
                  <div className="text">
                    <div className="fs-4 fw-bold">Blockchain Web 3</div>
                    <p className="mt-3">
                    We build cutting-edge Blockchain based software products
                    </p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <span className="icon-services">
                    <img src={ai} alt="" className="w-100" />
                  </span>
                  <div className="text">
                    <div className="fs-4 fw-bold">Artificial Intelligence</div>
                    <p className="mt-3">
                    A steady stream of insights is all that you need for better decision-making.
                    </p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInLeft"
                  data-wow-delay="0.9s"
                >
                  <span className="icon-services">
                    <img src={devops} alt="" className="w-100" />
                  </span>
                  <div className="text">
                    <div className="fs-4 fw-bold">DevOps</div>
                    <p className="mt-3">
                    We’ll speed up your deployment, and help you achieve guaranteed higher uptime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 bg-o">
              <div className="show-box animated wow fadeInUp  ">
                {/* <img src={robotic} alt="" /> */}
                <section className="main-container ">
                  <div className="main ">
                    <div className="big-circle">
                      <div className="icon-block p-1 p-1">
                        <img src={blockchain} alt="web design icon" />
                      </div>
                      <div className="icon-block p-1">
                        <img src={ai} alt="game design icon" />
                      </div>
                      <div className="icon-block p-1">
                        <img src={devops} alt="game dev icon" />
                      </div>
                      <div className="icon-block p-1">
                        <img src={datasci} alt="ui-ux icon" />
                      </div>
                    </div>
                    <div className="circle">
                      <div className="icon-block p-1">
                        <img src={seo} alt="app icon" />
                      </div>
                      <div className="icon-block p-2">
                        <img src={magento} alt="blockchain icon" />
                      </div>
                      <div className="icon-block p-1">
                        <img src={android} alt="ar-vr icon" />
                      </div>
                      <div className="icon-block p-2">
                        <img src={angular} alt="artificial intelligence icon" />
                      </div>
                    </div>
                    <div className="center-logo">
                      <div className="fs-4 text-white">Coding Master</div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-right">
                <div className="box-item animated wow fadeInRight">
                  <span className="icon-services">
                    <img src={seo} alt="" className="w-100" />
                  </span>
                  <div className="text text-start">
                    <div className="fs-4 fw-bold">SEO</div>
                    <p className="mt-3">
                    SEO means the process of improving your website to increase its visibility in Google, and other 
                    </p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <span className="icon-services">
                    <img src={datasci} alt="" className="w-100" />
                  </span>
                  <div className="text text-start">
                    <div className="fs-4 fw-bold">Data Science</div>
                    <p className="mt-3">
                    A steady stream of insights is all that you need for better decision-making.
                    </p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInRight"
                  data-wow-delay="0.9s"
                >
                  <span className="icon-services">
                    <img src={iot} alt="" className="w-100" />
                  </span>
                  <div className="text text-start">
                    <div className="fs-4 fw-bold">Internet of things</div>
                    <p className="mt-3 ">
                    Monitor and analyze performance, streamline data flows,  processes & boost customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
