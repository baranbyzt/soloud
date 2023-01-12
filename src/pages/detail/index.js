import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";
import Video from "../../components/atoms/video";
import Text from "../../components/atoms/text";
import Space from "../../components/atoms/space";
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
      <Grid padding="30px">
        <Grid direction="row">
          <Grid>
            <Text label={detailData?.artist} size="lg" color="textPrimary" />
            <Text label={detailData?.song} height={20} color="textSecondary" />
          </Grid>
        </Grid>
        <Space height="30px" />
        <Grid direction="row">
          <Grid>
            <Video id={detailData?.mediaId} />
          </Grid>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Detail;
