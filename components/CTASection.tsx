import Image from "next/image";

export default function CTASection() {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:h-[66.67vh]">
      <div className="w-full h-[40vh] lg:h-full lg:w-1/2 overflow-hidden">
        <img
          width={500}
          height={400}
          src="/merel_with_heart.jpg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full bg-[#F2E7D4] items-center justify-center flex p-4 lg:p-0">
        <div className="max-w-xl text-start p-5 lg:overflow-y-auto">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Change your life and join our homecoming retreat
          </h2>
          <p className="mt-4 lg:mt-6 text-base lg:text-lg leading-7 text-gray-600">
            Are you ready to dive deeper into yourself and change your life? Do
            you want become more empowered? Then the homecoming retreat is the
            right place for you. During this retreat you will reconnect with who
            you really are in five days, you will get out of your head and into
            your body and soul. You will be immersed for five days in energy
            work, different rituals, silence, dance, shamanic drumming, music,
            meditation, walks and healing food. All this to ensure that you
            reconnect with your essence: your true authentic self. We promise
            you an unforgettable and life-changing experience! Are you ready for
            this journey?
          </p>
          <div className="mt-4 lg:mt-6">
            <a
              href="#"
              className="rounded-md bg-[#AE4B6D] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              Get to know us!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
