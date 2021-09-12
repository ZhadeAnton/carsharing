import React, { useState, useEffect, useRef } from 'react'

import './styles.scss'
import { ICar } from '../../interfaces/carsInterfaces'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import * as carActions from '../../redux/car/carActionCreators'
import DefaultCar from '../../assets/PNG/default-car.png'
import Car from './carItem'
import { setCarsRowStart } from '../../redux/car/carActionCreators'
import { carsListSelector } from '../../redux/car/carSelectors'

export default function CarsList() {
  const listRef: any = useRef()
  const dispatch = useAppDispatch()
  const windowDimensions = useWindowDimensions()
  const state = useAppSelector((state) => state)
  const [rowHeight, setRowHeight] = useState(225)
  const [itemsPerRow, setItemsPerRow] = useState(2)
  const [visibleRows, setVisibleRows] = useState(3)
  const [isFetchingNewCars, setIsFetchingNewCars] = useState(true)

  const carsList = carsListSelector(state)
  const carListCurrentPage = state.car.carListCurrentPage
  const carsOnTheServer = state.car.carsCount
  const carsSortBy = state.car.carsSortBy
  const selectedCar = state.car.selectedCar
  const carRowsStart = state.car.carRowsStart
  const maxRows = Math.floor(carsList.length / itemsPerRow)

  useEffect(() => {
    dispatch(setCarsRowStart(0))

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
      listRef.current.onscroll = (e: any) => {
        console.log('dispatch')
        dispatch(setCarsRowStart((Math.floor(e.target.scrollTop / rowHeight))))
        const scrollTop = e.target.scrollTop

        if (isLoadMoreItems(scrollTop)) {
          setIsFetchingNewCars(true)
        }
      }
    }
  })

  useEffect(() => {
    if (windowDimensions.width > 1200) {
      setRowHeight(225)
    }

    if (windowDimensions.width > 1024) {
      setItemsPerRow(2)
      setVisibleRows(3)
    }

    if (windowDimensions.width <= 1200) {
      setRowHeight(200)
    }

    if (windowDimensions.width <= 1100) {
      setRowHeight(180)
    }

    if (windowDimensions.width <= 1024) {
      setRowHeight(170)
      setItemsPerRow(3)
      setVisibleRows(1)
    }

    if (windowDimensions.width <= 870) {
      setRowHeight(150)
    }

    if (windowDimensions.width <= 768) {
      setRowHeight(130)
    }

    if (windowDimensions.width <= 666) {
      setRowHeight(150)
      setItemsPerRow(2)
    }

    if (windowDimensions.width <= 460) {
      setRowHeight(130)
    }

    if (windowDimensions.width <= 400) {
      setRowHeight(110)
    }
  }, [windowDimensions.width])

  const handleSelectCar = (car: ICar) => {
    dispatch(carActions.selectCar(car))
  }

  const isEndOfList = () => {
    return (carRowsStart + visibleRows + 1) >= maxRows
  }

  const isLoadMoreItems = (scrollTop: number) => {
    dispatch(setCarsRowStart(carRowsStart))
    return ((maxRows - visibleRows) * rowHeight) - scrollTop <= 80
    && carsList.length < carsOnTheServer
  }

  function getTopHeight() {
    return rowHeight * carRowsStart
  }

  function getBottomHeight() {
    if (!isEndOfList()) {
      return rowHeight * (carsList.length - (carRowsStart + visibleRows + 1))
    } else {
      return 0
    }
  }

  const Row = ({ index, carItems }: any) => {
    const items = []
    const fromIndex = index * itemsPerRow
    const toIndex = Math.min(fromIndex + itemsPerRow, carItems.length)

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
      <div
        className='cars-list__row'
        style={{ height: rowHeight }}
      >
        { items }
      </div>
    )
  }

  return (
    <div
      className='cars-list'
      style={{ height: rowHeight * (visibleRows + 1)}}
      ref={listRef}
    >
      <div style={{ height: getTopHeight() }} />
      {
        carsList
            .slice(carRowsStart, carRowsStart + (visibleRows + 2))
            .map((car, index) => {
              return (
                <Row
                  key={'' + index + carRowsStart + car.id}
                  carItems={carsList}
                  index={carRowsStart + index}
                />
              )
            })
      }
      <div style={{ height: getBottomHeight() }} />
    </div>
  )
}
