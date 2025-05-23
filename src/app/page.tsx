
export default function Home() {
  return (
    <div>
      <div className="w-full h-screen relative font-[family-name:var(--font-author)] ">
        <video className="object-cover w-full h-full" autoPlay loop muted>
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 w-full h-full px-5">
          <div className="flex md:items-center md:flex-row flex-col md:gap-[70px] absolute bottom-[30px] md:left-1/2 md:-translate-x-1/2">
            <h1 className="text-white md:text-[102px] text-[50px] md:leading-[98.8px] leading-[50px] ">
              Built for <br className="md:flex hidden" /> Builders
            </h1>
            <div className="flex gap-[30px] flex-col">
              <p className="text-[18px] text-white w-[388px]">
                Experience blazing-fast transactions, unmatched security, and
                Ethereum compatibility with our optimistic rollup solution.
              </p>
              <div className="flex gap-2.5 items-center">
                <button className="md:w-[180px] px-[40px] h-[50px] btn cursor-pointer text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-95">
                  Start Building
                </button>
                <button className="md:w-[180px] px-[40px]  h-[50px] cursor-pointer bg-white/10 backdrop-blur-[22px] text-white rounded-[32px] transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] active:scale-95">
                  Read docs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
