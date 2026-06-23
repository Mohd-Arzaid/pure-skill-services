"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";

// Input field common className - update only text and placeholder color to match service-hero.jsx
const inputFieldClass =
  "disabled:opacity-100 py-3 px-4 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-white border-2 border-[#BDBDBD] rounded-[12px] text-[#332156] font-inter text-sm md:text-base placeholder:text-[#332156] placeholder:font-inter  placeholder:text-sm";

// Static hero contact form (UI only; backend wiring intentionally not implemented).
const ServiceHeroContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    productName: "",
    message: "",
  });

  const { fullName, email, phoneNumber, companyName, productName, message } =
    formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="z-20 w-full md:max-w-lg flex flex-col">
      <div className="flex flex-col gap-2">
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-inter tracking-wider font-semibold text-sm text-[#1A8781]">
            Contact Us
          </span>
          <Separator className="w-20 h-[2px] bg-[#1A8781]" />
        </div>

        <div className="text-3xl md:text-4xl font-inter font-bold text-neutral-800">
          Book an Appointment
        </div>

        <p className="font-medium font-inter text-sm md:text-base text-green-800">
          Want to contact our team and schedule a call?
          <span className="text-neutral-800 font-inter"> Try Now</span>
        </p>
      </div>

      <form className="flex flex-col mt-8 gap-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            placeholder="Full Name *"
            required
            className={inputFieldClass}
          />

          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Email Address *"
            required
            className={inputFieldClass}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            placeholder="Contact Number *"
            required
            className={inputFieldClass}
          />

          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Company Name *"
            required
            className={inputFieldClass}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={handleOnChange}
            placeholder="Product Name *"
            required
            className={inputFieldClass}
          />

          <input
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Required Certification*"
            required
            className={inputFieldClass}
          />
        </div>

        <button
          type="button"
          className="disabled:opacity-100 mt-3 w-[218px] py-3  bg-[#125E5A]/90 hover:bg-[#125E5A] rounded-[5px] text-sm md:text-base font-inter shadow-elegant transition-all duration-300 hover:translate-y-[-2px]"
        >
          <div className="flex gap-3 items-center justify-center">
            <span className="font-inter text-white">Book Appointment</span>
          </div>
        </button>
      </form>
    </div>
  );
};

export default ServiceHeroContactForm;
