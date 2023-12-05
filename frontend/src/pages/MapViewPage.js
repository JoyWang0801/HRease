"use client"

import { React, useState } from "react";
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import BubbleComponent from "../components/BubbleComponent";

export default function MapViewPage() {
    const position = { lat: 51.11949664317023, lng: -114.04654247485743 };
    const [open, setOpen] = useState(false);

    return (
        <APIProvider apiKey={process.env.REACT_APP_MAP_TOKEN}>
            <div style={{ height: '100vh', width: '100%' }}>
                <Map zoom={12.5} center={position} mapId={process.env.REACT_APP_MAP_ID}>
                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                        <BubbleComponent />
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    );
}
