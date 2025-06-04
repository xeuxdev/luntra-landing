"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../ui/icons";

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-[100px] px-4 sm:px-5 space-y-10 sm:space-y-[40px] md:space-y-[60px] min-[1440px]:px-20 max-w-[1280px] mx-auto">
      <motion.div
        className="space-y-6 sm:space-y-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[82px] lg:leading-[90%] text-center max-w-full sm:max-w-[650px] md:max-w-[750px] mx-auto font-medium">
          Built to help Developers{" "}
          <span className="text-[#FC0609]">build faster</span> with less
          complexity
        </h2>

        <button
          className="btn primary mx-auto"
          style={{ width: "220px", height: "70px" }}
        >
          Learn More
        </button>
      </motion.div>

      {/* bento grids */}
      <div className="flex flex-col lg:flex-row gap-5 lg:max-h-[1011px]">
        <div className="w-full lg:flex-[65%] h-full gap-5 flex flex-col">
          <div className="flex flex-col md:flex-row gap-5">
            <motion.div
              className="card-border overflow-hidden w-full md:min-w-[350px] lg:min-w-[460px] lg:h-[641px] rounded-md pb-8 md:pb-[50px] px-5 md:px-7 flex flex-col justify-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square lg:absolute lg:size-[504px] lg:left-1/2 lg:-translate-x-1/2 -top-5">
                <video
                  src="/features/ai-transaction.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </div>
              <div className="space-y-4 text-center mt-auto">
                <header className="text-3xl md:text-4xl leading-[90%]">
                  AI Transaction Guardian
                </header>
                <p className="text-sm md:text-base/[135%] font-fragment text-white/70">
                  Our chain uses OpenAI models to detect MEV patterns,
                  reordering transactions to protect users from sandwich
                  attacks.
                </p>
              </div>
            </motion.div>
            <div className="w-full space-y-5">
              <motion.div
                className="w-full py-8 md:py-[50px] px-5 md:px-[30px] card-border rounded-md space-y-6 md:space-y-[46px] lg:h-[310.5px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Icons.fingerPrint className="mx-auto" />

                <div className="space-y-2.5 text-center">
                  <header className="text-3xl md:text-4xl leading-[90%]">
                    Seamless Access
                  </header>
                  <p className="text-sm md:text-base">
                    Access blockchain apps with Web2 simplicity and Web3
                    security via our account
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="w-full py-8 md:py-[50px] px-5 md:px-[30px] card-border rounded-md space-y-6 md:space-y-[46px] relative h-[220px] sm:h-[250px] md:h-[310.5px] flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src={"/features/selective-privacy.png"}
                  alt="Selective Privacy"
                  className="-z-10 absolute w-full md:w-[715px] h-full md:h-[318px]"
                  fill
                />

                <div className="space-y-2.5 text-center">
                  <header className="text-3xl md:text-4xl leading-[90%]">
                    Selective Privacy
                  </header>
                  <p className="text-sm md:text-base text-white/70">
                    Conduct private transactions while maintaining
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="card-border overflow-hidden bg-black w-full rounded-md p-6 md:p-[50px] flex flex-col md:flex-row-reverse items-center lg:h-[350px] relative gap-10 lg:max-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[200px] md:size-[323px] lg:size-[479px] relative lg:absolute lg:-right-20 xl:-right-10 lg:top-1/2 lg:-translate-y-1/2 shrink-0 z-10">
              <video
                src="/features/smart-gas.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
            <div className="space-y-4 text-center w-full md:max-w-[336px] mt-4 md:mt-0 lg:mr-auto z-20">
              <header className="text-3xl md:text-4xl/[90%]">
                Smart Gas Wizard
              </header>
              <p className="text-sm/[135%] font-fragment text-white/70">
                Our AI gas prediction system analyzes network conditions,
                recommending optimal gas prices to save users 18% on costs
                without sacrificing speed.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:flex-[35%] space-y-5 h-full">
          <motion.div
            className="w-full py-8 md:py-[50px] px-5 md:px-[30px] card-border rounded-md h-[220px] sm:h-[260px] md:h-[300px] lg:h-[310.5px] relative flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-[280px] size-[548px] -z-10 -right-[320px] rotate-5 hidden sm:block">
              <video
                src="/features/implementation-process.mp4"
                className="size-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
            <div className="absolute -bottom-[280px] size-[548px] -z-10 -left-[350px] -rotate-87 hidden sm:block">
              <video
                src="/features/implementation-process.mp4"
                className="size-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
            <div className="space-y-2.5 text-center px-4 md:px-6">
              <header className="text-3xl md:text-4xl">
                Implementation Process
              </header>
              <p className="text-sm md:text-base text-white/70 lg:px-16">
                Our system seamlessly integrates with all OP Stack
              </p>
            </div>
          </motion.div>

          <motion.div
            className="card-border overflow-hidden w-full h-full rounded-md py-8 md:py-12 px-5 md:px-7 flex flex-col gap-8 md:gap-10 lg:h-[680.5px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-center">
              <header className="text-3xl md:text-4xl leading-[90%]">
                Contract Shield
              </header>
              <p className="text-sm md:text-base font-fragment text-white/70">
                Our AI scans smart contract code and transactions for
                vulnerabilities, alerting users to risks before execution.
              </p>
            </div>

            <div className="aspect-square relative">
              <video
                src="/features/contract-shield.mp4"
                className="size-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
