import React from "react";
import { RecentItemContainer, RecentItemImage, RecentItemText } from "./style";
import Image from "../../atoms/image";
import Text from "../../atoms/text";
import usePlay from "../../../hooks/usePlay";

const RecentItem = ({ id, song }) => {
  const { playVideo } = usePlay();

  return (
    <RecentItemContainer onClick={() => playVideo(id)}>
      <RecentItemImage>
        <Image imageName={`media${id}`} size="cover" />
      </RecentItemImage>
      <RecentItemText>
        <Text label={song} color="textWhite" size="sm" />
      </RecentItemText>
    </RecentItemContainer>
  );
};

export default RecentItem;
