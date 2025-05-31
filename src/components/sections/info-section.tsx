"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function InfoSection() {
  const [typedChars, setTypedChars] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const firstText = "Glide helps developers automate blockchain security and ";
  const spanText = "optimization so they can focus on building great dApps.";
  const secondText =
    "Developers can use our suite of AI-powered tools to optimize, secure, and deploy their applications without sacrificing performance or user experience.";

  const fullText = firstText + spanText + " " + secondText;

  const handleInView = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTypedChars(0);

    let currentChar = 0;
    const interval = setInterval(() => {
      if (currentChar <= fullText.length) {
        setTypedChars(currentChar);
        currentChar++;
      } else {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 10); // 40ms per character
  };

  const getCharColor = (index: number) => {
    return index < typedChars ? "text-white" : "text-white/30";
  };

  return (
    <section id="info" className="py-[140px] px-5">
      <motion.div
        className="max-w-[727px] mx-auto w-full text-2xl md:text-[44px] leading-[114%] -tracking-[2%] space-y-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={handleInView}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="font-medium">
          {firstText.split("").map((char, index) => (
            <motion.span
              key={index}
              className={`transition-colors duration-200 ${getCharColor(
                index
              )}`}
            >
              {char}
            </motion.span>
          ))}
          <span>
            {spanText.split("").map((char, index) => (
              <motion.span
                key={index + firstText.length}
                className={`transition-colors duration-200 ${getCharColor(
                  index + firstText.length
                )}`}
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
              className={`transition-colors duration-200 ${getCharColor(
                index + firstText.length + spanText.length + 1
              )}`}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
    </section>
  );
}
