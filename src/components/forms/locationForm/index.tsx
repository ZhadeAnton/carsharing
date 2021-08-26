import React from 'react'

import './styles.scss'
import InputAutoComplete from '../../inputs/selectPrimary'

export default function SearchLocationForm() {
  return (
    <form className='search-location-form'>
      <div className='search-location-form__form-wrapper'>
        <h6 className='search-location-form__title'>
          Город
        </h6>

        <InputAutoComplete placeholder='Начните вводить город...' />
      </div>

      <div className='search-location-form__form-wrapper'>
        <h6 className='search-location-form__title'>
          Пункт выдачи
        </h6>

        <InputAutoComplete placeholder='Начните вводить пункт...' />
      </div>
    </form>
  )
}
