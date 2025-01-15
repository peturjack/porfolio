"use client";
import React from "react";
import { motion } from "motion/react";
import Text from "./typography/Text";
import Link from "next/link";
import ContainerBox from "./ContainerBox";

const Hero = () => {
  return (
    <>
      <main
        className="bg-gradient-to-r from-slate-900 to-slate-700
       text-white min-h-screen text-center flex items-center justify-center
        w-full overflow-hidden"
      >
        <ContainerBox>
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
            <Text type="h1">Pétur Hilmarsson</Text>
            <Text type="h2">Frontend Developer</Text>
            <Text className="max-w-[500] min-w-[250] mx-auto text-pretty text-base md:text-xl">
              Crafting beautiful and performant web experiences with modern
              technologies
            </Text>
            <div className="flex justify-center gap-4">
              <Link href={"#contacts"}>
                <button className="bg-orange-500/20 border-2 border-orange-500 py-2 px-4 rounded hover:scale-105 duration-200">
                  Get in Touch
                </button>
              </Link>
              <Link href={"#projects"}>
                <button className=" border-2 border-orange-500 py-2 px-4 rounded hover:scale-105 duration-200">
                  View Projects
                </button>
              </Link>
            </div>
          </motion.section>
        </ContainerBox>
      </main>
    </>
  );
};

export default Hero;
