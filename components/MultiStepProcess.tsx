import React from "react";

export default function MultiStepProcess({
  steps,
  title,
  subtitle,
  colorWay = "light",
}: {
  title?: string;
  subtitle?: string;
  colorWay?: "light" | "dark";
  steps: {
    title: string;
    text: string;
  }[];
}) {
  return (
    <div className={colorWay === "light" ? "bg-[#F4F3ED]" : "bg-[#F2E7D4]"}>
      <div className="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6">
        <div className="max-w-screen-xl mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight text-gray-900 font-serif max-w-4xl mx-auto text-center">
            {title}
          </h2>
          <p className="text-gray-500 sm:text-xl font-sans text-center">
            {subtitle}
          </p>
        </div>
        <div className="space-y-8">
          {steps.map((item, index) => (
            <div
              className="flex flex-col items-center md:items-start md:flex-row md:gap-4"
              key={index}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#AE8466] text-white rounded-full flex items-center justify-center text-lg font-bold">
                {index + 1}
              </div>
              <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-gray-500 font-sans">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
