export function WhatYouCanBuildSection() {
  return (
    <section id="build" className="relative max-w-[1330px] mx-auto">
      <div className="lg:flex lg:min-h-[200vh]">
        {/* Left side - sticky video */}

        <div className="max-lg:aspect-square lg:w-[1033px] lg:h-[1000px] lg:sticky lg:-left-20 lg:-top-14 lg:overflow-hidden relative">
          <div className="lg:absolute lg:inset-0 size-full ">
            <video
              src="/build.mp4"
              autoPlay
              loop
              muted
              className="size-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>

        {/* Right side - scrollable content */}
        <div className="lg:w-1/2 relative py-[50px] px-5 lg:px-[50px] lg:py-[100px]">
          <div className="space-y-[60px] min-h-screen flex flex-col justify-center">
            <header className="text-3xl sm:text-4xl md:text-6xl lg:text-[82px] lg:leading-[90%] max-lg:text-center max-w-full sm:max-w-[650px] md:max-w-[750px] mx-auto font-medium">
              What you can Build?
            </header>

            <div className="space-y-20">
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
