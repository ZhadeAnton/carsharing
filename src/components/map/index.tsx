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
import useSearchByLatLng from '../../hooks/useSearchByLatLng';

export default function CustomMap() {
  const mapRef = useRef();
  const searchPickUp = useSearchPickUp()
  const searchBylng = useSearchByLatLng()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const markers = state.location.markers
  const mapCenter = state.location.mapCenter
  const mapZoom = state.location.mapZoom
  const selectedTown = state.location.selectedTown
  const selectedPickUp = state.location.selectedPickUp

  useMemo(() => {
    if (selectedTown && selectedPickUp) searchPickUp(selectedTown + selectedPickUp)
  }, [selectedPickUp])

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
    searchBylng({lat, lng})
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
            zoom={mapZoom}
            center={mapCenter}
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
