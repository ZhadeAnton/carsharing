import React from 'react'

import './styles.scss'
import InputAutoComplete from '../../inputs/inputAutoComplete'
import { useAppSelector } from '../../../hooks/usePreTypedHook'

export default function SearchLocationForm() {
  const state = useAppSelector((state) => state)

  const towns = state.location.towns

  return (
    <form className='search-location-form'>
      <div className='search-location-form__form-wrapper'>
        <h6 className='search-location-form__title'>
          Город
        </h6>

        <InputAutoComplete
          array={towns}
        />
      </div>

      <div className='search-location-form__form-wrapper'>
        <h6 className='search-location-form__title'>
          Пункт выдачи
        </h6>

        <InputAutoComplete
          array={towns}
        />
      </div>
    </form>
  )
}
