import React from "react";
import {
  MediaItemContainer,
  MediaItemImage,
  MediaItemTitle,
  MediaItemSubTitle,
  MediaItemButtons,
  MediaItemCounts,
} from "./style";
import Text from "../../atoms/text";
import Icon from "../../atoms/icon";
import Image from "../../atoms/image";
import Button from "../../molecules/button";
import usePlay from "../../../hooks/usePlay";
import useFavorite from "../../../hooks/useFavorite";

const MediaItem = ({ id, song, artist, favorite, playCount }) => {
  const { playVideo } = usePlay();
  const { toggleFavorite } = useFavorite();

  return (
    <MediaItemContainer>
      <MediaItemImage>
        <Image imageName={`media${id}`} size="cover" />
      </MediaItemImage>
      <MediaItemTitle>
        <Text
          label={song}
          height="30px"
          lineHeight="30px"
          fontSize="1rem"
          color="textPrimary"
        />
      </MediaItemTitle>
      <MediaItemSubTitle>
        <Text
          label={artist}
          height="20px"
          lineHeight="20px"
          fontSize="0.8rem"
          color="textSecondary"
        />
      </MediaItemSubTitle>
      <MediaItemCounts>
        <Text label={playCount} size="md" color="textPrimary" />
        <Icon data="FiUser" size="sm" color="textSecondary" />
      </MediaItemCounts>
      <MediaItemButtons>
        <Button
          size="xs"
          icon="AiOutlineHeart"
          iconColor={favorite ? "activePrimary" : "textPrimary"}
          onClick={() => toggleFavorite(id)}
        />
        <Button
          size="xs"
          icon="FiPlay"
          iconColor="textPrimary"
          onClick={() => playVideo(id)}
        />
      </MediaItemButtons>
    </MediaItemContainer>
  );
};

export default MediaItem;
