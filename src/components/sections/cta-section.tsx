import Image from "next/image";
import React from "react";

export function CTASection() {
  return (
    <section className="relative overflow-x-clip">
      <div className="lg:h-[727px] py-[150px] px-5 relative overflow-hidden">
        <div className="w-full max-w-[638px] mx-auto gap-10 flex flex-col items-center">
          <div className="space-y-5 text-center">
            <h5 className="text-3xl sm:text-4xl md:text-6xl lg:text-[82px]/[90%] text-center max-w-full sm:max-w-[650px] md:max-w-[750px] mx-auto font-medium">
              Get <span className="text-[#FB0E0F]">Started</span> with Luntra
              Infrastructure <span className="text-[#FB0E0F]">today</span> in
              just 10 seconds
            </h5>
            <p className="text-base/[155%] font-normal font-fragment opacity-70">
              Luntra Infrastructure integrates with a wide range of blockchain
              frameworks and development tools, making it easy to fit into your
              existing dApp workflows and infrastructure.
            </p>
          </div>

          <button className="btn primary">Get Started</button>
        </div>

        <div className="size-[500px] lg:size-[1020px] rotate-z-220 absolute -left-[250px] sm:-left-[200px] sm:-bottom-[150px] -bottom-[100px] lg:-left-[450px] xl:-left-[350px] lg:-bottom-[390px] -z-20">
          <Image src={"/cta.png"} alt="" fill />
        </div>
      </div>

      <div className="size-[500px] lg:size-[1020px] rounded-tr-[300px] sm:rounded-tr-[400px] md:rounded-tr-[450px] lg:rounded-tr-[510px] rotate-y-180 rotate-z-340 absolute -right-[300px] sm:-right-[250px] lg:-right-[533px] -top-[200px] sm:-top-[150px] md:-top-[200px] lg:-top-[565px] -z-20">
        <Image src={"/cta.png"} alt="" fill />
      </div>
    </section>
  );
}
