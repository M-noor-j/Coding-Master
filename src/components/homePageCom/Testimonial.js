import React from "react";
import "../css/Testimonial.scss";
const Testimonial = () => {
  
  return (
   
    <>
      <section className="section-testi">
        <div className="container">
          <div className="section-header fs-2">Client Review </div>
          <div className="testimonials">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="single-item">
                    <div className="row ">
                      <div className="col-md-5">
                        <div className="profile">
                          <div className="img-area">
                            <img style={{border:"3px solid white"}} 
                              src="https://cdn.blrankings.com/best-lawyers/lawyer-images/jay-r-bender-42562?t=2021021120230686"
                              alt="edveid"
                            />
                          </div>
                          <div className="bio">
                            <h2>lores</h2>
                            {/* <h4>Web Developer</h4> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="content">
                          <p>
                            <span>
                              <i className="fa fa-quote-left"></i>
                            </span>
                            The Software House has successfully delivered the platform’s MVP. The team collaborates effectively with the client’s internal team using the Agile methodology, Slack, and Google Meet for project management. The Software House’s investment in helping their engineers grow stands out.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="single-item">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile">
                          <div className="img-area">
                            <img style={{border:"3px solid white"}} 
                              src="https://www.jahlaw.com/wp-content/uploads/2018/12/JAM-Headshot-1-520x550.jpg"
                              alt="karl"
                            />
                          </div>
                          <div className="bio">
                            <h2>Kain</h2>
                            {/* <h4>UI/UX Designer</h4> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="content">
                          <p>
                            <span>
                              <i className="fa fa-quote-left"></i>
                            </span>
                            The Software House delivered intuitive designs that exceeded the client’s expectations and generated positive user feedback. The professional team listened to the client’s needs and responded well to feedback. They met with the client daily via Google Meet and communicated openly via Slack.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
