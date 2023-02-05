import React, { useEffect, useState } from "react";
import { RecentContainer } from "./style";
import Text from "../../atoms/text";
import RecentItem from "../../organisms/recentItem";
import { useStore } from "../../../contexts/StoreContext";

const Recent = () => {
  const store = useStore();
  const [mediaData, setMediaData] = useState([]);
  const [recentData, setRecentData] = useState([]);

  useEffect(() => {
    getAllMedia();
  }, []);

  function getAllMedia() {
    fetch(`../../mediaData.json`)
      .then((response) => response.json())
      .then((data) => {
        setMediaData(data);
      });
  }

  useEffect(() => {
    if (mediaData.length > 0) {
      const newRecentData = [];
      store.lastPlayed.forEach((element) => {
        const song = mediaData.find((item) => item.id === element);
        newRecentData.push(song);
      });

      setRecentData(newRecentData);
    }
  }, [store.lastPlayed, mediaData]);

  return (
    <RecentContainer>
      <Text label="Last Played" color="textPrimary" size="sm" />

      {recentData
        .slice(0)
        .reverse()
        .map((item, index) => (
          <RecentItem
            key={index}
            data={item}
            id={item.id}
            song={item.song}
            artist={item.artist}
          />
        ))}
    </RecentContainer>
  );
};

export default Recent;
