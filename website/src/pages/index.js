import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NabBar from "../components/Navbar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NabBar toggle={toggle} />
      <h1>Home</h1>
    </>
  );
};

export default Home;
