"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About", url: "/about" },
        { name: "Features", url: "/features" },
        { name: "Works", url: "/works" },
        { name: "Career", url: "/career" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Customer Support", url: "/support" },
        { name: "Delivery Details", url: "/delivery" },
        { name: "Terms & Conditions", url: "/terms" },
        { name: "Privacy Policy", url: "/privacy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Free eBooks", url: "/ebooks" },
        { name: "Development Tutorial", url: "/tutorial" },
        { name: "How To-Blog", url: "/blog" },
        { name: "YouTube Playlist", url: "/youtube" },
      ],
    },
  ];

  const socialLinks = [
    { icon: faFacebookF, url: "https://facebook.com" },
    { icon: faTwitter, url: "https://twitter.com" },
    { icon: faLinkedinIn, url: "https://linkedin.com" },
    { icon: faInstagram, url: "https://instagram.com" },
  ];


  return (
    <footer className="w-full bg-black lg:mt-[152px] md:mt-[100px] mt-[50px] pb-6 px-5 text-white">
      <div className="m-auto max-w-[1140px] md:pt-[92px] pt-[62px]">
        {/* Footer Content */}
        <div className="md:flex md:flex-row flex-col sm:min-w-[562px] min-w-full mx-auto justify-between md:pb-[62px] pb-[32px]">
          <div className="pb-10 md:pb-0">
            <Link href="/">
              <Image
                src="/home.png"
                alt="Home Logo"
                width={136}
                height={38}
                className="w-[136px] h-[38px]"
              />
            </Link>
          </div>

          {footerSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col md:gap-[32px] gap-3 pb-8 md:pb-0"
            >
              <h1 className="md:text-[18px] text-[20px] font-medium leading-[26.1px]">
                {section.title}
              </h1>
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.url}
                  className="md:text-[14px] text-[13px] leading-[21.7px] font-normal text-[#E4E4E7] hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Social Media and Copyright */}
        <div className="max-w-[1140px] mx-auto border-t-2 border-t-white flex flex-col md:flex-row justify-between items-center pt-[24px]">
          <div className="text-[14px] font-normal leading-[21.7px] opacity-[80%]">
            &copy; Copyright 2025, All Rights Reserved by OurHome
          </div>
          <div className="flex mt-4 md:mt-0 space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[18px] hover:text-[#1AD4D4] transition-colors duration-300"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
