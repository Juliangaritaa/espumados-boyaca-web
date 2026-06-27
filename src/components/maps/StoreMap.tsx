import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { locationData } from "@/data/location";

export function StoreMap() {
  return (
    <MapContainer
      center={[locationData.coordinates.lat, locationData.coordinates.lng]}
      zoom={16}
      scrollWheelZoom={false}
      className="h-full w-full rounded-3xl"
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={[locationData.coordinates.lat, locationData.coordinates.lng]}
      >
        <Popup>
          <strong>Espumados Boyacá</strong>

          <br />

          {locationData.address}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
