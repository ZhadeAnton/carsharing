import React, { useRef, useCallback, useMemo } from 'react'
import {
  GoogleMap,
  Marker,
  useLoadScript,
} from '@react-google-maps/api';

import './styles.scss'
import * as settings from './mapSettings'
import * as IMap from '../../interfaces/mapInterfaces'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook';
import { setCurrentMarker } from '../../redux/location/locationActionCreators';
import SearchLocationForm from '../forms/searchLocationForm/index'
import useSearchPickUp from '../../hooks/useSearchPickUp';

export default function CustomMap() {
  const mapRef = useRef();
  const searchPickUp = useSearchPickUp()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const markers = state.location.markers
  const currentTownLatLng = state.location.currentTownLatLng
  const currentPickUpLatLng = state.location.currentPickUpLatLng
  const selectedTown = state.location.selectedTown
  const selectedPickUp = state.location.selectedPickUp

  useMemo(() => {
    if (selectedTown && selectedPickUp) searchPickUp(selectedTown + selectedPickUp)
  }, [selectedPickUp])

  const mapCenter = {
    position: {
      lat: 54.3187,
      lng: 48.3978
    },
    zoom: 12
  }

  if (currentPickUpLatLng.lat !== 0 && currentPickUpLatLng.lng !== 0 && selectedPickUp) {
    mapCenter.position = currentPickUpLatLng
    mapCenter.zoom = 16
  } else {
    mapCenter.position = currentTownLatLng
    mapCenter.zoom = 12
  }

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    libraries: settings.libraries,
  });

  const handleClickByMarker = (e: any) => {
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()
    dispatch(setCurrentMarker({lat, lng}))
  }

  return (
    isLoaded ? (
      <div className='custom-map'>
        <div className='custom-map__search-form'>
          <SearchLocationForm />
        </div>

        <h6 className='custom-map__title'>
          Выбрать на карте:
        </h6>

        <div className='custom-map__canvas'>
          <GoogleMap
            id="map"
            mapContainerStyle={settings.mapContainerStyle}
            zoom={mapCenter.zoom}
            center={mapCenter.position}
            options={{...settings.options}}
            onLoad={onMapLoad}
          >
            { markers.map((marker: IMap.IMark) => (
              <Marker
                key={`${marker.lat}-${marker.lng}`}
                position={{ lat: marker.lat, lng: marker.lng }}
                icon={{
                  url: `./location-marker.svg`,
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(18, 18),
                }}
                onClick={(e) => handleClickByMarker(e)}
              />
            ))}
          </GoogleMap>
        </div>
      </div>
    ) : <></>
  )
}
