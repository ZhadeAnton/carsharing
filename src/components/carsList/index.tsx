import React, { useState, useEffect, useRef } from 'react'

import './styles.scss'
import { ICar } from '../../interfaces/carsInterfaces'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook'
import * as carActions from '../../redux/car/carActionCreators'
import DefaultCar from '../../assets/PNG/default-car.png'
import Car from './carItem'

export default function CarsList() {
  const rootRef: any = useRef()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [isFetchingNewCars, setIsFetchingNewCars] = useState(true)
  const [start, setStart] = useState(0)

  const carsList = state.car.carsList
  const carListCurrentPage = state.car.carListCurrentPage
  const carsOnTheServer = state.car.carsCount
  const carsSortBy = state.car.carsSortBy
  const selectedCar = state.car.selectedCar

  const rowHeight = 225
  const visibleRows = 3
  const maxRows = Math.floor(carsList.length / 2)

  useEffect(() => {
    setStart(0)

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

  useEffect(() => {
    if (!isFetchingNewCars) {
      rootRef.current.addEventListener('scroll', onScroll)
    }

    return () => {
      rootRef.current.removeEventListener('scroll', onScroll)
    }
  })

  const handleSelectCar = (car: ICar) => {
    dispatch(carActions.selectCar(car))
  }

  const isEndOfList = () => {
    return (start + (visibleRows + 1)) > maxRows
  }

  const isLoadMoreItems = (scrollTop: number) => {
    return ((maxRows - visibleRows) * rowHeight) - scrollTop <= 50
    && carsList.length < carsOnTheServer
  }

  const onScroll = (e: any) => {
    setStart(Math.floor(e.target.scrollTop / rowHeight))
    const scrollTop = e.target.scrollTop

    if (isLoadMoreItems(scrollTop)) {
      setIsFetchingNewCars(true)
    }
  }

  function getTopHeight() {
    return rowHeight * start
  }

  function getBottomHeight() {
    if (!isEndOfList()) {
      return rowHeight * (carsList.length - (start + visibleRows))
    } else {
      return 0
    }
  }

  const Row = ({ index, carItems }: any) => {
    const items = []
    const fromIndex = index * 2
    const toIndex = Math.min(fromIndex + 2, carItems.length)

    for (let i = fromIndex; i < toIndex; i++) {
      const carItem = carItems[i]
      if (carItem.thumbnail.path.includes('/files')) {
        carItem.thumbnail.path = DefaultCar
      }

      items.push(
          <Car
            key={carItem.id}
            car={carItem}
            selected={selectedCar?.id === carItem.id}
            onSelectCart={handleSelectCar}
          />
      )
    }

    return (
      <div className='cars__row'>
        {items}
      </div>
    )
  }

  return (
    <div
      className='cars-list'
      style={{ height: rowHeight * (visibleRows + 1)}}
      ref={rootRef}
    >
      <div style={{ height: getTopHeight() }} />
      {
        carsList
            .slice(start, start + (visibleRows + 1))
            .map((car, index) => {
              return (
                <Row
                  key={'' + index + start + car.id}
                  carItems={carsList}
                  index={start + index}
                />
              )
            })
      }
      <div style={{ height: getBottomHeight() }} />
    </div>
  )
}
