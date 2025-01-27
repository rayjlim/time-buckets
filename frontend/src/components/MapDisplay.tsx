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
    zoom?: number;
    height?: number;
    width?: number;
}

const MapDisplay: React.FC<MapDisplayProps> = ({ center, zoom = 6, height = 300, width = 500 }) => {

    return (
        <div style={{ height, width, border: '1px solid blue' }}>
            <MapContainer
                center={center}
                zoom={zoom}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center} />
            </MapContainer>
        </div>

    )
};

export default MapDisplay;
