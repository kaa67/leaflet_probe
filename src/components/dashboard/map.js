import { useEffect, useRef } from "react";
import L from 'leaflet';

const Map = () => {
    const ref = useRef();

    useEffect(() => {
        ref.current = L.map('map', {
            center: [44.9572, 34.1108], // Симферополь
            zoom: 8,
            layers: [
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap',
                }),
            ],
        });
    }, [ref]);

    return (
        <div id="map" ref={ref}></div>
    );
};

export default Map;
