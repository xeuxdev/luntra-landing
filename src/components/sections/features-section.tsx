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
        <h2 className="text-[50px] md:text-6xl lg:text-[82px] leading-[90%] text-center max-w-full sm:max-w-[650px] md:max-w-[750px] mx-auto font-medium">
          Built to help Developers{" "}
          <span className="text-[#FC0609]">build faster</span> with less
          complexity
        </h2>

        <button className="btn primary mx-auto !h-[60px] !md:h-[70px] w-full md:w-fit">
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
              <div className="relative aspect-square lg:absolute lg:size-[504px] lg:left-1/2 lg:-translate-x-1/2 -top-7">
                <video
                  src="/features/ai-transaction.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </div>
              <div className="space-y-4 text-center mt-auto relative z-20">
                <header className="text-3xl md:text-4xl leading-[90%]">
                  ChainSage™ Wallet Intelligence
                </header>
                <p className="text-sm md:text-base/[135%] font-fragment text-white/70">
                  Advanced ML models transform blockchain data into actionable
                  insights. Get transaction summaries, detect MEV attacks,
                  receive Smart Wallet Scores. Instant intelligence for any
                  address.
                </p>
              </div>
            </motion.div>            <div className="w-full space-y-5 flex flex-col lg:h-[641px]">
              <motion.div
                className="w-full py-8 md:py-[50px] px-5 md:px-[30px] card-border rounded-md space-y-6 md:space-y-[46px] flex-1 flex flex-col justify-center min-h-[250px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Icons.fingerPrint className="mx-auto" />

                <div className="space-y-2.5 text-center">
                  <header className="text-3xl md:text-4xl leading-[90%]">
                    MEV Radar Protection
                  </header>
                  <p className="text-sm md:text-base">
                    Graph neural networks predict sandwich attacks before
                    execution. Automatically reorder transactions through
                    private relayer with gas refunds for users.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="w-full py-8 md:py-[50px] px-5 md:px-[30px] card-border rounded-md space-y-6 md:space-y-[46px] relative flex-1 flex items-center justify-center min-h-[220px]"
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
                    AgentX Autonomous Agents
                  </header>
                  <p className="text-sm md:text-base text-white/70">
                    AI agents own addresses and execute strategies without
                    intervention. LangChain frameworks with vector memory manage
                    portfolios, governance, and communication.
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
                Paymaster+ Smart Accounts
              </header>
              <p className="text-sm/[135%] font-fragment text-white/70">
                AI-driven gas policies with account abstraction. Analyze
                behavior to sponsor fees, accept any ERC-20 payments, provide
                dynamic discounts.
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
            <div className="absolute lg:-top-[280px] size-[300px] -top-40 -right-40 lg:size-[548px] sm:-top-32 sm:-right-32 -z-10 lg:-right-[320px] rotate-5">
              <video
                src="/features/implementation-process.mp4"
                className="size-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
            <div className="absolute lg:-bottom-[280px] size-[300px] -bottom-40 -left-40 sm:-left-32 sm:-bottom-32 lg:size-[548px] -z-10 lg:-left-[350px] -rotate-87">
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
                VerifyX ZK Identity
              </header>
              <p className="text-sm md:text-base text-white/70 lg:px-16">
                Zero-knowledge identity verification with privacy preservation.
                Prove credentials without revealing data using Halo2 zkSNARKs
                for instant verification.
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
                Build-to-Earn Incentives
              </header>
              <p className="text-sm md:text-base font-fragment text-white/70">
                Merit-based rewards through automated performance analysis.
                7-day AI evaluation assesses adoption, resilience, innovation
                with tokens and badges.
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
