import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export function TestimonialSection() {
  return (
    <section className="h-auto py-12 sm:py-16 md:py-20 lg:h-[880px] lg:py-0 overflow-hidden w-fit mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 h-full px-4 sm:px-6 lg:px-0">
        {/* Mobile/Tablet Header Section */}
        <div className="lg:hidden text-center space-y-6 sm:space-y-8 py-8 sm:py-12">
          <div className="space-y-4">
            <p className="text-white/70 text-base sm:text-lg font-fragment font-normal -tracking-[4%]">
              Real World Examples
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl text-white">
              Trusted by the community
            </p>
          </div>
          <button className="btn primary">Read docs</button>
        </div>

        {/* Desktop Left Section - preserved original styling */}
        <div className="hidden lg:flex h-full flex-col gap-[147px] relative">
          <svg
            width="613"
            height="402"
            viewBox="0 0 613 402"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-rotate-3 -ml-5"
          >
            <path
              d="M-85.7442 345.418C-9.30884 374.572 157.095 385.753 211.229 197.239C265.364 8.72524 497.609 -9.41757 606.965 5.07527"
              stroke="url(#paint0_linear_46_114)"
              strokeWidth="80"
            />
            <defs>
              <linearGradient
                id="paint0_linear_46_114"
                x1="349.5"
                y1="135.499"
                x2="140.081"
                y2="350.513"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D84328" stopOpacity="0" />
                <stop offset="1" stopColor="#D84328" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="613"
            height="402"
            viewBox="0 0 613 402"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-3 -ml-5"
          >
            <path
              d="M-85.7442 56.66572-9.30884 27.5141 157.095 16.3334 211.229 204.847C265.364 393.361 497.609 411.504 606.965 397.011"
              stroke="url(#paint0_linear_46_115)"
              strokeWidth="80"
            />
            <defs>
              <linearGradient
                id="paint0_linear_46_115"
                x1="349.5"
                y1="266.587"
                x2="140.081"
                y2="51.5739"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D84328" stopOpacity="0" />
                <stop offset="1" stopColor="#D84328" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute flex items-center justify-center flex-col gap-[30px] top-1/2 -translate-y-1/2 -right-14 w-fit max-w-[520px]">
            <div className="space-y-4 text-center">
              <p className="text-white/70 text-lg font-fragment font-normal -tracking-[4%]">
                Real World Examples
              </p>
              <p className="text-4xl lg:text-[64px]/[90%] text-white">
                Trusted by the community
              </p>
            </div>
            <button className="btn primary">Read docs</button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative h-full w-full">
          {/* Mobile/Tablet: Horizontal marquee */}
          <div className="lg:hidden space-y-5">
            <Marquee gradient={false} speed={30} pauseOnHover={true} loop={0}>
              {testimonials.map((testimonial, index) => (
                <Card
                  testimonial={testimonial}
                  index={index}
                  key={`marquee-${index}`}
                />
              ))}
            </Marquee>

            <Marquee
              gradient={false}
              speed={30}
              pauseOnHover={true}
              loop={0}
              direction="right"
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  testimonial={testimonial}
                  index={index}
                  key={`marquee-${index}`}
                />
              ))}
            </Marquee>
          </div>{" "}
          {/* Desktop: Vertical marquee columns */}
          <div className="hidden lg:flex h-full gap-5">
            {/* First Column - Moving Up */}
            <div className="flex-1 h-full overflow-hidden">
              <div className="animate-marquee-up space-y-5">
                {[
                  ...testimonials.slice(0, 3),
                  ...testimonials.slice(0, 3),
                  ...testimonials.slice(0, 3),
                ].map((testimonial, index) => (
                  <Card
                    testimonial={testimonial}
                    index={index}
                    key={`col1-${index}`}
                  />
                ))}
              </div>
            </div>

            {/* Second Column - Moving Down */}
            <div className="flex-1 h-full overflow-hidden">
              <div className="animate-marquee-down space-y-5">
                {[
                  ...testimonials.slice(3, 6),
                  ...testimonials.slice(3, 6),
                  ...testimonials.slice(3, 6),
                ].map((testimonial, index) => (
                  <Card
                    testimonial={testimonial}
                    index={index}
                    key={`col2-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <div
      className="w-[300px] h-[250px] sm:w-[310px] sm:h-[300px] rounded-lg py-6 sm:py-8 px-5 sm:px-6 flex flex-col justify-between mx-2 sm:mx-3 flex-shrink-0"
      style={{ backgroundColor: testimonial.bg }}
      key={index}
    >
      <p className="font-normal font-fragment text-base sm:text-lg leading-[135%] text-white">
        {testimonial.text}
      </p>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="size-[40px] sm:size-[50px] rounded-full overflow-hidden relative">
          <Image src={testimonial.image} alt={testimonial.name} fill />
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
    text: "We used Glide to containerize our services and quickly stand up multiple environments.",
    name: "Jillian Thompson",
    company: "@mike",
    image: "/images/testimonials/jillian-thompson.jpg",
  },
  {
    bg: "#D84328",
    text: "We used Glide to containerize our services and quickly stand up multiple environments.",
    name: "Jill Anderson",
    company: "@mike",
    image: "/images/testimonials/jillian-thompson.jpg",
  },
  {
    bg: "#BC1D00",
    text: "Glide is blazing fast to spin up Environments and clusters. They make handling integrations and environment variables a breeze.",
    name: "Jillian Parker",
    company: "@mike",
    image: "/images/testimonials/jillian-thompson.jpg",
  },
  {
    bg: "#DD3B1D",
    text: "We used Glide to containerize our services and quickly stand up multiple environments.",
    name: "Jillian Thompson",
    company: "@mike",
    image: "/images/testimonials/jillian-thompson.jpg",
  },
  {
    bg: "#831400",
    text: "We used Glide to containerize our services and quickly stand up multiple environments.",
    name: "Jillian Thompson",
    company: "@mike",
    image: "/images/testimonials/jillian-thompson.jpg",
  },
  {
    bg: "#E06B55",
    text: "We used Glide to containerize our services and quickly stand up multiple environments.",
    name: "Jillian Thompson",
    company: "@mike",
    image: "/images/testimonials/jillian-thompson.jpg",
  },
];
