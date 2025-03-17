import { useEffect } from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    useMap,
    CircleMarker
} from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// If you need to define props, create an interface
interface MapDisplayMultiProps {
    // Add any props here if needed
    children: {
        coords: LatLngExpression
        completed: boolean
    }[];
    primary: LatLngExpression
    height?: number;
    width?: number;
}

// Functional component to set the map bounds
const FitBounds = ({ coordinates }: { coordinates: LatLngExpression[] }) => {
    const map = useMap();
    const filtered = coordinates.filter(x => x !== null);

    useEffect(() => {
        if (filtered.length > 0) {
            const bounds = L.latLngBounds(filtered);
            map.fitBounds(bounds);
        }
    }, [map, filtered, coordinates]);

    return null;
};

const MapDisplayMulti = ({ children, primary, height = 300, width = 500 }: MapDisplayMultiProps) => {
    const Red_MARKER = `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36.059" height="36.059" viewBox="0 0 36.059 36.059" style="transform:rotate(${0}deg)">
          <defs>
            <filter id="Path_10080" x="0" y="0" width="36.059" height="36.059" filterUnits="userSpaceOnUse">
              <feOffset input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="2.5" result="blur"/>
              <feFlood flood-opacity="0.161"/>
              <feComposite operator="in" in2="blur"/>
              <feComposite in="SourceGraphic"/>
            </filter>
          </defs>
          <g id="Group_8038" data-name="Group 8038" transform="translate(5719.5 1106.5)">
            <rect id="Rectangle_2670" data-name="Rectangle 2670" width="21" height="21" transform="translate(-5712 -1099)" fill="none"/>
            <g transform="matrix(1, 0, 0, 1, -5719.5, -1106.5)" filter="url(#Path_10080)">
              <path id="Path_10080-2" data-name="Path 10080" d="M15.4,12.766a6.414,6.414,0,0,0,1.781-5.634l-.446-2.55-2.55-.446A6.414,6.414,0,0,0,8.553,5.916L6.746,7.723c.234-.232-.845.866-.626.626l-2.96,2.96a2.644,2.644,0,0,0,0,3.735l3.114,3.114a2.644,2.644,0,0,0,3.735,0l2.96-2.96Z" transform="translate(19.2 2.96) rotate(45)" fill="${"red"}"/>
            </g>
          </g>
        </svg>
        `)}`;

    const RedIcon = L.icon({
        iconUrl: Red_MARKER,
        iconSize: [40, 40],
        iconAnchor: [12, 12],
        popupAnchor: [0, 0],
    });

    const coords = children.map(item => item.coords);
    const combined = [...coords, primary];
    return (
        <div style={{ height, width, border: '1px solid grey' }}>
            <MapContainer
                center={[0, 0]} // Default center
                zoom={2} // Default zoom
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {children.map((location, index) => location.completed ? (
                    <CircleMarker key={index} center={location.coords} radius={8}
                        pathOptions={{
                            fillColor: 'limegreen',
                            fillOpacity: 0.7,
                            color: 'white',
                            weight: 2
                        }} />
                ) : <Marker key={index} position={location.coords} />)}
                {primary && (
                    <Marker position={primary} icon={RedIcon} />
                )}
                {/* Fit bounds to the coordinates */}
                <FitBounds coordinates={combined} />
            </MapContainer>
        </div>

    )
};

export default MapDisplayMulti;
