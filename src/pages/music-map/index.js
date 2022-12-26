import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";
import Map from "../../components/organisms/map";
import MapItem from "../../components/molecules/mapItem";
import { fromLonLat, get } from "ol/proj";

const mapItems = [
  {
    id: 1,
    label: "Item01",
    imageCode: "media02",
    pos: [10.372, 48.2],
  },
  {
    id: 2,
    label: "Item02",
    imageCode: "media07",
    pos: [17.1, 35.208],
  },
  {
    id: 3,
    label: "Item03",
    imageCode: "media15",
    pos: [26.88, -10.208],
  },
];

const MusicMap = () => {
  const [center, setCenter] = useState([30, 30]);
  const [zoom, setZoom] = useState(2);

  return (
    <PageLayout>
      <Map center={fromLonLat(center)} zoom={zoom} data={mapItems}></Map>
      {mapItems.map((item) => (
        <MapItem id={item.id} imageCode={item.imageCode} />
      ))}
    </PageLayout>
  );
};
export default MusicMap;
