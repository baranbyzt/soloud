import React from "react";
import {
  MediaBoxContainer,
  MediaBoxImage,
  MediaBoxTitle,
  MediaBoxSubTitle,
  MediaBoxFooter,
} from "./style";
import Text from "../../atoms/text";
import Image from "../../atoms/image";
import Button from "../../molecules/button";
import usePlay from "../../../hooks/usePlay";
import useFavorite from "../../../hooks/useFavorite";

const MediaBox = ({ id, song, artist, favorite }) => {
  const { playVideo } = usePlay();
  const { toggleFavorite } = useFavorite();

  return (
    <MediaBoxContainer>
      <MediaBoxImage>
        <Image imageName={`media${id}`} size="cover" />
      </MediaBoxImage>
      <MediaBoxTitle>
        <Text
          label={song}
          height="25px"
          lineHeight="25px"
          fontSize="1rem"
          color="textPrimary"
        />
      </MediaBoxTitle>
      <MediaBoxSubTitle>
        <Text
          label={artist}
          height="20px"
          lineHeight="20px"
          fontSize="0.8rem"
          color="textSecondary"
        />
      </MediaBoxSubTitle>
      <MediaBoxFooter>
        <Button
          size="sm"
          label="Play"
          type="outlined"
          onClick={() => playVideo(id)}
        />
        <Button
          size="xs"
          icon="AiOutlineHeart"
          iconColor={favorite ? "activePrimary" : "textPrimary"}
          onClick={() => toggleFavorite(id)}
        />
      </MediaBoxFooter>
    </MediaBoxContainer>
  );
};

export default MediaBox;
