import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NabBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  aboutDataOne,
  aboutDataTwo,
  aboutDataThree,
} from "../components/InfoSection/data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NabBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...aboutDataOne} />
      <InfoSection {...aboutDataTwo} />
      <Services />
      <InfoSection {...aboutDataThree} />
      <Footer />
    </>
  );
};

export default Home;
