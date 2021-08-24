import React from 'react'

import './styles.scss'
import InputPrimary from '../../inputPrimary'

export default function SearchLocationForm() {
  return (
    <form className='search-location-form'>
      <div className='search-location-form__form-wrapper'>
        <label htmlFor="townPicker">
          Город
        </label>

        <InputPrimary
          name="townPicker"
          placeholder='Начните вводить город...'
        />
      </div>

      <div className='search-location-form__form-wrapper'>
        <label htmlFor="pickUpPoint">
          Пункт выдачи
        </label>

        <InputPrimary
          name="pickUpPoint"
          placeholder='Начните вводить пункт...'
        />
      </div>
    </form>
  )
}
