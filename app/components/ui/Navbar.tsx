"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/app/utils/content";
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
      {showNav && (
        <nav className="fixed top-0">
          <div className="w-screen mt-10">
            <ul className="space-x-4 w-[900] rounded-full text-white text-xl p-6 shadow-lg bg-orange-500 flex justify-center mx-auto ">
              {navLinks.map((navLink, index) => {
                return (
                  <Link
                    className="hover:text-slate-900 duration-200"
                    key={index}
                    href={navLink.href}
                  >
                    {navLink.name}
                  </Link>
                );
              })}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
