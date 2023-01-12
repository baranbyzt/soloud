import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";
import Grid from "../../components/atoms/grid";
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
      <Grid direction="row" padding="30px" wrap>
        <Grid sm={24} md={24} lg={24}>
          <Text label="Favorites" color="textPrimary" size="lg" />
        </Grid>
        <Grid>
          {favorites.length &&
            favorites.map((item) => (
              <MediaBox
                id={item.id}
                favorite={store.favorites.includes(item.id)}
                song={item.song}
                artist={item.artist}
              />
            ))}
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Favorites;
