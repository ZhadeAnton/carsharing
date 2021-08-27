import React, { useCallback, useRef } from 'react'
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from '@react-google-maps/api';

import * as settings from './mapSettings.ts'
import './styles.scss'
import SearchLocationForm from '../forms/searchLocationForm/index'

export default function CustomMap(props) {
  const {
    markers,
    town,
    pickUp,
    coordinatesByPickedTown,
    onAddMark,
    onSetTown,
    onSetPickUp,
    onSelectCoordinates
  } = props

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
      <div className='map'>
        <div className='map__search-form'>
          <SearchLocationForm
            town={town}
            pickUp={pickUp}
            coordinatesByPickedTown={coordinatesByPickedTown}
            onSetCoordinates={onSelectCoordinates}
            onSelectTown={onSetTown}
            onSelectPickUp={onSetPickUp}
          />
        </div>

        <h6 className='map__title'>
          Выбрать на карте:
        </h6>

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
      </div>
    ) : <></>
  )
}
