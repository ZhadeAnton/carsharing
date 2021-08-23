import React, { useState } from 'react'
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from '@react-google-maps/api';

import mapStyles from './mapStyles'

const libraries = ['places']
const mapContainerStyle = {
  height: '100%'
}
const center = {
  lat: 54.3187,
  lng: 48.3978
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false,
};

export default function CustomMap() {
  const [markers, setMarkers] = useState([{lat: 54.3187, lng: 48.3978}])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAHsXVmKxiEc2J3QSK6wjzhGsWpMJvtTzk',
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    isLoaded ? (
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onLoad={onMapLoad}
        onClick={(event) => {
          setMarkers((current) => [
            ...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
            }])
        }}
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
