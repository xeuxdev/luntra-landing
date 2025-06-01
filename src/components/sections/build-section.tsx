import Image from "next/image";
import React from "react";

export function WhatYouCanBuildSection() {
  return (
    <section
      id="build"
      className="py-[50px] px-5 lg:px-0 lg:pr-[100px] relative max-w-[1280px] mx-auto space-y-10 sm:space-y-[40px] md:space-y-[60px] lg:space-y-[100px] lg:pt-[100px] lg:pb-[150px] lg:min-h-[900px] overflow-hidden"
    >
      <div className="size-full flex lg:max-h-[900px] overflow-hidden">
        {/* left */}

        <div className="absolute w-[890px] h-[890px] -left-[100px] -top-32 ">
          <Image src={"/build.png"} alt="What you can build" fill />
        </div>

        <div className="w-[478px] h-[318px] absolute right-[100px] bottom-0 bg-black/40" />

        {/* right */}
        <div className="ml-auto max-w-[478px] relative ">
          <div className="space-y-[60px]">
            <header className="text-[82px]/[90%] font-medium">
              What you can Build?
            </header>

            <div className="space-y-20  ">
              {items.map((item, index) => (
                <Card
                  key={index}
                  tag={item.tag}
                  title={item.title}
                  description={item.description}
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
    <div className="space-y-[30px]">
      <div className="space-y-5 font-medium">
        <p className=" text-[27px]/[90%] text-[#f81817]">{tag}</p>
        <p
          className="text-[44px]/[90%]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <p className="text-white/70 text-lg/[145%] font-fragment">
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
      "Your blockchain gaming platform deserves infrastructure that can keep up with the action. Our rollup chain delivers the speed, security, and simplicity gamers expect.",
  },
  {
    tag: "App-Specific",
    title: "Purpose-Built <br/> for Your Application",
    description:
      "Create a customized blockchain experience tailored to your specific app requirements with infrastructure designed around your use case.",
  },
  {
    tag: "DeFi",
    title: "Secure, Efficient, <br/> and Fair DeFi Infrastructure",
    description:
      "Build DeFi applications that protect users while maximizing capital efficiency. The foundation for DeFi innovations that users can trust with their assets.",
  },
  {
    tag: "Enterprise",
    title: "Enterprise-Grade <br/> Blockchain Solutions",
    description:
      "Bring blockchain efficiency to your organization with infrastructure built for business needs with the reliability and compliance enterprises require.",
  },
];
