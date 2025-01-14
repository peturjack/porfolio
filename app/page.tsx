import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default page;
