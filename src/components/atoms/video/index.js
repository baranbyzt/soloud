import React from "react";
import { VideoContainer } from "./style";

const Video = ({ id }) => {
  return (
    <VideoContainer>
      <iframe
        title={id}
        frameborder="0"
        allowfullscreen
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}?`}
      ></iframe>
    </VideoContainer>
  );
};

export default Video;
