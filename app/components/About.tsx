"use client";
import Image from "next/image";
import React from "react";
import img from "@/public/portfolio.png";
import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Image
              src={img}
              alt="John Doe"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            className="md:w-1/2 md:pl-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg mb-6">
              I'm a passionate frontend developer with a keen eye for design and
              a love for creating intuitive, user-friendly web experiences. With
              5 years of experience in the field, I specialize in building
              responsive and performant web applications using modern
              technologies like React, Next.js, and Tailwind CSS.
            </p>
            <p className="text-lg mb-6">
              My journey in web development started with a fascination for how
              things work on the internet. This curiosity led me to dive deep
              into the world of frontend technologies, constantly learning and
              adapting to the ever-evolving landscape of web development.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new web
              technologies, contributing to open-source projects, or sharing my
              knowledge through blog posts and community meetups. I'm always
              excited to take on new challenges and collaborate on innovative
              projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
