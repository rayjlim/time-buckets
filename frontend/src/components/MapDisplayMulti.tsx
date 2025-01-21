import { useEffect } from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    useMap,
} from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// If you need to define props, create an interface
interface MapDisplayMultiProps {
    // Add any props here if needed
    coords: LatLngExpression[];
    height?: number;
    width?: number;
}

// Functional component to set the map bounds
const FitBounds = ({ coordinates }: { coordinates: LatLngExpression[] }) => {
    const map = useMap();

    useEffect(() => {
        if (coordinates.length > 0) {
            const bounds = L.latLngBounds(coordinates);
            map.fitBounds(bounds);
        }
    }, [map, coordinates]);

    return null;
};

const MapDisplayMulti: React.FC<MapDisplayMultiProps> = ({ coords, height = 300, width = 500 }) => {
    console.log(coords);
    return (
        <div style={{ height, width, border: '1px solid blue' }}>
            <MapContainer
                center={[0, 0]} // Default center
                zoom={2} // Default zoom
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {coords.map((coord, index) => (
                    <Marker key={index} position={coord} />
                ))}

                {/* Fit bounds to the coordinates */}
                <FitBounds coordinates={coords} />
            </MapContainer>
        </div>

    )
};

export default MapDisplayMulti;
