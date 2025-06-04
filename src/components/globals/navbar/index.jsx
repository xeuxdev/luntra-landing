"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../../public/logo.svg";
import Image from "next/image";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-[30px] left-0 right-0 z-50">
      <div className="w-full flex justify-center items-center">
        <div className="md:w-auto w-full mx-5  md:h-[72px] h-[70px] px-5 py-[15px] bg-white/10 backdrop-blur-2xl rounded-[40px] flex gap-[60px] justify-between items-center">
          <div className="flex gap-5 items-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0.5C27.665 0.5 35.5 8.33502 35.5 18C35.5 27.665 27.665 35.5 18 35.5C8.33502 35.5 0.5 27.665 0.5 18C0.5 8.33502 8.33502 0.5 18 0.5ZM9.5 18.8174L18.3174 27.6338L27.1338 18.8174L18.3174 10L9.5 18.8174Z"
                fill="#E16B55"
              />
            </svg>

            <nav className="md:flex hidden items-center gap-[30px] text-sm font-medium text-white/90 **:hover:text-white ">
              <Link href="/">Build</Link>
              <Link href="/">Explore</Link>
              <Link href="/">Ecosystem</Link>
              <Link href="/">About</Link>
              <Link href="/">Socials</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 h-10 rounded-[32px] text-base text-white duration-300  bg-white/10 hover:bg-white/20 font-semibold">
              Connect
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-[30px] md:hidden flex bg-white/10 hover:bg-white/20 rounded-md p-2 transition-colors duration-300 ease-in-out"
            >
              {isMenuOpen ? <IoClose /> : <HiMenuAlt4 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[120px] left-0 right-0 mx-5 bg-white/20 backdrop-blur-2xl rounded-[40px] p-6 transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6 text-base font-medium font-author text-[#ffffff]">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Build
          </Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Explore
          </Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Ecosystem
          </Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Socials
          </Link>
        </nav>
      </div>
    </div>
  );
}
