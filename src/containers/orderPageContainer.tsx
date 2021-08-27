import React from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/usePreTypedHook';
import * as IMap from '../interfaces/mapInterfaces';
import {
  addMark,
  setCoodrinates,
  setPickUp,
  setTown
} from '../redux/location/locationActionCreators';
import OrderPage from '../routes/orderPage';

export interface IOrderPageContainer {
  town: string,
  pickUp: string,
  coordinatesByPickedTown: IMap.IMark | null,
  markers: Array<IMap.IMark>,
  handleAddMarker: IMap.IFnSelectAddMarker,
  handleSelectTown: IMap.IFnSelectTown,
  handleSelectPickUp: IMap.IFnSelectPickUp,
  handleSelectCoordinates: IMap.IFnSelectCoordinates
}

export default function OrderPageContainer() {
  const state = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  const markers = state.location.markers
  const town = state.location.town
  const pickUp = state.location.pickUp
  const coordinatesByPickedTown = state.location.coordinatesByPickedTown

  const handleAddMarker: IMap.IFnSelectAddMarker = (mark) => {
    dispatch(addMark(mark))
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
    <OrderPage
      town={town}
      pickUp={pickUp}
      coordinatesByPickedTown={coordinatesByPickedTown}
      markers={markers}
      handleAddMarker={handleAddMarker}
      handleSelectTown={handleSelectTown}
      handleSelectCoordinates={handleSelectCoordinates}
      handleSelectPickUp={handleSelectPickUp}
    />
  )
}
