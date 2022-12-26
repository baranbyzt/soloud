import React from "react";
import {
  MapItemContainer,
  MapItemImage,
  MapItemTitle,
  MapItemSubTitle,
} from "./style";
import Text from "../../atoms/text";
import Image from "../../atoms/image";

const MapItem = ({ id, imageCode }) => {
  return (
    <MapItemContainer id={`marker${id}`} onClick={() => alert(id)}>
      <MapItemImage>
        <Image imageName={imageCode} size="cover" />
      </MapItemImage>
      <MapItemTitle>
        <Text
          label="test1"
          height="30px"
          lineHeight="30px"
          fontSize="1rem"
          color="textPrimary"
        />
      </MapItemTitle>
      <MapItemSubTitle>
        <Text
          label="test2"
          height="20px"
          lineHeight="20px"
          fontSize="0.8rem"
          color="textSecondary"
        />
      </MapItemSubTitle>
    </MapItemContainer>
  );
};

export default MapItem;
