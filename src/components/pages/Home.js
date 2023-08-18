import React from "react";
import Hero from "../homePageCom/Hero";
import Services from "../homePageCom/Services";
import Aine from "../homePageCom/Aine";
import ContactForm from "../homePageCom/ContactForm";
import Testimonial from "../homePageCom/Testimonial";
import LetsStart from "../homePageCom/LetsStart";
import WhyShould from "../homePageCom/WhyShould";
import Border from "../homePageCom/Border";
import Partners from "../homePageCom/Partners";
import ServicesApp from "../homePageCom/ServicesApp";
import IndustriesWe from "../homePageCom/IndustriesWe";
const Home = () => {
  return (
    <>
      <Hero />
  
      <Services />
      <Aine />
      {/* <Border /> */}
      <WhyShould />
      {/* <ServicesApp/> */}
      <IndustriesWe/>
      <Partners/>
      <Testimonial />
      <LetsStart />
      <ContactForm />
    </>
  );
};

export default Home;