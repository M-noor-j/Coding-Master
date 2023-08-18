import React from "react";
import "../css/LetsStart.scss";
import Button from "../button/Button";
const LetsStart = () => {
  return (
    <>
      <div className="container bg-radient-let rounded mt-5">
        <div className="row py-5 px-4">
          <div className="col-md-6 kk">
            <div className="h1 display-5 fw-bold text-white">
              Let's try our service now!
            </div>
            <div className="text-lets text-white">
              Everything you need to accept card paymentd and <br />
              grow your business anywhere on the planet
            </div>
          </div>
          <div className="col-md-6">
            <div className=" mt-4 btn-let">
              <Button label={"get started"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsStart;
