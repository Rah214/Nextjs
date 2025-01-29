"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Blogs", link: "/blogs" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close menu on mobile after click
  };

  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
  
    <div className="w-full flex justify-center relative z-[1000]">
      <nav className="max-w-[1140px] w-full items-center px-4 md:px-[15px] flex justify-between flex-wrap bg-white">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="pt-4 md:pt-0">
            <Image
              src="/logo.png"
              width={150}
              height={50}
              alt="Logo"
              priority
            />
          </Link>
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <ul
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-[#e6f7f7] md:bg-transparent transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "block" : "hidden"
          } md:flex flex-wrap gap-4 md:gap-[25px] lg:gap-[32px] pt-[20px] md:pt-0 cursor-pointer font-medium text-[16px] leading-6 z-[1000]`}
        >
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item.link}
                onClick={() => handleLinkClick(item.link)}
                className={`relative inline-block transition-all duration-300 ease-in-out ${
                  activeLink === item.link ? "text-[#1AD4D4] text-[18px] font-bold" : "text-black"
                }`}
              >
                {item.name}

                {/* Underline effect */}
                <span
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1AD4D4] transition-all duration-300 ease-in-out group-hover:w-full"
                ></span>
              </Link>
            </li>
          ))}
          {/* Contact Us Button for Small Screens */}
          <li className="md:hidden mt-4">
            <button className="bg-[#1AD4D4] text-center max-w-[150px] text-white font-semibold leading-6 px-4 py-2 rounded-[6px] w-full">
              Contact Us
            </button>
          </li>
        </ul>

        {/* Contact Us Button for Larger Screens */}
        <div className="hidden md:block mt-4 md:mt-[13px]">
          <button className="bg-[#1AD4D4] hover:bg-[#3c7b7b] text-white font-semibold leading-6 px-4 md:px-[40px] py-2 md:py-[18px] rounded-[6px]">
            Contact Us
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
