import React from "react";
import "../css/Partners.scss";

const Partners = () => {
  const data = [
    {
      img: "https://assets.website-files.com/64793c086c53595014f65e67/64793c77efb5a21674a5f7ba_ankr-logo-vector%201.svg",
    },
    {
      img: "https://assets.website-files.com/64793c086c53595014f65e67/64793c77efb5a21674a5f7af_637d0ad38f6359e235047b60_Certiklogowhite.png",
    },
    {
      img: "https://assets.website-files.com/64793c086c53595014f65e67/64793c77efb5a21674a5f7ae_brand-logo-03.svg",
    },
    {
      img: "https://assets.website-files.com/64793c086c53595014f65e67/64793c78efb5a21674a5f7c3_Google_logo_white_2015-p-500.png",
    },
    {
      img: "https://assets.website-files.com/64793c086c53595014f65e67/64793c77efb5a21674a5f7b5_6455373a91bb145f4f9460bb_HackenProof_web3_blockchain_logo.svg",
    },
    {
      img: "https://assets.website-files.com/64793c086c53595014f65e67/64793c78efb5a21674a5f7c3_Google_logo_white_2015-p-500.png",
    },
  ];
  return (
    <div className="container " style={{marginTop:"10rem"}}>
      <div className="row">
        {/* <div className="col-lg-2 col-sm-6 col-4 d-flex justify-content-center align-items-center">
          <div className="text-expert text-white ">
            Integrations and partners around the world
          </div>
        </div> */}
        {data.map((data, index) => (
          <div className="col-lg-2 col-sm-6 col-4" key={index}>
            <div className="img-d d-flex justify-content-center align-items-center h-100">
              <img src={data.img} className="w-50 " alt="" />
            </div>
          </div>
        ))}
      </div>
   </div>
  );
};

export default Partners;
