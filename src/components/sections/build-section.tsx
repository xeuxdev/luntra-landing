"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function WhatYouCanBuildSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Check if mobile and calculate section height
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (sectionRef.current && !isMobile) {
      const contentHeight = items.length * 600; // Approximate height per card + spacing
      setSectionHeight(contentHeight + window.innerHeight);
    } else {
      setSectionHeight(0); // Auto height for mobile
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile]);

  // Transform scroll progress to translate the content (desktop only)
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(items.length - 1) * 500]
  );

  return (
    <section
      ref={sectionRef}
      id="build"
      className="relative max-w-[1330px] mx-auto"
      style={{ height: isMobile ? "auto" : `${sectionHeight}px` }}
    >
      <div
        className={`lg:flex max-lg:space-y-[140px] overflow-x-clip ${
          !isMobile ? "lg:h-[140vh] sticky top-0" : ""
        }`}
      >
        {/* Left side - sticky video */}
        <div className="max-lg:aspect-square lg:w-[1033px] lg:h-[1000px] lg:sticky lg:-left-20 lg:-top-14 lg:z-20 relative">
          <div className="lg:absolute lg:inset-0 size-full ">
            <video
              src="/build.mp4"
              autoPlay
              loop
              muted
              className="size-full object-cover max-lg:size-[567px] max-lg:-mt-20"
            />
          </div>
        </div>

        {/* Right side - scrollable content with gradient overlays (desktop only) */}
        <div
          className={`lg:w-1/2 relative py-[50px] px-5 lg:px-[50px] lg:py-[100px] z-10 ${
            !isMobile ? "lg:overflow-hidden" : ""
          }`}
        >
          {/* Desktop-only gradient overlays */}
          {!isMobile && (
            <>
              {/* Top gradient overlay */}
              <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/60 to-transparent z-50 pointer-events-none" />

              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
            </>
          )}

          <motion.div
            className="space-y-[60px] flex flex-col justify-start"
            style={{ y: !isMobile ? contentY : 0 }}
          >
            <header className="text-[50px] md:text-6xl lg:text-[82px] leading-[90%] max-w-full sm:max-w-[650px] md:max-w-[750px] mx-auto font-medium">
              What you can Build?
            </header>
            <div className="space-y-20">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: isMobile ? 1 : 0.3 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ amount: 0.5 }}
                >
                  <Card
                    tag={item.tag}
                    title={item.title}
                    description={item.description}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
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
