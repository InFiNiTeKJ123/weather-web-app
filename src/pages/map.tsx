import React from "react"
import 'leaflet/dist/leaflet.css';
import { Box } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";
import CombineLayer from "../components/map_layers/combine-layer";

function Map() {
    return (
        <Box>
            <MapContainer center={[13, 100]} zoom={6} style={{ height: "92vh" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <CombineLayer />
            </MapContainer>
        </Box>
    )
}

export default Map