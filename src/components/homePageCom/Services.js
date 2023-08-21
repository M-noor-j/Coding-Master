import React from "react";
import "../css/Services.scss";
const Services = () => {
  const data = [
    {
      title: "Mobile App Development",
      img: "https://cdn-icons-png.flaticon.com/512/2210/2210153.png",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },
    {
      title: "Large Scale Web Applications",
      img: "https://i0.wp.com/bradan.co/wp-content/uploads/2017/05/icon-blue-website-design-development.png?fit=256%2C257&ssl=1",
      description:
        "Unleash the full potential of your business with web applications that are geared towards increasing revenue and maximizing profit. From streamlining internal processes to enhancing customer engagement, we design and develop web applications that are not only functional but also visually stunning and aesthetically pleasing.",
    },
    {
      title: "UI and UX Design",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721304.png",
      description:
        "Digital experiences that are truly extraordinary. Using a user-centric approach to design, focusing on understanding the needs and preferences of the end user, and leveraging that understanding to create designs that are truly unique and innovative.",
    },
    {
      title: "Startups and MVP",
      img: "https://www.codistan.org/wp-content/uploads/2023/07/mvp.png",
      description:
        "Outside-the-box solutions for situations where time and resources are limited. Helping startups bring their ideas to life and take their first steps toward success. A truly reliable team for ambitious entrepreneurs.",
    },
    {
      title: "Emerging Tech",
      img: "https://cdn-icons-png.flaticon.com/512/780/780529.png",
      description:
        "Always on the forefront of emerging technology. Staying ahead of the curve with specialized offerings in AI & ML, IoT, Blockchain, Wearables to name a few. Pushing boundaries of what's possible in the realm of emerging tech.",
    },

    {
      title: "Cloud Services",

      img: "https://cdn-icons-png.flaticon.com/512/2345/2345612.png",
      description:
        "Scalable, secure, and cost-effective cloud solutions. Backed by years of expertise on Amazon Web Services, Azure and Google Cloud. From migration to deployment, from Cloud Infrastructure Management to Cloud Backup and Cloud DevOps we have a proven track record of delivering successful cloud projects for clients.",
    },
  ];
  return (
    <>
      <section className="section-services" id="services">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title">
                  Exclusive <span>Services</span>
                </h2>
        
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((data, index) => (
              <div className="col-md-6 col-lg-4 mt-4" key={index}>
                <div className="card-service rounded  py-3 px-3 h-100">
                  <img
                    src={data.img}
                    alt=""
                    className=""
                    style={{ width: "4.5rem" }}
                  />
                  <div className="title-service fs-4 fw-bold text-white mt-3">
                    {data.title}
                  </div>
                  <div className="description-service text-white mt-2">
                    {data.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
