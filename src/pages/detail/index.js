import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";
import Video from "../../components/atoms/video";
import Text from "../../components/atoms/text";
import Space from "../../components/atoms/space";
import Row from "../../components/atoms/row";
import Column from "../../components/atoms/column";
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
      <Row padding="30px 30px 0 30px">
        <Column xs={24} sm={24} md={24} lg={24} direction="column">
          <Text label={detailData?.artist} size="lg" color="textPrimary" />
          <Text label={detailData?.song} height={20} color="textSecondary" />
        </Column>
      </Row>
      <Row padding="30px">
        <Column xs={24} sm={24} md={24} lg={24}>
          <Video id={detailData?.mediaId} />
        </Column>
      </Row>
    </PageLayout>
  );
};

export default Detail;
