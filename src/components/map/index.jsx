import React, { useCallback, useRef } from 'react'
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from '@react-google-maps/api';

import * as settings from './mapSettings.ts'

export default function CustomMap({markers, onAddMark}) {
  const mapRef = useRef();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: settings.mapAPIKey,
    libraries: settings.libraries,
  });

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleMapClick = (event) => {
    onAddMark({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    })
  }

  return (
    isLoaded ? (
      <GoogleMap
        id="map"
        mapContainerStyle={settings.mapContainerStyle}
        zoom={12}
        center={settings.center}
        options={{...settings.options}}
        onLoad={onMapLoad}
        onClick={(event) => handleMapClick(event)}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: `/location-marker.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(18, 18),
            }}
          />
        ))}
      </GoogleMap>
    ) : <></>
  )
}
