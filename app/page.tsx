import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Project />
    </>
  );
};

export default page;
