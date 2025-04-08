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
const MAP_WIDTH = 500;
const MAP_HEIGHT = 300;

// If you need to define props, create an interface
interface MapDisplayMultiProps {
    // Add any props here if needed
    children: {
        coords: LatLngExpression
        completed: boolean
        title: string
        id: number
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

const MapDisplayMulti = ({ children, primary, height = MAP_HEIGHT, width = MAP_WIDTH }: MapDisplayMultiProps) => {
    // console.log(JSON.stringify(children));
    const MainIcon = L.divIcon({
        html: '⭐',
        className: 'emoji-icon',
        iconSize: [20, 20],
        iconAnchor: [12, 24],
    });
    const CompletedIcon = L.divIcon({
        html: '☑️',
        className: 'emoji-icon',
        iconSize: [15, 15],
        iconAnchor: [10, 12],
    });
    const LocationIcon = L.divIcon({
        html: '🎯',
        className: 'emoji-icon',
        iconSize: [20, 20],
        iconAnchor: [12, 24],
    });
    const coords = children.map(item => item.coords);
    const combined = [...coords, primary];

    const changeSearchFormParent = (id: string) => {
        const searchTitle = document.getElementById('searchTitle') as HTMLInputElement;
        const searchParentId = document.getElementById('searchFormParentId') as HTMLInputElement;

        const searchFormId = document.getElementById('searchform-id') as HTMLInputElement;
        const searchFormSubmit = document.getElementById('searchFormSubmit') as HTMLInputElement;

        if (searchTitle) searchTitle.value = '';
        if (searchParentId) searchParentId.value = '';
        if (searchFormId) searchFormId.value = id;
        if (searchFormSubmit) searchFormSubmit.click();
    };
    return (
        <div style={{ height, width, border: '1px solid grey' }}>
            <style>
                {`
                    .emoji-icon {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 24px;
                        background: none;
                        border: 1px solid white;
                        border-radius: 50%;
                    }
                `}
            </style>
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
                    <Marker
                        key={index}
                        position={location.coords}
                        icon={CompletedIcon}
                        eventHandlers={{
                            click: () => {
                                console.log(`Clicked location: ${location.title}-${location.id}`);
                                changeSearchFormParent(location.id + '');
                            },
                        }}
                    />
                ) : (
                    <Marker
                        key={index}
                        position={location.coords}
                        icon={LocationIcon}
                        eventHandlers={{
                            click: () => {
                                console.log(`Clicked location: ${location.title}-${location.id}`);
                                changeSearchFormParent(location.id + '');
                            },
                        }}
                    />
                ))}
                {primary && (
                    <Marker position={primary} icon={MainIcon} />
                )}
                {/* Fit bounds to the coordinates */}
                <FitBounds coordinates={combined} />
            </MapContainer>
        </div>

    )
};

export default MapDisplayMulti;
