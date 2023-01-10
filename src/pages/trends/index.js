import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import PageLayout from "../../components/templates/pageLayout";
import Grid from "../../components/atoms/grid";
import Text from "../../components/atoms/text";
import MediaItem from "../../components/organisms/mediaItem";
import { useStore } from "../../contexts/StoreContext";

const options = {
  chart: {
    type: "pie",
    width: null,
    height: 700,
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },
  yAxis: {
    title: {
      text: "Total percent market share",
    },
  },
  plotOptions: {
    pie: {
      shadow: false,
      borderWidth: 0,
    },
  },
  tooltip: {
    formatter: function () {
      return "<b>" + this.point.name + "</b>: " + this.y + " %";
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: "Genre",
      data: [
        ["Pop", 130],
        ["HipHop", 104],
        ["Rock", 98],
        ["Latin", 78],
        ["Dance", 86],
      ],
      size: "90%",
      innerSize: "70%",
      showInLegend: true,
      dataLabels: {
        enabled: false,
      },
    },
  ],
};

const Trends = () => {
  const [mediaData, setMediaData] = useState([]);
  const store = useStore();

  useEffect(() => {
    getAllMedia();
  }, []);

  function getAllMedia() {
    fetch(`../../mediaData.json`)
      .then((response) => response.json())
      .then((data) => {
        setMediaData(
          data
            .sort((a, b) =>
              a.playCount > b.playCount ? -1 : Number(a.playCount < b.playCount)
            )
            .filter((item, index) => index < 10)
        );
      });
  }

  return (
    <PageLayout>
      <Grid direction="row" padding="30px" wrap>
        <Grid sm={24} md={12} lg={12}>
          <Text label="Distribution" color="textPrimary" size="lg" />
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Grid>
        <Grid sm={24} md={12} lg={12}>
          <Text label="Top 10" color="textPrimary" size="lg" />
          {mediaData.map((item) => (
            <MediaItem
              id={item.id}
              favorite={store.favorites.includes(item.id)}
              song={item.song}
              artist={item.artist}
              playCount={item.playCount}
            />
          ))}
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Trends;
