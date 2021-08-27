import React, { useCallback, useRef } from 'react'
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from '@react-google-maps/api';

import './styles.scss'
import * as settings from './mapSettings'
import * as IMap from '../../interfaces/mapInterfaces'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook';
import SearchLocationForm from '../forms/searchLocationForm/index'
import {
  addMark,
  setCoodrinates,
  setPickUp,
  setTown
} from '../../redux/location/locationActionCreators';

export default function CustomMap() {
  const mapRef = useRef();
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const markers = state.location.markers
  const town = state.location.town
  const pickUp = state.location.pickUp
  const coordinatesByPickedTown = state.location.coordinatesByPickedTown

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: settings.mapAPIKey,
    libraries: settings.libraries,
  });

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleMapClick = (event: any) => {
    dispatch(addMark({
      lat: event.latLng.lat() as IMap.IMark['lat'],
      lng: event.latLng.lng() as IMap.IMark['lng'],
    }))
  }

  const handleSelectTown: IMap.IFnSelectTown = (town) => {
    dispatch(setTown(town))
  }

  const handleSelectPickUp: IMap.IFnSelectPickUp = (pickUp) => {
    dispatch(setPickUp(pickUp))
  }

  const handleSelectCoordinates: IMap.IFnSelectCoordinates = (coords) => {
    dispatch(setCoodrinates(coords))
  }

  return (
    isLoaded ? (
      <div className='map'>
        <div className='map__search-form'>
          <SearchLocationForm
            town={town}
            pickUp={pickUp}
            coordinatesByPickedTown={coordinatesByPickedTown}
            onSelectTown={handleSelectTown}
            onSelectPickUp={handleSelectPickUp}
            onSetCoordinates={handleSelectCoordinates}
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
          {markers.map((marker: IMap.IMark) => (
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
