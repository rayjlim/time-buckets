import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// If you need to define props, create an interface
interface MapDisplayProps {
  // Add any props here if needed
  center: [number, number];
}

const MapDisplay: React.FC<MapDisplayProps> = ({ center }) => {
    console.log(center);
    return (
  <div style={{ height: '300px', width: '500px', border: '1px solid blue' }}>
    <MapContainer
      center={center}
      zoom={14}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup.sd
        </Popup>
      </Marker>
    </MapContainer>
  </div>

)};

export default MapDisplay;
