import React from "react";
import {
  MapItemContainer,
  MapItemImage,
  MapItemBody,
  MapItemAnimation,
} from "./style";
import Text from "../../atoms/text";
import Image from "../../atoms/image";

const MapItem = ({ id, name, song, imageCode }) => {
  return (
    <MapItemContainer id={`marker${id}`} onClick={() => alert(id)}>
      <MapItemImage>
        <Image imageName={imageCode} size="cover" />
      </MapItemImage>
      <MapItemBody>
        <Text
          label={name}
          height="20px"
          lineHeight="20px"
          fontSize="0.8rem"
          color="textPrimary"
        />
        <Text
          label={song}
          height="20px"
          lineHeight="20px"
          fontSize="0.8rem"
          color="textSecondary"
        />
      </MapItemBody>
      <MapItemAnimation>
        <Image imageName="playing" type="gif" size="cover" />
      </MapItemAnimation>
    </MapItemContainer>
  );
};

export default MapItem;
