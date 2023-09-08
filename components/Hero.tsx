export default function Hero() {
  return (
    <div>
      <video
        autoPlay={true}
        preload="auto"
        muted
        loop
        controls={false}
        id="myVideo"
        src="/corazon-retreat.mp4"
      ></video>
    </div>
  );
}
