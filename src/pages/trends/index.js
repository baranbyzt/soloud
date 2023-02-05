import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";
import Row from "../../components/atoms/row";
import Column from "../../components/atoms/column";
import Text from "../../components/atoms/text";
import MediaItem from "../../components/organisms/mediaItem";
import PieChart from "../../components/organisms/pieChart";
import { useStore } from "../../contexts/StoreContext";

const sampleData = [
  { name: "Pop", y: 130, color: "#AB57CF", image: "genre-pop" },
  { name: "HipHop", y: 104, color: "#4C96EB", image: "genre-hiphop" },
  { name: "Rock", y: 98, color: "#86E364", image: "genre-rock" },
  { name: "Latin", y: 78, color: "#FFC64A", image: "genre-latin" },
  { name: "Dance", y: 86, color: "#F26F7A", image: "genre-dance" },
];

const options = {
  chart: {
    type: "pie",
    width: null,
    height: null,
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
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "Genre",
      data: sampleData,
      size: "90%",
      innerSize: "80%",
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
      <Row padding="30px" wrap="true">
        <Column
          xs={24}
          sm={24}
          md={12}
          lg={12}
          direction="column"
          justify="center"
          align="center"
        >
          <Text label="Distribution" color="textPrimary" size="lg" />
          <PieChart options={options} data={sampleData} />
        </Column>
        <Column xs={24} sm={24} md={12} lg={12} direction="column">
          <Text label="Top 10" color="textPrimary" size="lg" />
          {mediaData.map((item, index) => (
            <MediaItem
              key={index}
              id={item.id}
              favorite={store.favorites.includes(item.id)}
              song={item.song}
              artist={item.artist}
              playCount={item.playCount}
            />
          ))}
        </Column>
      </Row>
    </PageLayout>
  );
};

export default Trends;
