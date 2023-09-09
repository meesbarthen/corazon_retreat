export default function VideoContainer() {
  return (
    <div className="p-2 md:py-12 shadow-2xl bg-[#F2E7D4] flex flex-col items-center">
      <div className="max-w-2xl flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold leading-10 tracking-tight text-gray-900 my-6 md:mb-12">
          Check our trailer
        </h2>
        <video
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline={true}
          controls={false}
          src="/corazon_trailer.mp4"
          className="rounded-lg"></video>
      </div>
    </div>
  );
}
