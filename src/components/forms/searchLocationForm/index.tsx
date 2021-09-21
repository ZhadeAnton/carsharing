import React, { useEffect } from 'react'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { setPickUp, setTown } from '../../../redux/location/locationActionCreators'
import { pickUpsSelector } from '../../../redux/location/locationSelectors'
import { IPickUp, ITown } from '../../../interfaces/mapInterfaces'
import useSearchMarkers from '../../../hooks/useSearchMarkers'
import InputAutoComplete from '../../inputs/inputAutoComplete'

export default function SearchLocationForm() {
  const searchMarkers = useSearchMarkers()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const selectedTown = state.location.selectedTown
  const selectedPickUp = state.location.selectedPickUp
  const towns = state.location.towns
  const pickUps = pickUpsSelector(state)

  useEffect(() => {
    searchMarkers(pickUps)
  }, [selectedTown])

  const handleSelectItem = (item: ITown | IPickUp) => {
    'address' in item ? dispatch(setPickUp(item)) : dispatch(setTown(item))
  }

  const handleChangeTown = (town: string) => {
    const result = {...selectedTown, name: town} as ITown
    dispatch(setTown(result))
  }

  const handleChangePickUp = (pickUp: string) => {
    const result = {...selectedPickUp, address: pickUp} as IPickUp
    dispatch(setPickUp(result))
  }

  return (
    <form className='search-location-form'>
      <div className='search-location-form__form-wrapper'>
        <h6 className='search-location-form__title'>
          Город
        </h6>

        <InputAutoComplete
          array={towns}
          value={selectedTown?.name ?? ''}
          placeholder='Начните вводить город...'
          type='town'
          onItemClick={handleSelectItem}
          onChange={handleChangeTown}
        />
      </div>

      <div className='search-location-form__form-wrapper'>
        <h6 className='search-location-form__title'>
          Пункт выдачи
        </h6>

        <InputAutoComplete
          array={pickUps}
          value={selectedPickUp?.address ?? ''}
          placeholder='Начните вводить пункт...'
          type='pickUp'
          isDisable={!selectedTown}
          onItemClick={handleSelectItem}
          onChange={handleChangePickUp}
        />
      </div>
    </form>
  )
}
