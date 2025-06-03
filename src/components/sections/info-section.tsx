"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function InfoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const firstText = "Glide helps developers automate blockchain security and ";
  const spanText = "optimization so they can focus on building great dApps.";
  const secondText =
    "Developers can use our suite of AI-powered tools to optimize, secure, and deploy their applications without sacrificing performance or user experience.";

  const fullText = firstText + spanText + " " + secondText;

  const typedChars = useTransform(
    scrollYProgress,
    [0, 1],
    [0, fullText.length]
  );

  const getCharColor = (index: number) => {
    return scrollYProgress.get() * fullText.length > index
      ? "text-white"
      : "text-white/30";
  };
  return (
    <section ref={sectionRef} id="info" className="py-[140px] px-5">
      <motion.div
        className="max-w-[727px] mx-auto w-full text-2xl md:text-[44px] leading-[114%] -tracking-[2%] space-y-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="font-medium">
          {firstText.split("").map((char, index) => (
            <motion.span
              key={index}
              className={`transition-colors duration-75 ${
                scrollYProgress.get() * fullText.length > index
                  ? "text-white"
                  : "text-white/30"
              }`}
              style={{
                color: useTransform(
                  scrollYProgress,
                  [index / fullText.length, (index + 1) / fullText.length],
                  ["rgba(255,255,255,0.3)", "rgba(255,255,255,1)"]
                ),
              }}
            >
              {char}
            </motion.span>
          ))}
          <span>
            {spanText.split("").map((char, index) => (
              <motion.span
                key={index + firstText.length}
                style={{
                  color: useTransform(
                    scrollYProgress,
                    [
                      (index + firstText.length) / fullText.length,
                      (index + firstText.length + 1) / fullText.length,
                    ],
                    ["rgba(255,255,255,0.3)", "rgba(255,255,255,1)"]
                  ),
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </p>

        <motion.p>
          {secondText.split("").map((char, index) => (
            <motion.span
              key={index + firstText.length + spanText.length + 1}
              style={{
                color: useTransform(
                  scrollYProgress,
                  [
                    (index + firstText.length + spanText.length + 1) /
                      fullText.length,
                    (index + firstText.length + spanText.length + 2) /
                      fullText.length,
                  ],
                  ["rgba(255,255,255,0.3)", "rgba(255,255,255,1)"]
                ),
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
    </section>
  );
}
