import React from "react";
import PageLayout from "../../components/templates/pageLayout";
import Map from "../../components/organisms/map";
import MapItem from "../../components/molecules/mapItem";
import { fromLonLat } from "ol/proj";

const mapItems = [
  {
    id: 1,
    name: "April Oneal",
    imageCode: "portrait01",
    song: "Cooped Up",
    pos: [10.37, 48.21],
  },
  {
    id: 2,
    name: "Amy White",
    imageCode: "portrait02",
    song: "La Sonora Dinamita",
    pos: [15.37, 50.18],
  },
  {
    id: 3,
    name: "Bengi Yılmaz",
    imageCode: "portrait03",
    song: "Anti-Hero",
    pos: [2.31, 47.21],
  },
  {
    id: 4,
    name: "Patrick Luc",
    imageCode: "portrait04",
    song: "Bring Me The Horizon",
    pos: [23.37, 44.21],
  },
  {
    id: 5,
    name: "Jürgen Klaus",
    imageCode: "portrait05",
    song: "I Ain’t Worried",
    pos: [6.32, 44.53],
  },
  {
    id: 6,
    name: "Raphaël Luis",
    imageCode: "portrait06",
    song: "These Are The Ways",
    pos: [15.37, 47.2],
  },
];

const MusicMap = () => {
  return (
    <PageLayout>
      <Map center={fromLonLat([14.03, 47.01])} zoom={6} data={mapItems}></Map>
      {mapItems.map((item, index) => (
        <MapItem
          key={index}
          id={item.id}
          name={item.name}
          song={item.song}
          imageCode={item.imageCode}
        />
      ))}
    </PageLayout>
  );
};
export default MusicMap;
