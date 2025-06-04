"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

// Component for individual character animation
function AnimatedChar({
  char,
  index,
  textProgress,
}: {
  char: string;
  index: number;
  textProgress: MotionValue<number>;
}) {
  const color = useTransform(
    textProgress,
    [index, index + 1],
    ["rgba(255,255,255,0.3)", "rgba(255,255,255,1)"]
  );

  return <motion.span style={{ color }}>{char}</motion.span>;
}

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

  // Create a single transform for character progression
  const textProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, fullText.length]
  );

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
            <AnimatedChar
              key={index}
              char={char}
              index={index}
              textProgress={textProgress}
            />
          ))}
          <span>
            {spanText.split("").map((char, index) => (
              <AnimatedChar
                key={index + firstText.length}
                char={char}
                index={index + firstText.length}
                textProgress={textProgress}
              />
            ))}
          </span>
        </p>
        <motion.p>
          {secondText.split("").map((char, index) => (
            <AnimatedChar
              key={index + firstText.length + spanText.length + 1}
              char={char}
              index={index + firstText.length + spanText.length + 1}
              textProgress={textProgress}
            />
          ))}
        </motion.p>
      </motion.div>
    </section>
  );
}
