"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SecuritySection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-[100px] px-4 sm:px-5 space-y-10 sm:space-y-[40px] md:space-y-[60px] min-[1440px]:px-20 overflow-x-hidden">
      <div className="space-y-8 sm:space-y-10 md:space-y-12 max-w-full sm:max-w-[750px] md:max-w-[850px] lg:max-w-[950px] mx-auto ">
        <motion.h3
          className="text-[50px] md:text-6xl lg:text-[82px] leading-[90%] text-center max-w-full sm:max-w-[650px] md:max-w-[750px] mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ethereum <br /> DA Security
        </motion.h3>

        <motion.div
          className="relative w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Desktop view - preserved original styling */}
          <div className="hidden md:block absolute -z-10 size-[936px] -top-[122px] left-4">
            <video
              src="/security.mp4"
              autoPlay
              loop
              muted
              className="size-full object-cover"
            />
          </div>

          <div className="hidden md:block absolute w-[950px] h-[690px] top-0">
            <Image src={"/circle.png"} alt="" fill className="" />
          </div>

          <div className="relative z-20 w-full h-full max-h-[794px] space-y-8">
            {/* Mobile metrics in grid layout */}
            <motion.div
              className="md:hidden grid grid-cols-2 gap-4 sm:gap-6 py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 top-1/2 -translate-y-1/2 -z-10 aspect-square">
                <video
                  src="/security.mp4"
                  autoPlay
                  loop
                  muted
                  className="size-full object-cover"
                />
              </div>
              <motion.div
                className="rounded-[20px] p-px bg-[radial-gradient(183.77%_263.78%_at_13.28%_1.18%,rgba(225,_107,_85,_0.4)_0%,rgba(66,_0,_156,_0.4)_49.12%,rgba(225,_107,_85,_0.4)_100%)] h-[190px] overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-background p-4 sm:p-6 flex flex-col justify-between size-full rounded-[20px]">
                  <p className="font-fragment text-lg sm:text-xl text-white/70">
                    TPS
                  </p>
                  <p className="text-2xl sm:text-3xl font-medium tracking-[0%]">
                    600+ on
                    <br />
                    ETH DA
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="rounded-[20px] p-px bg-[radial-gradient(183.77%_263.78%_at_13.28%_1.18%,rgba(225,_107,_85,_0.4)_0%,rgba(66,_0,_156,_0.4)_49.12%,rgba(225,_107,_85,_0.4)_100%)] h-[190px] overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-background p-4 sm:p-6 flex flex-col justify-between size-full rounded-[20px]">
                  <p className="font-fragment text-lg sm:text-xl text-white/70">
                    Blocktime
                  </p>
                  <p className="text-2xl sm:text-3xl font-medium tracking-[0%]">
                    1 second
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="rounded-[20px] p-px bg-[radial-gradient(183.77%_263.78%_at_13.28%_1.18%,rgba(225,_107,_85,_0.4)_0%,rgba(66,_0,_156,_0.4)_49.12%,rgba(225,_107,_85,_0.4)_100%)] h-[190px] overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-background p-4 sm:p-6 flex flex-col justify-between size-full rounded-[20px]">
                  <p className="font-fragment text-lg sm:text-xl text-white/70">
                    Fees
                  </p>
                  <p className="text-2xl sm:text-3xl font-medium tracking-[0%]">
                    $0.0002
                    <br />
                    cents
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="rounded-[20px] p-px bg-[radial-gradient(183.77%_263.78%_at_13.28%_1.18%,rgba(225,_107,_85,_0.4)_0%,rgba(66,_0,_156,_0.4)_49.12%,rgba(225,_107,_85,_0.4)_100%)] h-[190px] overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="bg-background p-4 sm:p-6 flex flex-col justify-between size-full rounded-[20px]">
                  <p className="font-fragment text-lg sm:text-xl text-white/70">
                    DA Security
                  </p>
                  <p className="text-2xl sm:text-3xl font-medium tracking-[0%]">
                    Ethereum
                    <br />
                    4844
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Desktop layout - preserved original styling */}
            <motion.div
              className="hidden md:block w-full h-[690px] relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {" "}
              <motion.div
                className="absolute top-11 left-11 w-[143px] h-[252px] flex justify-between flex-col"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="font-fragment text-2xl text-white/70">TPS</p>
                <p className="text-[40px]/[90%] font-medium tracking-[0%]">
                  600+ on ETH DA
                </p>
              </motion.div>
              <motion.div
                className="absolute top-11 right-11 w-[143px] h-[252px] flex justify-between flex-col"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="font-fragment text-2xl text-white/70">
                  Blocktime
                </p>
                <p className="text-[40px]/[90%] font-medium tracking-[0%] text-right">
                  1 <br /> second
                </p>
              </motion.div>
              <motion.div
                className="absolute bottom-11 right-11 w-[143px] h-[252px] flex justify-between flex-col"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <p className="font-fragment text-2xl text-white/70">
                  DA Security
                </p>
                <p className="text-[40px]/[90%] font-medium tracking-[0%] text-right">
                  Ethereum 4844
                </p>
              </motion.div>
              <motion.div
                className="absolute bottom-11 left-11 w-[143px] h-[252px] flex justify-between flex-col"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="font-fragment text-2xl text-white/70">Fees</p>
                <p className="text-[40px]/[90%] font-medium tracking-[0%]">
                  $0.0002 cents
                </p>
              </motion.div>{" "}
            </motion.div>

            <motion.div
              className="bg-[#E16B551A] w-full h-auto min-h-[60px] sm:min-h-[68px] md:h-[74px] rounded-[20px] py-4 sm:py-5 md:py-6 px-3 sm:px-4 font-normal text-base sm:text-lg -tracking-[4%] text-[#E16B55] text-center flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <span>
                Luntra Infrastructure = parallel + state minimized + native
                account abstraction + native assets
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
