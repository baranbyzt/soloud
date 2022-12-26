import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";
import Video from "../../components/atoms/video";
import Text from "../../components/atoms/text";
import Grid from "../../components/atoms/grid";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const { state } = useLocation();
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    if (state) {
      getOneMedia(state);
    }
  }, [state]);

  function getOneMedia(val) {
    fetch(`../../mediaData.json`)
      .then((response) => response.json())
      .then((data) => {
        setDetailData(data.filter((item) => item.id === val)[0]);
      });
  }

  return (
    <PageLayout>
      <Grid direction="row" padding="20px">
        <Grid>
          <Text label={detailData?.artist} size="lg" color="textPrimary" />
          <Text label={detailData?.song} size="md" color="textSecondary" />
        </Grid>
      </Grid>
      <Grid direction="row" padding="20px">
        <Grid>
          <Video id={detailData?.mediaId} />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Detail;
