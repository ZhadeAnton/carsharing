import { useCallback, useRef } from 'react'
import { useLoadScript } from '@react-google-maps/api';

import * as settings from './mapSettings'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook'
import * as IMap from '../../interfaces/mapInterfaces'
import {
  addMark,
  setCoodrinates,
  setPickUp,
  setTown
} from '../../redux/location/locationActionCreators'

export default function useMapContainer() {
  const mapRef = useRef();
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const markers = state.location.markers
  const town = state.location.town
  const pickUp = state.location.pickUp
  const coordinatesByPickedTown = state.location.coordinatesByPickedTown

  const mapContainerStyle = settings.mapContainerStyle
  const center = settings.center
  const options = settings.options
  const zoom = settings.zoom

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: settings.mapAPIKey,
    libraries: settings.libraries,
  });

  const handleSelectTown: IMap.IFnSelectTown = (town) => {
    dispatch(setTown(town))
  }

  const handleSelectPickUp: IMap.IFnSelectPickUp = (pickUp) => {
    dispatch(setPickUp(pickUp))
  }

  const handleSelectCoordinates: IMap.IFnSelectCoordinates = (coords) => {
    dispatch(setCoodrinates(coords))
  }

  const handleMapClick = (event: any) => {
    dispatch(addMark({
      lat: event.latLng.lat() as IMap.IMark['lat'],
      lng: event.latLng.lng() as IMap.IMark['lng'],
    }))
  }


  return (
    {
      state: {
        markers, town, pickUp, coordinatesByPickedTown
      },
      handlers: {
        handleSelectTown, handleSelectPickUp, handleSelectCoordinates, handleMapClick
      },
      settings: {
        onMapLoad, isLoaded, mapContainerStyle, center, options, zoom
      }
    }
  )
}
