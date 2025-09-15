import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const PulsatingIcon = L.divIcon({
  className: "",
  html: `
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="8" fill="red">
        <animate attributeName="r" from="8" to="20" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="20" r="6" fill="red" />
    </svg>
  `,
  iconSize: [80, 80],
  iconAnchor: [40, 40],
});

const LocationMap = () => {
  return (
    <MapContainer
      center={[7.074503, 125.609234]}
      zoom={18}
      className="w-full h-[340px] md:h-[480px] lg:h-[600px] rounded-none border-0 shadow-none mt-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[7.074503, 125.609234]} icon={PulsatingIcon}>
        <Popup>Central Lab Ventures, Inc.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
