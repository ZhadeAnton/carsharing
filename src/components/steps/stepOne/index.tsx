import React from 'react'

import './styles.scss'
import * as IMap from '../../../interfaces/mapInterfaces'
import OrderInfo from '../../forms/orderInfo'
import CustomMap from '../../map'

interface Props {
  town: string,
  pickUp: string,
  coordinatesByPickedTown: IMap.IMark | null,
  markers: Array<IMap.IMark>,
  onAddMark: IMap.IFnSelectAddMarker,
  onSetTown: IMap.IFnSelectTown,
  onSetPickUp: IMap.IFnSelectPickUp,
  handleSelectCoordinates: IMap.IFnSelectCoordinates
}

export default function StepOne(props: Props) {
  const orderFields = [{title: 'Пункт выдачи', value: 'Ульяновск, Наримова 42'}]

  return (
    <section className='step-one step'>
      <div className='step-one__left step__left'>
        <div className='step-one__left--map'>
          <CustomMap
            markers={props.markers}
            town={props.town}
            pickUp={props.pickUp}
            coordinatesByPickedTown={props.coordinatesByPickedTown}
            onAddMark={props.onAddMark}
            onSetTown={props.onSetTown}
            onSetPickUp={props.onSetPickUp}
            onSelectCoordinates={props.handleSelectCoordinates}
          />
        </div>
      </div>

      <div className='step-one__right step__right'>
        <OrderInfo
          orderFields={orderFields}
          lowPrice={8000}
          highPrice={12000}
        />
      </div>
    </section>
  )
}
