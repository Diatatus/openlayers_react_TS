import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import "ol/ol.css"; // Importation des styles d'OpenLayers
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
const App = () => {
    const mapElement = useRef(null);
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
    return (_jsxs("div", { children: [_jsx("h1", { children: "Carte OpenLayers avec React et TypeScript" }), _jsx("div", { ref: mapElement, style: { width: "100%", height: "90vh" } })] }));
};
export default App;
