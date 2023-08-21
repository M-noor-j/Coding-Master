import React from "react";
import Hero from "../homePageCom/Hero";
import ContactForm from "../homePageCom/ContactForm";
import Testimonial from "../homePageCom/Testimonial";
import LetsStart from "../homePageCom/LetsStart";
import WhyShould from "../homePageCom/WhyShould";
import Partners from "../homePageCom/Partners";
import IndustriesWe from "../homePageCom/IndustriesWe";
import About from "../homePageCom/About";
import Services from "../homePageCom/Services";
import Technologies from "../homePageCom/Technologies"
const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
     <Services/>
     <Technologies/>
     <About/>
      <WhyShould />
      <IndustriesWe />
      <Testimonial />
      <LetsStart />
      <ContactForm />
 </>
  );
};

export default Home;
