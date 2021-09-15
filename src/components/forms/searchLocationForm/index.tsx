import React from 'react'

import './styles.scss'
import InputAutoComplete from '../../inputs/inputAutoComplete'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { setPickUp, setTown } from '../../../redux/location/locationActionCreators'
import { pickUpsSelector } from '../../../redux/location/locationSelectors'

export default function SearchLocationForm() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const selectedTown = state.location.selectedTown
  const selectedPickUp = state.location.selectedPickUp
  const towns = state.location.towns
  const pickUps = pickUpsSelector(state)

  const handleSelectTown = (town: string) => {
    dispatch(setTown(town))
  }

  const handleSelectPickUp = (pickUp: string) => {
    dispatch(setPickUp(pickUp))
  }

  return (
    <form className='search-location-form'>
      <div className='search-location-form__form-wrapper'>
        <h6 className='search-location-form__title'>
          Город
        </h6>

        <InputAutoComplete
          array={towns}
          value={selectedTown}
          placeholder='Начните вводить город...'
          type='town'
          onChange={handleSelectTown}
        />
      </div>

      <div className='search-location-form__form-wrapper'>
        <h6 className='search-location-form__title'>
          Пункт выдачи
        </h6>

        <InputAutoComplete
          array={pickUps}
          value={selectedPickUp}
          placeholder='Начните вводить пункт...'
          type='pickUp'
          isDisable={!selectedTown}
          isForceClear={!selectedTown}
          onChange={handleSelectPickUp}
        />
      </div>
    </form>
  )
}
