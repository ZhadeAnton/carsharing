import React, { useState, useEffect, useRef, useCallback } from 'react'

import './styles.scss'
import { ICar } from '../../interfaces/carsInterfaces'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook'
import * as carActions from '../../redux/car/carActionCreators'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import useScrollListener from '../../hooks/useScrollListener'
import DefaultCar from '../../assets/PNG/default-car.png'
import Car from './carItem'

export default function CarsList() {
  const listRef: any = useRef(null)
  const makingCall = useRef(false)
  const windowDimensions = useWindowDimensions()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [rowStartPosition, setRowStartPosition] = useState(0)
  const [rowHeight, setRowHeight] = useState(225)
  const [itemsPerRow, setItemsPerRow] = useState(2)
  const [visibleRows, setVisibleRows] = useState(4)
  const [extraRows, setExtraRows] = useState(2)
  const [isFetchingNewCars, setIsFetchingNewCars] = useState(false)
  const carsList = state.car.carsList
  const carListCurrentPage = state.car.carListCurrentPage
  const carsOnTheServer = state.car.carsCount
  const carsSortBy = state.car.carsSortBy
  const selectedCar = state.car.selectedCar
  const carsListLength = carsList.length
  const maxRows = Math.floor(carsListLength / itemsPerRow)

  useScrollListener(listRef, handleScroll, 150)

  useEffect(() => {
    setRowStartPosition(0)

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
    if (!isFetchingNewCars || makingCall.current) return
    makingCall.current = true

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

    setTimeout(() => {
      setIsFetchingNewCars(false)
      makingCall.current = false
    }, 300)
  }, [isFetchingNewCars])

  useEffect(() => {
    if (windowDimensions.width > 1200) {
      setRowHeight(225)
    }

    if (windowDimensions.width <= 1200) {
      setRowHeight(200)
    }

    if (windowDimensions.width <= 1100) {
      setRowHeight(180)
    }

    if (windowDimensions.width > 1024) {
      setItemsPerRow(2)
      setVisibleRows(4)
      setExtraRows(2)
    }

    if (windowDimensions.width <= 1024) {
      setRowHeight(170)
      setItemsPerRow(3)
      setVisibleRows(3)
      setExtraRows(2)
    }

    if (windowDimensions.width <= 870) {
      setRowHeight(150)
    }

    if (windowDimensions.width <= 768) {
      setRowHeight(130)
    }

    if (windowDimensions.width > 666 && windowDimensions.width < 1024) {
      setItemsPerRow(3)
      setVisibleRows(3)
      setExtraRows(2)
    }

    if (windowDimensions.width <= 666) {
      setRowHeight(150)
      setItemsPerRow(2)
      setVisibleRows(3)
      setExtraRows(2)
    }

    if (windowDimensions.width <= 576) {
      setRowHeight(140)
    }

    if (windowDimensions.width <= 500) {
      setRowHeight(120)
    }

    if (windowDimensions.width <= 400) {
      setRowHeight(100)
    }

    if (windowDimensions.width <= 350) {
      setRowHeight(90)
    }
  }, [windowDimensions.width])

  function handleScroll(e: any) {
    setRowStartPosition((Math.floor(e.target.scrollTop / rowHeight)))

    if (isLoadMoreItems(e.target.scrollTop)) {
      setIsFetchingNewCars(true)
    }
  }

  const handleSelectCar = useCallback((car: ICar) => {
    dispatch(carActions.selectCar(car))
  }, [])

  const isEndOfList = () => {
    return (rowStartPosition + (visibleRows + extraRows)) >= maxRows
  }

  const isLoadMoreItems = (scrollTop: number) => {
    return ((maxRows - (visibleRows + extraRows)) * rowHeight) - scrollTop <= 100
    && carsListLength < carsOnTheServer
  }

  function getTopHeight() {
    return rowHeight * rowStartPosition
  }

  function getBottomHeight() {
    if (!isEndOfList()) {
      return rowHeight * (carsListLength - (rowStartPosition + visibleRows + 1))
    } else {
      return 0
    }
  }

  const Row = ({ index, carItems }: any) => {
    const items = []
    const fromIndex = index * itemsPerRow
    const toIndex = Math.min(fromIndex + itemsPerRow, carsListLength)

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
      style={{ height: rowHeight * (visibleRows + extraRows)}}
      ref={listRef}
    >
      <div style={{ height: getTopHeight() }} />
      {
        carsList
            .slice(rowStartPosition, rowStartPosition + (visibleRows + extraRows))
            .map((car, index) => {
              return (
                <Row
                  key={'' + index + rowStartPosition + car.id}
                  carItems={carsList}
                  index={rowStartPosition + index}
                />
              )
            })
      }
      <div style={{ height: getBottomHeight() }} />
    </div>
  )
}
