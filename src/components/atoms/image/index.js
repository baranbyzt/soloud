import React from "react";
import { ImageContainer } from "./style";

const Image = ({ imageName, size, width, height }) => {
  return (
    <ImageContainer
      size={size}
      width={width}
      height={height}
      url={require(`../../../assets/images/${imageName}.jpg`)}
    />
  );
};

export default Image;
