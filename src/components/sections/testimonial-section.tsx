import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export function TestimonialSection() {
  return (
    <section className="h-auto px-5 lg:px-10 py-12 sm:py-16 md:py-20 lg:h-[880px] lg:py-0 overflow-hidden w-fit mx-auto">
      <div className="flex flex-col items-center justify-center lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-[90px] h-full px-4 sm:px-6 lg:px-0 relative">
        <div className="max-w-[510px] max-md:text-center space-y-10">
          <div className="space-y-4">
            <p className="text-white/70 text-base sm:text-lg font-fragment font-normal -tracking-[4%]">
              Real World Examples
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[82px] text-white">
              Trusted by the community
            </p>
            <p className="text-3xl sm:text-4xl md:text-6xl lg:text-[82px]/[90%] font-medium"></p>
          </div>
          <button className="btn primary">Follow us on X</button>
        </div>

        {/* Testimonials Section */}
        <div className="relative h-full w-full">
          {/* Mobile/Tablet: Horizontal marquee */}
          <div className="lg:hidden space-y-5 relative">
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
          </div>

          {/* Desktop: Vertical marquee columns */}
          <div className="hidden lg:flex h-full relative gap-5">
            <div className="absolute -top-5 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent opacity-90 z-20"></div>
            <div className="absolute -bottom-5 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 z-20"></div>
            <div
              className="absolute inset-0 "
              style={{
                background:
                  "radial-gradient(ellipse 120% 80% at center, transparent 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)",
              }}
            ></div>

            <div className="h-full overflow-hidden">
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

            <div className="h-full overflow-hidden">
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
