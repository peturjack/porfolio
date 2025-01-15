"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/app/utils/content";
import { motion } from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className="absolute flex justify-center items-center
       top-10 right-10 bg-orange-500 size-9 sm:size-12 rounded-full md:hidden"
      >
        <GiHamburgerMenu className="text-white size-5 sm:size-6 rounded-full relative md:hidden z-10" />
      </div>
      {showNav && (
        <>
          <nav className="fixed top-0 max-md:hidden">
            <div className="w-screen mt-10">
              <motion.ul
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  transition: { duration: 0.5 },
                  opacity: 1,
                  y: 0,
                }}
                className="space-x-4 md:w-[700] lg:w-[900] 2xl:w-[1200]  rounded-full text-white text-xl p-6 shadow-lg bg-orange-500 flex justify-center mx-auto "
              >
                {navLinks.map((navLink, index) => {
                  return (
                    <Link
                      className="relative text-xl w-fit block after:block
                     after:content-[''] after:absolute after:h-[3px]
                      after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100
                       after:transition after:duration-300 after:origin-center"
                      key={index}
                      href={navLink.href}
                    >
                      {navLink.name}
                    </Link>
                  );
                })}
              </motion.ul>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
