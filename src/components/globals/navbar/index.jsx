import Link from "next/link";
import React from "react";
import logo from "../../../../public/svgs/logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-[30px] left-0 right-0 z-50">
      <div className="w-full flex justify-center items-center">
        <div className="  md:h-[72px] h-[70px] px-5 py-[15px] bg-black rounded-[40px] flex gap-[60px] justify-between items-center">
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
          <button className="px-5 h-10 rounded-[32px] font-[family-name:var(--font-author)] text-base text-black  bg-white">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}
