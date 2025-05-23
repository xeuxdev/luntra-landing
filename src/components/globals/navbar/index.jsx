"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../../public/svgs/logo.svg";
import Image from "next/image";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-[30px] left-0 right-0 z-50">
      <div className="w-full flex justify-center items-center">
        <div className="md:w-auto w-full mx-5  md:h-[72px] h-[70px] px-5 py-[15px] bg-black rounded-[40px] flex gap-[60px] justify-between items-center">
          <div className="flex gap-5 items-center">
            <Image src={logo} alt="logo" />
            <nav className="md:flex hidden items-center gap-[30px] text-sm font-medium font-[family-name:var(--font-author)] text-[#ffffff] ">
              <Link href="/">Build</Link>
              <Link href="/">Explore</Link>
              <Link href="/">Ecosystem</Link>
              <Link href="/">About</Link>
              <Link href="/">Socials</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-[30px] md:hidden flex"
            >
              {isMenuOpen ? <IoClose /> : <HiMenuAlt4 />}
            </button>

            <button className="px-5 h-10 rounded-[32px] font-[family-name:var(--font-author)] text-base text-black  bg-white">
              Connect
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[120px] left-0 right-0 mx-5 bg-black rounded-[40px] p-6 transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6 text-base font-medium font-[family-name:var(--font-author)] text-[#ffffff]">
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
