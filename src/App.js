import React ,{useState,useEffect}from "react";
import Home from "./components/pages/Home";
import Header from "../src/components/Header";
import About from "./components/pages/About"
import Services from "./components/pages/Services";
import Career from "./components/pages/Career"
import Blog from "./components/pages/Blog"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
   setLoading(true)
   setTimeout(()=>{
    setLoading(false)
   },8000)
  },[])
  return (
    <>
       <div 
             style={{
              position: "fixed",
              bottom: "5%",
              right: "5%",
              zIndex: 10,
            }}
        >
          <a
            href=", Muhammad Noor!"
            class="whatsapp-button"
            target="_blank"
            rel="noreferrer"
            style={{ bottom: "15px" }}
          >
            <img
              src="https://i.ibb.co/VgSspjY/whatsapp-button.png"
              alt="whatsapp"
            />
          </a>
        </div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
