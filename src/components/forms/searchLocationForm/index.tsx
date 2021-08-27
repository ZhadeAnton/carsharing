import React from 'react'

import './styles.scss'
import * as IMap from '../../../interfaces/mapInterfaces'
import InputAutoComplete from '../../inputs/inputAutoComplete'

interface Props {
  town: string,
  pickUp: string,
  coordinatesByPickedTown: IMap.IMark | null,
  onSelectTown: IMap.IFnSelectTown,
  onSelectPickUp: IMap.IFnSelectPickUp,
  onSetCoordinates: IMap.IFnSelectCoordinates,
}

export default function SearchLocationForm(props: Props) {
  return (
    <form className='search-location-form'>
      <div className='search-location-form__form-wrapper'>
        <h6 className='search-location-form__title'>
          Город
        </h6>

        <InputAutoComplete
          placeholder='Начните вводить город...'
          value={props.town}
          onChange={props.onSelectTown}
          onSetCoordinates={props.onSetCoordinates}
        />
      </div>

      <div className='search-location-form__form-wrapper'>
        <h6 className='search-location-form__title'>
          Пункт выдачи
        </h6>

        <InputAutoComplete
          placeholder='Начните вводить пункт...'
          value={props.pickUp}
          onChange={props.onSelectPickUp}
          coordinates={props.coordinatesByPickedTown}
          isAddress
        />
      </div>
    </form>
  )
}
