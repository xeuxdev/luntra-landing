"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

export function WhatYouCanBuildSection() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <section id="build" className="relative max-w-[1330px] mx-auto">
      <div className="lg:flex max-lg:space-y-[140px] lg:h-[900px] gap-10">
        {/* Left side - video */}
        <div className="max-lg:aspect-square lg:size-[768px] relative">
          <div className="lg:absolute lg:w-[1033px] lg:h-[1000px] size-full lg:-left-20 lg:-top-[100px]">
            <video
              src="/build.mp4"
              autoPlay
              loop
              muted
              className="size-full object-cover max-sm:size-[567px] max-lg:-mt-20"
            />
          </div>
        </div>

        {/* Right side - scrollable content */}
        <div
          className={`lg:w-[478px] z-10 lg:overflow-hidden relative py-[50px] px-5 lg:px-[50px] lg:py-[100px] lg:overflow-y-scroll scrollbar-hide ${
            isMobile ? "" : "vignette-2"
          }`}
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <div className="space-y-[60px] pb-5 flex flex-col justify-start">
            <header className="text-[50px] md:text-6xl lg:text-[82px] leading-[90%] max-w-full sm:max-w-[650px] md:max-w-[750px] mx-auto font-medium">
              What you can Build?
            </header>
            <div className="space-y-20">
              {items.map((item, index) => (
                <Card
                  tag={item.tag}
                  title={item.title}
                  description={item.description}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4 md:space-y-5 lg:space-y-[30px]">
      <div className="space-y-5 font-medium">
        <p className="text-sm md:text-lg lg:text-[27px]/[90%] text-[#f81817]">
          {tag}
        </p>
        <p
          className="text-2xl md:text-[44px]/[90%]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <p className="text-white/70 text-sm md:text-lg/[145%] font-fragment">
        {description}
      </p>

      <button className="btn tertiary">Read More</button>
    </div>
  );
}

const items = [
  {
    tag: "Gaming",
    title: "Level Up Your <br/> Gaming Experience",
    description:
      "Real-time player analytics, front-running protection, AI NPCs, seamless player verification for blockchain games.",
  },
  {
    tag: "Applications",
    title: "Purpose-Built <br/> for Your Application",
    description:
      "User behavior insights, gasless onboarding, automated functionality, privacy-preserving verification for consumer apps.",
  },
  {
    tag: "DeFi",
    title: "Secure, Efficient, <br/> and Fair DeFi Infrastructure",
    description:
      "Sandwich attack prevention, wallet risk scoring, automated strategies, flexible payments, compliant institutional access.",
  },
  {
    tag: "Enterprise",
    title: "Enterprise-Grade <br/> Blockchain Solutions",
    description:
      "Compliant identity management, transaction monitoring, corporate gas policies, automated business processes.",
  },
];
