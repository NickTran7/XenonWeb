import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Intro from "./Path/Intro";
import Footer from "./Path/Footer";
import Project from "./Path/Project";
import Skills from "./Path/Skills";
import Contact from "./Path/Contact";
// import logo1 from "/src/public/space-icon.png";
const Home = () => {
  return (
    <div>
      <Intro />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
