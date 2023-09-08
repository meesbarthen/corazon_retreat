import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch((error: any) => {
        // Handle any play() promise rejection (e.g., due to autoplay restrictions)
        console.error('Video playback error:', error);
      });
    }
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        id="myVideo"
        src="/corazon-retreat.mp4"
      ></video>
    </div>
  );
}
