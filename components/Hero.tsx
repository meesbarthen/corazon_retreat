import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <video
        className="w-full h-full object-cover md:object-center object-left"
        loop
        muted
        autoPlay
        playsInline
        controls={false}
        src="/welcome-video.mp4"
      ></video>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 md:left-1/2 flex items-center justify-center max-w-2xl px-4">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Retreats voor vrouwen of voor moeders en dochters
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-sans">
            6 dagen rust, verbinding en genieten op Ibiza
          </p>
          <div className="mt-4">
            <Link
              href="/retreats"
              className="bg-[#AE8466] text-white font-semibold py-2 px-4 rounded"
            >
              Meer informatie over retreats
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <ArrowDownIcon className="h-10 w-10 text-white" />
      </div>
    </div>
  );
}
