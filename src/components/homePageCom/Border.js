import React from "react";
import "../css/Border.scss";
const Border = () => {
  const data = [
    {
      title: "9+",
      descriptioon: "years in the software",
    },
    {
      title: "200+",
      descriptioon: "Successfully projects",
    },
    {
      title: "10+",
      descriptioon: "industries",
    },
    {
      title: "110+",
      descriptioon: "Specialists",
    },
  ];
  return (
    <>
      <div className="container mt-5">
        <div className="bg-border rounded">
          <div className="row py-3">
            {data.map((data, index) => (
              <div className="col-lg-2" key={index}>
                <div className="text-border text-white text-center fs-1 fw-bold ">
                  {data.title}
                </div>
                <div className="text-border text-white text-center fs-5 fw-bold">
                  {data.descriptioon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Border;
