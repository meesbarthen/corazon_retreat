export default function VideoContainer() {
  return (
    <div className="pb-0 md:py-12 shadow-2xl bg-[#F2E7D4] flex flex-col items-center">
      <div className="max-w-2xl flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold leading-10 tracking-tight text-gray-900 my-6 md:mb-12 self-center">
          Check our trailer
        </h2>
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          src="/corazon_trailer.mp4"
          className="md:rounded-lg rounded-none"></video>
      </div>
    </div>
  );
}
