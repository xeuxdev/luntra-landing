export function HeroSection() {
  return (
    <section className="w-full h-screen relative" id="hero">
      <video className="object-cover w-full h-full" autoPlay loop muted>
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 w-full h-full px-5">
        <div className="relative size-full">
          <div className="flex md:items-center md:flex-row flex-col md:gap-[70px] absolute bottom-[30px] md:left-1/2 md:-translate-x-1/2">
            <h1 className="text-white md:text-[102px] font-medium text-[50px] md:leading-[98.8px] leading-[50px] ">
              Built for <br className="md:flex hidden" /> Builders
            </h1>
            <div className="flex gap-[30px] flex-col">
              <p className="text-base text-white max-w-[388px] font-fragment">
                Experience blazing-fast transactions, unmatched security, and
                Ethereum compatibility with our optimistic rollup solution.
              </p>
              <div className="flex gap-2.5 items-center flex-col *:w-full min-[450px]:flex-row">
                <button className="btn primary">Start Building</button>
                <button className="btn secondary">Read docs</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
