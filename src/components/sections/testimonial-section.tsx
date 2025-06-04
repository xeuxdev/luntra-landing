import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export function TestimonialSection() {
  return (
    <section className="w-full h-auto px-1 sm:px-4 lg:px-10 lg:pl-[120px] py-12 sm:py-16 md:py-20 lg:h-[880px] lg:py-0 overflow-hidden">
      <div className="max-w-[1330px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-[90px] h-full lg:justify-between">
          <div className="w-full lg:max-w-[510px] text-center lg:text-left space-y-6 lg:space-y-10">
            <div className="space-y-4">
              <p className="text-white/70 text-base sm:text-lg font-fragment font-normal -tracking-[4%]">
                Real World Examples
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[82px] text-white font-medium lg:leading-[90%]">
                Trusted by the community
              </h2>
            </div>
            <button className="btn primary">Follow us on X</button>
          </div>

          {/* Testimonials Section */}
          <div className=" lg:relative lg:h-full w-fit">
            {/* Mobile/Tablet: Horizontal marquee */}
            <div className="lg:hidden space-y-5 w-full">
              <Marquee
                gradient={false}
                speed={30}
                pauseOnHover={true}
                autoFill={true}
                loop={0}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={`marquee-1-${index}`} className="mr-5">
                    <Card testimonial={testimonial} index={index} />
                  </div>
                ))}
              </Marquee>
              <Marquee
                gradient={false}
                speed={30}
                pauseOnHover={true}
                direction="right"
                autoFill={true}
                loop={0}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={`marquee-2-${index}`} className="mr-5">
                    <Card testimonial={testimonial} index={index} />
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Desktop: Vertical marquee columns */}
            <div className="hidden lg:flex h-full max-h-[835px] relative gap-5 w-full overflow-hidden vignette-overlay">
              <div className="h-full overflow-hidden">
                <div className="animate-marquee-up flex flex-col gap-5">
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
                <div className="animate-marquee-down flex flex-col gap-5">
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
      className="w-[280px] sm:w-[300px] lg:w-[310px] h-fit min-h-[250px] rounded-lg py-6 sm:py-[30px] px-5 sm:px-[25px] flex flex-col justify-between gap-10 shrink-0"
      style={{ backgroundColor: testimonial.bg }}
      key={index}
    >
      <p className="font-normal font-fragment text-base sm:text-lg leading-[135%] text-white">
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
