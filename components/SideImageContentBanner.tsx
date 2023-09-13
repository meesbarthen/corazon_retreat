import React from "react";

type SideImageContentBannerProps = {
  title?: string;
  children?: React.ReactNode;
  buttonLabel?: string;
  buttonLink?: string;
  showButton?: boolean;
  imageSrc?: string;
  openInNewTab?: boolean;
};

export default function SideImageContentBanner({
  title,
  children,
  buttonLabel,
  buttonLink,
  showButton = true,
  imageSrc,
  openInNewTab = false,
}: SideImageContentBannerProps) {
  return (
    <div className="bg-[#F2E7D4]">
      <div className="relative isolate overflow-hidden px-8 py-12 sm:py-24 lg:overflow-visible  max-w-7xl mx-auto">
        <div className="mx-auto flex flex-col md:flex-row gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:flex-row items-start lg:gap-y-10">
          <div className="md:w-1/2 lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#AE8466] sm:text-4xl">
                {title}
              </h1>
              <div className="mt-6 text-lg leading-8 text-gray-700 font-sans">
                {children}
              </div>
              {showButton && buttonLink && buttonLabel ? (
                <div className="mt-10 flex">
                  <a
                    target={openInNewTab ? "_blank" : "_self"}
                    href={buttonLink}
                    className="rounded-md bg-[#AE8466] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-sans">
                    {buttonLabel}
                  </a>
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-full md:w-1/2 sticky lg:top-32 lg:overflow-hidden">
            <img
              className="w-full object-cover object-center max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 h-[35rem]"
              src={imageSrc}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
