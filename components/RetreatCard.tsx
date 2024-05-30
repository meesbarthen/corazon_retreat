import React from "react";
import Image from "next/image";
import Link from "next/link";

type RetreatDetails = {
  imageSrc: string;
  title: string;
  date: string;
  description?: string;
  buttonText: React.ReactNode;
  buttonLink: string;
  openInNewTab?: boolean;
};

type RetreatCardProps = {
  title: string;
  firstRetreat: RetreatDetails;
  secondRetreat: RetreatDetails;
};

const RetreatCard: React.FC<RetreatCardProps> = ({
  title,
  firstRetreat,
  secondRetreat,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-16 px-8 ">
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
      </div>
      <div className="flex max-w-7xl flex-col md:flex-row justify-start items-start gap-10">
        {[firstRetreat, secondRetreat].map((retreat, index) => (
          <div key={index} className="bg-white overflow-hidden max-w-md">
            <div className="flex flex-col">
              <div className="relative w-full h-64">
                <Image
                  src={retreat.imageSrc}
                  alt={retreat.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="px-6 pt-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {retreat.title}
                  </h2>
                  <p className="mt-2 text-gray-600 font-sans">{retreat.date}</p>
                  <p className="mt-4 text-gray-700 font-sans">
                    {retreat.description}
                  </p>
                </div>
                <Link
                  href={retreat.buttonLink}
                  target={retreat.openInNewTab ? "_blank" : "_self"}
                  className="mt-6 inline-block bg-[#AE8466] text-white px-4 py-2 rounded-md text-center font-sans"
                >
                  {retreat.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetreatCard;
