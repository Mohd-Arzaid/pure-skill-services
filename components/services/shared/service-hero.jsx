import React from "react";
import ServiceHeroContactForm from "./service-hero-contact-form";

const ServiceHero = ({
  heading,
  description,
  headingAs: HeadingTag = "div",
  onViewServices,
}) => {
  return (
    <div className="relative py-16 md:py-24 overflow-x-hidden bg-[#F9F7F2]">
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[75rem] gap-10 md:gap-16 flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}
        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:max-w-lg items-start">
          <div className="inline-flex items-center">
            <div className="h-[2px] w-10 bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-inter text-xs font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <HeadingTag className="z-[10] font-playfair font-bold text-3xl md:text-4xl text-neutral-800">
            {heading}
          </HeadingTag>

          <p className="font-inter max-w-md text-sm md:text-base z-[10] text-[#332156]">
            {description}
          </p>

          <div className="flex items-center">
            <div
              className="flex items-center cursor-pointer group"
              onClick={onViewServices}
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-inter  text-[#125E5A] text-sm md:text-base  group-hover:translate-x-1 transition-all duration-300">
                View Services
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <ServiceHeroContactForm />
      </div>
    </div>
  );
};

export default ServiceHero;
