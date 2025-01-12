"use client";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <>
      <main className="bg-gradient-to-r from-slate-900 to-slate-700 text-white min-h-screen text-center flex items-center justify-center w-full overflow-hidden">
        <motion.section
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          className="space-y-4 "
        >
          <h1 className="text-7xl">Pétur Hilmarsson</h1>
          <h2 className=" text-4xl">Frontend Developer</h2>
          <p className="w-[500] mx-auto text-xl">
            Crafting beautiful and performant web experiences with modern
            technologies
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-orange-500/20 border-2 border-orange-500 py-2 px-4 rounded">
              Get in Touch
            </button>
            <button className=" border-2 border-orange-500 py-2 px-4 rounded">
              View Projects
            </button>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default Hero;
