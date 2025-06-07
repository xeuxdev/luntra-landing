export function CTASection() {
  return (
    <section className="relative overflow-x-clip">
      <div className="lg:h-[727px] py-[150px] px-5 relative overflow-hidden">
        <div className="w-full max-w-[638px] mx-auto gap-10 flex flex-col items-center">
          <div className="space-y-5 text-center">
            <h5 className="text-[44px] md:text-6xl lg:text-[82px] leading-[90%] text-center max-w-full sm:max-w-[650px] md:max-w-[750px] mx-auto font-medium text-pretty">
              Get <span className="text-[#FB0E0F]">Started</span> with Luntra
              Infrastructure
            </h5>
            <p className="text-base/[155%] font-normal font-fragment opacity-70">
              Launch AI-powered dApps in seconds
            </p>
            <p className="text-base/[155%] font-normal font-fragment opacity-70">
              Integrates with Hardhat, Foundry, Web3 libraries for seamless
              development workflows.
            </p>
          </div>

          <button className="btn primary">Get Started</button>
        </div>

        <div className="size-[500px] lg:size-[1020px] rotate-z-220 absolute -left-[250px] sm:-left-[200px] sm:-bottom-[150px] -bottom-[150px] lg:-left-[450px] xl:-left-[350px] lg:-bottom-[390px] -z-20">
          <video
            src="/cta.mp4"
            autoPlay
            loop
            muted
            className="size-full object-cover"
          />
        </div>
      </div>

      <div className="size-[500px] lg:size-[1020px] rounded-tr-[300px] sm:rounded-tr-[400px] md:rounded-tr-[450px] lg:rounded-r-[910px] rotate-y-180 rotate-z-340 absolute -right-[260px] lg:-right-[533px] -top-[230px] sm:-top-[150px] md:-top-[200px] lg:-top-[565px] -z-20 overflow-hidden">
        <video
          src="/cta.mp4"
          autoPlay
          loop
          muted
          className="size-full object-cover"
        />
      </div>
    </section>
  );
}
