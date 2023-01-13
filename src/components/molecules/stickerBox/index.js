import React from "react";
import { StickerBoxContainer, StickerBoxImage, StickerBoxBody } from "./style";

import Text from "../../atoms/text";
import Image from "../../atoms/image";

const StickerBox = ({ label, image, value, color }) => {
  return (
    <StickerBoxContainer color={color}>
      <StickerBoxImage>
        <Image
          imageName={image}
          type="png"
          width="60px"
          height="60px"
          size="cover"
          opacity="0.2"
        />
      </StickerBoxImage>
      <StickerBoxBody>
        <Text
          label={label}
          height="15px"
          lineHeight="15px"
          fontSize="0.8rem"
          color="textPrimary"
        />
        <Text
          label={value}
          height="30px"
          lineHeight="30px"
          fontSize="1.2rem"
          color="textPrimary"
        />
      </StickerBoxBody>
    </StickerBoxContainer>
  );
};

export default StickerBox;
