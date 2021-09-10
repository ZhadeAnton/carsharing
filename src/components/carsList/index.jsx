import React, { useState, useEffect } from 'react'
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  AutoSizer
} from 'react-virtualized';

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook'
import * as carActions from '../../redux/car/carActionCreators'
import DefaultCar from '../../assets/PNG/default-car.png'
import Car from './carItem'

export default function CarsList() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [isFetchingNewCars, setIsFetchingNewCars] = useState(true)

  const carsList = state.car.carsList
  const carListCurrentPage = state.car.carListCurrentPage
  const carsCount = state.car.carsCount
  const carsSortBy = state.car.carsSortBy
  const selectedCar = state.car.selectedCar

  useEffect(() => {
    switch (carsSortBy.value) {
      case 'Эконом':
        dispatch(carActions.getEconomyCars(0))
        break

      case 'Премиум':
        dispatch(carActions.getPremiumCars(0))
        break

      default:
        dispatch(carActions.getAllCars(0))
    }
  }, [carsSortBy])

  useEffect(() => {
    if (isFetchingNewCars) {
      switch (carsSortBy.value) {
        case 'Эконом':
          dispatch(carActions.getEconomyCars(carListCurrentPage))
          break

        case 'Премиум':
          dispatch(carActions.getPremiumCars(carListCurrentPage))
          break

        default:
          dispatch(carActions.getAllCars(carListCurrentPage))
      }
      setIsFetchingNewCars(false)
    }
  }, [isFetchingNewCars])

  const handleSelectCar = (car) => {
    dispatch(carActions.selectCar(car))
  }

  const onScroll = ({ clientHeight, scrollHeight, scrollTop }) => {
    if (scrollHeight - (scrollTop + clientHeight) < 75
      && carsList.length < carsCount) {
      setIsFetchingNewCars(true)
    }
  }

  const cache = new CellMeasurerCache({
    defaultHeight: 225,
    defaultWidth: 370,
    fixedHeight: true
  })

  const cellPositioner = createMasonryCellPositioner({
    cellMeasurerCache: cache,
    columnCount: 2,
    columnWidth: 370,
  })

  function cellRenderer({ index, key, parent, style }) {
    const carItem = carsList[index]

    if (carItem.thumbnail.path.includes('/files')) {
      carItem.thumbnail.path = DefaultCar
    }

    return (
      <CellMeasurer
        cache={cache}
        index={index}
        key={key}
        parent={parent}
      >
        <Car
          style={style}
          key={carItem.id}
          car={carItem}
          selected={selectedCar?.id === carItem.id}
          onSelectCart={() => handleSelectCar(carItem)}
        />
      </CellMeasurer>
    );
  }

  return (
    <AutoSizer>
      {
        ({ width, height }) => (
          <Masonry
            cellCount={carsList.length}
            cellMeasurerCache={cache}
            cellPositioner={cellPositioner}
            cellRenderer={cellRenderer}
            deferredMeasurementCache={cache}
            height={height}
            width={width}
            keyMapper={() => Math.random()}
            onScroll={onScroll}
          />
        )
      }
    </AutoSizer>

  )
}
