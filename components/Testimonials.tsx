import Link from "next/link";
import Image from "next/image";
import React from "react";

type Testimonial = {
  title: string;
  text: string;
  name: string;
  avatar: string;
};

type TestimonialsProps = {
  title: string;
  testimonials: Testimonial[];
  ctaLabel?: string;
  ctaLink?: string;
  showCTA?: boolean;
  openCTAInNewTab?: boolean;
  bgColor?: string; // New bgColor prop
};

export default function Testimonials({
  title,
  testimonials,
  ctaLabel,
  ctaLink,
  showCTA = true,
  openCTAInNewTab = false,
  bgColor = "#F2E7D4", // Default background color
}: TestimonialsProps) {
  return (
    <div className="py-16" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto space-y-12 px-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center gap-y-8">
          {testimonials.map((item) => (
            <div key={item.name}>
              <div className="bg-white shadow-lg p-8 rounded-xl relative text-center mb-8">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white "></div>
                <h3 className="text-xl font-bold">
                  &ldquo;{item.title}&ldquo;
                </h3>
                <p className="text-center text-gray-600 text-sm mt-4 font-sans">
                  ‟{item.text}”
                </p>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <Image
                  className="w-16 h-16 rounded-full mb-2 object-cover object-center"
                  src={item.avatar}
                  alt={item.name}
                  width={64}
                  height={64}
                />
                <div className="text-center mt-2">
                  <p className="font-bold">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showCTA && ctaLink && ctaLabel && (
          <div className="mt-12 text-center">
            <Link
              target={openCTAInNewTab ? "_blank" : "_self"}
              href={ctaLink}
              className="inline-block rounded-md bg-[#AE8466] px-5 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
