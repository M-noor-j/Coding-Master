import React from "react";
import "../css/WhyShould.scss";
import save from "../assets/save.png";
import skills from "../assets/skills.png";
import notepad from "../assets/notepad.png";
import scope from "../assets/scope.png";
import scopep from "../assets/scopep.png";
import log from "../assets/log.png";
const WhyShould = () => {
  const data = [
    {
      img: save,
      cardheading: " 3+ years on the market",
      cardpara:
        " We’ve been delivering working code and awesome solutions since 2019. 90% of our current clients have stayed with us for more than two years.",
    },
    {
      img: skills,
      cardheading: "Talent pool",
      cardpara:
        " There are more than 100+ software engineers on the Coding Master. However, if you need more specialists than are currently available, our skillful People Team is ready to find and hire the top talents for your project.",
    },
    {
      img: notepad,
      cardheading: "Expertise fueled by experience",
      cardpara:
        "More than 80% of Coding Master engineers have been working in the IT industry for over five years. We keep our finger on the pulse of technology trends and employ tried and tested tactics to write error-free code.",
    },
    {
      img: scope,
      cardheading: "Excellent English skills",
      cardpara:
        "Coding Master team members speak English and are able to discuss work-related issues directly. Your project communication is always efficient.",
    },
    {
      img: log,
      cardheading: "Low turnover rate",
      cardpara:
        " Most software engineers work at Coding Master for three years or more. We’ve raised engineers from trainees to system architects in-house. We keep on hiring new IT experts while our dedicated specialists stay with us!",
    },
    {
      img: scopep,
      cardheading: "Transparent processes",
      cardpara:
        "Minimum bureaucracy and maximum efficiency. Detailed agreements and clear security protocols. Coding Master can become your dependable IT team augmentation service provider for years.",
    },
  ];
  return (
    <>
      <div className="container " style={{ marginTop: "5rem" }}>
        <div className="whyshouldheading text-white fs-2 fw-bold">
          Why Should you choose Coding Master
        </div>
        <div className="row mt-5">
          {data.map((data, index) => (
            <div className="col-lg-4 mt-4" key={index}>
              <div className="bg-card bg-success px-3 py-3 h-100 rounded ">
                <img src={data.img} alt="" style={{ width: "60px" }} />
                <div className="card-heading text-white fs-4 fw-bold py-2">
                  {data.cardheading}
                </div>
                <div className="card-p text-white ">{data.cardpara}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyShould;
