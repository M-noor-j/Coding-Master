import React from "react";
import "../css/Industries.scss";
import booking from "../assets/booking.png"
import online from "../assets/online.png"
import music from "../assets/music.png"
import inevntor from "../assets/inevntor.png"
import streaming from "../assets/streaming.png"
import Sharing from "../assets/Sharing.png"
import Saas from "../assets/Saas.png"
import location from "../assets/location.png"
import play from "../assets/play.png"

const IndustriesWe = () => {
  const data = [
    {
      title: "Online marketplaces",
      img: online,
    },
    {
      title: "Custom Saas application",
      img: Saas,
    },
    {
      title: "Data visualization dashboard",
      img: music,
    },
    {
      title: "Content sharing platform",
      img: Sharing,
    },
    {
      title: "Location-based apps",
      img: location ,
    },
    {
      title: "on-demand services platforms",
      img: streaming,
    },
    {
      title: "Inventory management systems",
      img: inevntor,
    },
    {
      title: "Online streaming platforms",
      img: play  ,
    },
    {
      title: "Online Booking apps",
      img: booking,
    },
  ];
  return (
    <>
      <div className="container" style={{ marginTop: "5rem" }}>
        <div className="industries-heading text-white fs-2 fw-bold">
          We can build for you
        </div>
        <div className="row ">
          {data.map((data, index) => (
            <div className="col-lg-4 mt-4 " key={index}>
              <div className="row m-1 bg-industries  py-4 rounded">
                <div className="col-2   d-flex align-items-center">
                  <img className="w-100" src={data.img} alt="" />
                </div>
                <div className="col-10   d-flex align-items-center">
                  <div className="text-white fs-5 title-indus fw-bold">
                    {data.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndustriesWe;
