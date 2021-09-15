import React, { useRef, useCallback } from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

import './styles.scss'
import * as settings from './mapSettings'
import * as IMap from '../../interfaces/mapInterfaces'
import SearchLocationForm from '../forms/searchLocationForm/index'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook';
import {
  addMark,
} from '../../redux/location/locationActionCreators';

export default function CustomMap() {
  const mapRef = useRef();
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const markers = state.location.markers
  const mapContainerStyle = settings.mapContainerStyle
  const center = settings.center
  const options = settings.options
  const zoom = settings.zoom

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    libraries: settings.libraries,
  });

  const handleMapClick = (event: any) => {
    dispatch(addMark({
      lat: event.latLng.lat() as IMap.IMark['lat'],
      lng: event.latLng.lng() as IMap.IMark['lng'],
    }))
  }

  return (
    isLoaded ? (
      <div className='custom-map'>
        <div className='custom-map__search-form'>
          <SearchLocationForm
          />
        </div>

        <h6 className='custom-map__title'>
          Выбрать на карте:
        </h6>

        <div className='custom-map__canvas'>
          <GoogleMap
            id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={zoom}
            center={center}
            options={{...options}}
            onLoad={onMapLoad}
            onClick={(event) => handleMapClick(event)}
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
              />
            ))}
          </GoogleMap>
        </div>
      </div>
    ) : <></>
  )
}
