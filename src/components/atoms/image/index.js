import React from "react";
import { ImageContainer } from "./style";

const Image = ({ imageName, type, size, width, height }) => {
  return (
    <ImageContainer
      size={size}
      width={width}
      height={height}
      url={require(`../../../assets/images/${imageName}.${
        type ? type : "jpg"
      }`)}
    />
  );
};

export default Image;
