import React from "react";
import Image from "next/image";

type ScheduleItem = {
  time: string;
  description: string;
  image?: string; // Optional image property
};

type ScheduleProps = {
  title: string;
  subtitle: string;
  items: ScheduleItem[];
};

const Schedule: React.FC<ScheduleProps> = ({ title, subtitle, items }) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            {title}
          </h2>
          <p className="mt-6 font-sans text-lg leading-6 text-gray-600">
            {subtitle}
          </p>
        </div>
        <div className="mt-10 font-sans">
          <ul className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-8">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b border-gray-200 py-4"
              >
                <div className="flex-shrink-0 text-gray-600 text-sm w-1/4">
                  {item.time}
                </div>
                <div className="flex-grow text-gray-900 text-sm font-medium w-3/4 flex justify-between items-center">
                  {item.description}
                  {item.image && (
                    <div className="ml-4">
                      <div className="w-20 h-20 relative">
                        <Image
                          src={item.image}
                          alt={item.description}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
