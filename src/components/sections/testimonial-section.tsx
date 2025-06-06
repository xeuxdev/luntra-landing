"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function TestimonialSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="w-full h-auto px-1 sm:px-4 lg:px-10 lg:pl-[120px] py-12 sm:py-16 md:py-20 lg:h-[880px] lg:py-0 overflow-hidden">
      <div className="max-w-[1330px] mx-auto overflow-x-clip">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-[90px] h-full lg:justify-between lg:items-center">
          <div className="w-full lg:max-w-[510px] text-center lg:text-left space-y-6 lg:space-y-10">
            <div className="space-y-4">
              <p className="text-white/70 text-base sm:text-lg font-fragment font-normal -tracking-[4%]">
                Real World Examples
              </p>
              <h2 className="text-[50px] md:text-6xl lg:text-[82px] leading-[90%] max-w-full sm:max-w-[650px] md:max-w-[750px] mx-auto font-medium">
                Trusted by the community
              </h2>
            </div>
            <button className="btn primary">Follow us on X</button>
          </div>

          {/* Testimonials Section */}
          <div className="lg:relative lg:h-full w-fit mx-auto">
            {isMobile ? (
              <div className="space-y-5 w-screen relative vignette-mobile">
                <Marquee pauseOnHover direction="right" speed={30} autoFill>
                  <div className="w-full flex gap-5 h-full ml-5">
                    {testimonials.map((testimonial, index) => (
                      <Card
                        testimonial={testimonial}
                        key={`marquee-1-${index}`}
                      />
                    ))}
                  </div>
                </Marquee>

                <Marquee pauseOnHover speed={30} autoFill>
                  <div className="w-full flex gap-5 h-full ml-5">
                    {testimonials.map((testimonial, index) => (
                      <Card
                        testimonial={testimonial}
                        key={`marquee-1-${index}`}
                      />
                    ))}
                  </div>
                </Marquee>
              </div>
            ) : (
              <div className="flex h-full max-h-[835px] relative gap-5 w-full overflow-hidden vignette">
                <div className="h-full overflow-hidden">
                  <div className="animate-marquee-up flex flex-col gap-5">
                    {[...testimonials, ...testimonials, ...testimonials].map(
                      (testimonial, index) => (
                        <Card testimonial={testimonial} key={`col1-${index}`} />
                      )
                    )}
                  </div>
                </div>

                <div className="h-full overflow-hidden">
                  <div className="animate-marquee-down flex flex-col gap-5">
                    {[...testimonials, ...testimonials, ...testimonials].map(
                      (testimonial, index) => (
                        <Card testimonial={testimonial} key={`col2-${index}`} />
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div
      className="w-[280px] sm:w-[300px] lg:w-[310px] h-fit min-h-[250px] rounded-lg py-6 sm:py-[30px] px-5 sm:px-[25px] flex flex-col justify-between gap-10 shrink-0"
      style={{ backgroundColor: testimonial.bg }}
    >
      <p className="font-normal font-fragment text-base sm:text-lg leading-[135%] text-white line-clamp-6">
        {testimonial.text}
      </p>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="size-[40px] sm:size-[50px] rounded-full overflow-hidden relative shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-lg sm:text-xl leading-[90%] text-white">
            {testimonial.name}
          </p>
          <p className="text-white/70 text-sm leading-[135%]">
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    bg: "#E16B55",
    text: "We used Luntra Infrastructure to containerize our services and quickly stand up multiple environments.",
    name: "Jillian Thompson",
    company: "@mike",
    image: "/images/testimonials/jillian-thompson.jpg",
  },
  {
    bg: "#D84328",
    text: "We used Luntra Infrastructure to containerize our services and quickly stand up multiple environments.",
    name: "Jill Anderson",
    company: "@mike",
    image: "/images/testimonials/jillian-thompson.jpg",
  },
  {
    bg: "#BC1D00",
    text: "Luntra Infrastructure is blazing fast to spin up Environments and clusters. They make handling integrations and environment variables a breeze.",
    name: "Jillian Parker",
    company: "@mike",
    image: "/images/testimonials/jillian-thompson.jpg",
  },
  {
    bg: "#DD3B1D",
    text: "We used Luntra Infrastructure to containerize our services and quickly stand up multiple environments.",
    name: "Jillian Thompson",
    company: "@mike",
    image: "/images/testimonials/jillian-thompson.jpg",
  },
  {
    bg: "#831400",
    text: "We used Luntra Infrastructure to containerize our services and quickly stand up multiple environments.",
    name: "Jillian Thompson",
    company: "@mike",
    image: "/images/testimonials/jillian-thompson.jpg",
  },
  {
    bg: "#E06B55",
    text: "We used Luntra Infrastructure to containerize our services and quickly stand up multiple environments.",
    name: "Jillian Thompson",
    company: "@mike",
    image: "/images/testimonials/jillian-thompson.jpg",
  },
];
