import React, { useEffect, useRef } from "react";
import { Wrapper } from "./style";

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    video.play();
  }, []);

  return (
    <Wrapper>
      <video
        ref={videoRef}
        src="video/bg-video.mp4"
        muted
        loop
        autoPlay
        playsInline
        className="video"
      />
      <div className="bg-blur"></div>
    </Wrapper>
  );
};

export default VideoBackground;
