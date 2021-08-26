import React from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/usePreTypedHook';
import { IMark } from '../interfaces/mapInterfaces';
import { addMark } from '../redux/location/locationActionCreators';
import OrderPage from '../routes/orderPage';

export default function OrderPageContainer() {
  const markers = useAppSelector((state) => state.location.markers)

  const dispatch = useAppDispatch()

  const handleAddMarker = (mark: IMark) => {
    dispatch(addMark(mark))
  }

  return (
    <OrderPage
      markers={markers}
      onAddMark={handleAddMarker}
    />
  )
}
