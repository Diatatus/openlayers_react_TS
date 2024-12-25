import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import "ol-ext/dist/ol-ext.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol-ext/dist/ol-ext.css";
import "ol-ext/dist/ol-ext.min.css";
import Overlay from "ol-ext/control/Overlay";
import Toggle from "ol-ext/control/Toggle";

const App: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current && menuRef.current) {
      // Initialiser la carte
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0], // Coordonnées en projection EPSG:3857
          zoom: 2, // Niveau de zoom initial
        }),
      });

      // Ajouter le contrôle Overlay (Menu)
      const menu = new Overlay({
        closeBox: true,
        className: "slide-left menu",
        content: menuRef.current,
      });
      map.addControl(menu);

      // Ajouter le bouton Toggle pour afficher/masquer le menu
      const toggleMenu = new Toggle({
        html: '<i class="fa fa-bars"></i>',
        className: "menu",
        title: "Menu",
        onToggle: () => menu.toggle(),
      });
      map.addControl(toggleMenu);
    }
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Carte */}
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
      {/* Menu */}
      <div id="menu" ref={menuRef} style={{ display: "none" }}>
        <h1>Menu</h1>
        <p style={{ borderBottom: "1px solid #999" }}>
          <i>ol.control.Overlay</i> peut être utilisé pour afficher un menu ou
          des informations au-dessus de la carte.
        </p>
        <div className="data" />
      </div>
    </div>
  );
};

export default App;
