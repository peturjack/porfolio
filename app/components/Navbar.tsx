"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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

  const navLinks = [
    {
      name: "Home",
      href: "#/",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contacts",
    },
  ];
  return (
    <>
      {showNav && (
        <nav className="fixed top-0">
          <div className="w-screen mt-10">
            <ul className="space-x-4 w-[900] rounded-full text-white text-xl p-6 shadow-lg bg-orange-500 flex justify-center mx-auto ">
              {navLinks.map((navLink, index) => {
                return (
                  <Link key={index} href={navLink.href}>
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
