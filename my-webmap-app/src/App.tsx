import React, { useEffect, useRef } from "react";
import "ol/ol.css"; // Importation des styles d'OpenLayers
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "./App.css"; // Styles séparés pour une meilleure gestion

const App: React.FC = () => {
  const mapElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapElement.current) {
      new Map({
        target: mapElement.current,
        layers: [
          new TileLayer({
            source: new OSM(), // Fond de carte OSM
          }),
        ],
        view: new View({
          center: [0, 0], // Coordonnées en projection EPSG:3857
          zoom: 2, // Niveau de zoom initial
        }),
      });
    }
  }, []);

  return (
    <div className="app-container">
      <div className="map-container" ref={mapElement}></div>
    </div>
  );
};

export default App;
