import Image from "next/image";
import React from "react";

export function PhasesSection() {
  return (
    <section className="py-20 px-5 lg:h-[1092px] max-w-[1300px] mx-auto">
      <div className="size-full relative space-y-14">
        <h4 className="text-3xl sm:text-4xl md:text-6xl lg:text-[82px]/[90%] text-center max-w-full sm:max-w-[650px] md:max-w-[750px] mx-auto font-medium">
          Upcoming Phases
        </h4>

        {/* Mobile view - Stack layout for phases */}
        <div className="flex flex-col space-y-12 lg:hidden">
          {/* Phase 1 - Mobile */}
          <div className="space-y-6">
            <div className="space-y-2.5 text-center">
              <p className="text-sm/[135%] font-fragment text-white/70">
                Phase 1
              </p>
              <p className="text-2xl sm:text-[28px]/[90%] font-medium">
                Conceptualization
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2.5 *:backdrop-blur-2xl">
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Research
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Team Building
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Whitepaper
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Compliance
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Community
              </div>
            </div>
          </div>

          {/* Phase 2 - Mobile */}
          <div className="space-y-6">
            <div className="space-y-2.5 text-center">
              <p className="text-sm/[135%] font-fragment text-white/70">
                Phase 2
              </p>
              <p className="text-2xl sm:text-[28px]/[90%] font-medium">
                Development
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2.5 *:backdrop-blur-2xl">
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Blockchain
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Wallets
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Website
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Testing
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Listings
              </div>
            </div>
          </div>

          {/* Phase 3 - Mobile */}
          <div className="space-y-6">
            <div className="space-y-2.5 text-center">
              <p className="text-sm/[135%] font-fragment text-white/70">
                Phase 3
              </p>
              <p className="text-2xl sm:text-[28px]/[90%] font-medium">
                Launch
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2.5 *:backdrop-blur-2xl">
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Token Sale
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Marketing
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Use Cases
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Education
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Feedback
              </div>
            </div>
          </div>

          <div className="absolute inset-0 w-full h-[1300px] -mt-56 -z-10">
            <Image src={"/phases-2.png"} alt="Upcoming Phases" fill />
          </div>
        </div>

        {/* Desktop view - Original absolute positioning layout */}
        <div className="relative h-full hidden lg:block">
          <div className="absolute inset-0 w-full h-[1300px] -mt-56">
            <Image src={"/phases-2.png"} alt="Upcoming Phases" fill />
          </div>

          <div className="absolute left-10 top-14 max-w-[337px] space-y-[30px]">
            <div className="space-y-2.5 text-right">
              <p className="text-sm/[135%] font-fragment text-white/70">
                Phase 1
              </p>
              <p className="text-[33px]/[90%] font-medium">Conceptualization</p>
            </div>
            <div className="flex justify-end items-center flex-wrap gap-2.5">
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Research
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Team Building
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Whitepaper
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Compliance
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Community
              </div>
            </div>
          </div>

          <div className="absolute right-10 top-64 max-w-[290px] space-y-[30px]">
            <div className="space-y-2.5">
              <p className="text-sm/[135%] font-fragment text-white/70">
                Phase 2
              </p>
              <p className="text-[33px]/[90%] font-medium">Development</p>
            </div>
            <div className="flex items-center flex-wrap gap-2.5">
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Blockchain
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Wallets
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Website
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Testing
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Listings
              </div>
            </div>
          </div>

          <div className="absolute left-32 bottom-48 max-w-[337px] space-y-[30px]">
            <div className="space-y-2.5 text-right">
              <p className="text-sm/[135%] font-fragment text-white/70">
                Phase 3
              </p>
              <p className="text-[33px]/[90%] font-medium">Launch</p>
            </div>
            <div className="flex justify-end items-center flex-wrap gap-2.5">
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Token Sale
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Marketing
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Use Cases
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Education
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Feedback
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
