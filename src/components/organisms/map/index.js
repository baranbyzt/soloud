import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import * as ol from "ol";
import * as olSource from "ol/source";
import { MapContainer } from "./style";
import { fromLonLat } from "ol/proj";
import OLTileLayer from "ol/layer/Tile";

const Map = ({ children, zoom, center, data }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    const view = new ol.View({
      center: center,
      zoom: zoom,
    });
    let mapObject = new ol.Map({
      target: "map",
      layers: [
        new OLTileLayer({
          preload: 4,
          source: new olSource.OSM(),
        }),
      ],
      view: view,
    });
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);
  }, []);

  useEffect(() => {
    if (map && data) {
      data.forEach((element) => {
        var marker_el = document.getElementById(`marker${element.id}`);
        var marker = new ol.Overlay({
          position: fromLonLat(element.pos),
          positioning: "center-center",
          element: marker_el,
          dragging: false,
        });
        map.addOverlay(marker);
      });
    }

    //eslint-disable-next-line
  }, [map, data]);

  return <MapContainer ref={mapRef}>{children}</MapContainer>;
};
export default Map;
