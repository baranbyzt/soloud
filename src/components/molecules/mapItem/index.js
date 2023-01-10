import React from "react";
import { MapItemContainer, MapItemImage, MapItemBody } from "./style";
import Text from "../../atoms/text";
import Image from "../../atoms/image";

const MapItem = ({ id, label, imageCode }) => {
  return (
    <MapItemContainer id={`marker${id}`} onClick={() => alert(id)}>
      <MapItemImage>
        <Image imageName={imageCode} size="cover" />
      </MapItemImage>
      <MapItemBody>
        <Text
          label={label}
          height="25px"
          lineHeight="25px"
          fontSize="0.8rem"
          color="textPrimary"
        />
      </MapItemBody>
    </MapItemContainer>
  );
};

export default MapItem;
