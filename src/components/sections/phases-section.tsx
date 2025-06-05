export function PhasesSection() {
  return (
    <section className="py-20 px-5 lg:h-[1092px] max-w-[1300px] w-full mx-auto">
      <div className="size-full relative space-y-14">
        <h4 className="text-[62px] md:text-6xl lg:text-[82px] leading-[90%] text-center max-w-full sm:max-w-[650px] md:max-w-[750px] mx-auto font-medium text-pretty">
          Upcoming Phases
        </h4>

        {/* Mobile view - Stack layout for phases */}
        <div className="flex gap-3 lg:hidden overflow-x-scroll">
          {/* Phase 1 - Mobile */}
          <div className="border border-[#340001] py-10 px-[30px] rounded-[5px] w-[337px] h-[321px] shrink-0 space-y-[30px]">
            <div className="space-y-2.5">
              <p className="text-sm/[135%] font-fragment text-white/70">
                Phase 1
              </p>
              <p className="text-[33px]/[90%] font-medium">Conceptualization</p>
            </div>
            <div className="flex flex-wrap gap-2.5 *:rounded-xl *:py-[11px] *:px-[15px] *:bg-[#F71C19]/12 *:h-11 *:inline-flex *:items-center *:w-fit *:text-sm/[135%] *:text-[#F0342B] *:-tracking-[4%] *:font-normal *:font-fragment">
              <div>Research</div>
              <div>Team building</div>
              <div>Whitepaper</div>
              <div>Compliance</div>
              <div>Community</div>
            </div>
          </div>

          {/* Phase 2 - Mobile */}
          <div className="border border-[#340001] py-10 px-[30px] rounded-sm w-[337px] h-[321px] shrink-0 space-y-[30px]">
            <div className="space-y-2.5">
              <p className="text-sm/[135%] font-fragment text-white/70">
                Phase 2
              </p>
              <p className="text-[33px]/[90%] font-medium">Development</p>
            </div>
            <div className="flex flex-wrap gap-2.5 *:rounded-xl *:py-[11px] *:px-[15px] *:bg-[#F71C19]/12 *:h-11 *:inline-flex *:items-center *:w-fit *:text-sm/[135%] *:text-[#F0342B] *:-tracking-[4%] *:font-normal *:font-fragment">
              <div>Blockchain</div>
              <div>Wallets</div>
              <div>Website</div>
              <div>Testing</div>
              <div>Listings</div>
            </div>
          </div>

          {/* Phase 3 - Mobile */}
          <div className="border border-[#340001] py-10 px-[30px] rounded-sm w-[337px] h-[321px] shrink-0 space-y-[30px]">
            <div className="space-y-2.5">
              <p className="text-sm/[135%] font-fragment text-white/70">
                Phase 3
              </p>
              <p className="text-[33px]/[90%] font-medium">Launch</p>
            </div>
            <div className="flex flex-wrap gap-2.5 *:rounded-xl *:py-[11px] *:px-[15px] *:bg-[#F71C19]/12 *:h-11 *:inline-flex *:items-center *:w-fit *:text-sm/[135%] *:text-[#F0342B] *:-tracking-[4%] *:font-normal *:font-fragment">
              <div>Token Sale</div>
              <div>Marketing</div>
              <div>Use Cases</div>
              <div>Education</div>
              <div>Feedback</div>
            </div>
          </div>
        </div>

        {/* Desktop view - Original absolute positioning layout */}
        <div className="relative h-full hidden lg:block">
          <div className="absolute inset-0 w-full h-[1300px] overflow-hidden rounded-br-[704px] -z-10 -mt-56">
            <video
              src="/phases.mp4"
              autoPlay
              loop
              muted
              className="size-full object-cover"
            />
          </div>

          <div className="absolute -left-8 top-14 max-w-[337px] space-y-[30px]">
            <div className="space-y-2.5 text-right">
              <p className="text-sm/[135%] font-fragment text-white/70">
                Phase 1
              </p>
              <p className="text-[33px]/[90%] font-medium">Conceptualization</p>
            </div>
            <div className="flex justify-end items-center flex-wrap gap-2.5 *:rounded-xl *:overflow-hidden">
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Research
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Team Building
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Whitepaper
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Compliance
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Community
              </div>
            </div>
          </div>

          <div className="absolute right-6 top-64 max-w-[290px] space-y-[30px]">
            <div className="space-y-2.5">
              <p className="text-sm/[135%] font-fragment text-white/70">
                Phase 2
              </p>
              <p className="text-[33px]/[90%] font-medium">Development</p>
            </div>
            <div className="flex items-center flex-wrap gap-2.5 *:rounded-xl *:overflow-hidden">
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Blockchain
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Wallets
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Website
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Testing
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Listings
              </div>
            </div>
          </div>

          <div className="absolute left-14 bottom-54 max-w-[337px] space-y-[30px]">
            <div className="space-y-2.5 text-right">
              <p className="text-sm/[135%] font-fragment text-white/70">
                Phase 3
              </p>
              <p className="text-[33px]/[90%] font-medium">Launch</p>
            </div>
            <div className="flex justify-end items-center flex-wrap gap-2.5 *:rounded-xl *:overflow-hidden">
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Token Sale
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Marketing
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Use Cases
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Education
              </div>
              <div className="py-[11px] px-[15px] bg-[#F71C19]/12 h-11 inline-flex items-center w-fit text-base/[135%] text-[#F0342B] -tracking-[4%] font-normal font-fragment">
                Feedback
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
