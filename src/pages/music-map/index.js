import React from "react";
import PageLayout from "../../components/templates/pageLayout";
import Map from "../../components/organisms/map";
import MapItem from "../../components/molecules/mapItem";
import { fromLonLat } from "ol/proj";

const mapItems = [
  {
    id: 1,
    label: "Item01",
    imageCode: "media01",
    pos: [10.372, 48.215],
  },
  {
    id: 2,
    label: "Item02",
    imageCode: "media02",
    pos: [1.101, 23.208],
  },
  {
    id: 3,
    label: "Item03",
    imageCode: "media03",
    pos: [26.881, -10.208],
  },
  {
    id: 4,
    label: "Item04",
    imageCode: "media04",
    pos: [-75.372, 40.215],
  },
  {
    id: 5,
    label: "Item05",
    imageCode: "media05",
    pos: [-70.101, -10.208],
  },
  {
    id: 6,
    label: "Item06",
    imageCode: "media06",
    pos: [26.88, -10.208],
  },
  {
    id: 7,
    label: "Item07",
    imageCode: "media07",
    pos: [120.372, -20.215],
  },
  {
    id: 8,
    label: "Item08",
    imageCode: "media08",
    pos: [80.101, 60.208],
  },
  {
    id: 9,
    label: "Item09",
    imageCode: "media09",
    pos: [96.88, 10.208],
  },
  {
    id: 10,
    label: "Item10",
    imageCode: "media10",
    pos: [-15.818, 70.208],
  },
];

const MusicMap = () => {
  return (
    <PageLayout>
      <Map center={fromLonLat([30, 30])} zoom={2} data={mapItems}></Map>
      {mapItems.map((item) => (
        <MapItem id={item.id} label={item.label} imageCode={item.imageCode} />
      ))}
    </PageLayout>
  );
};
export default MusicMap;
