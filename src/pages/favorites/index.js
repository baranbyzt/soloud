import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";
import Row from "../../components/atoms/row";
import Column from "../../components/atoms/column";
import { useStore } from "../../contexts/StoreContext";
import MediaBox from "../../components/organisms/mediaBox";
import Text from "../../components/atoms/text";

const Favorites = () => {
  const store = useStore();
  const [favorites, setFavorites] = useState([]);
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    getAllMedia();
  }, []);

  useEffect(() => {
    if (mediaData.length > 0) {
      const favoriteMedia = mediaData.filter((item) =>
        store.favorites.includes(item.id)
      );
      setFavorites(favoriteMedia);
    }
  }, [store.favorites, mediaData]);

  function getAllMedia() {
    fetch(`../../mediaData.json`)
      .then((response) => response.json())
      .then((data) => {
        setMediaData(data);
      });
  }

  return (
    <PageLayout>
      <Row padding="30px 30px 0 30px">
        <Column xs={24} sm={24} md={24} lg={24}>
          <Text label="Favorites" color="textPrimary" size="lg" />
        </Column>
      </Row>
      <Row padding="0 30px" wrap="true">
        {favorites.length &&
          favorites.map((item, index) => (
            <MediaBox
              key={index}
              id={item.id}
              favorite={store.favorites.includes(item.id)}
              song={item.song}
              artist={item.artist}
            />
          ))}
      </Row>
    </PageLayout>
  );
};

export default Favorites;
