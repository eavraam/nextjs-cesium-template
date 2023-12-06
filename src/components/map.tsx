'use client'    // Client component

import { Ion, IonResource, createWorldTerrainAsync, Viewer, CesiumTerrainProvider } from "cesium";
import { useEffect } from "react";

// This is the default access token
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

export default () => {
    useEffect(() => {
        const initializeViewer = async () => {
            try {
                const viewer = new Viewer("cesiumContainer", {
                    // Await the promise
                    terrainProvider: await createWorldTerrainAsync() 
                });
            } catch (error) {
                console.log(error);
            }
        };

        initializeViewer();
    }, []);

    return <div id="cesiumContainer" />;
};