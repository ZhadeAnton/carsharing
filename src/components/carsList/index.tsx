import React, { useState, useEffect, useRef } from 'react'

import './styles.scss'
import { ICar } from '../../interfaces/carsInterfaces'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook'
import * as carActions from '../../redux/car/carActionCreators'
import DefaultCar from '../../assets/PNG/default-car.png'
import Car from './carItem'

export default function CarsList() {
  // const listRef: any = useRef()
  const rootRef: any = useRef()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [isFetchingNewCars, setIsFetchingNewCars] = useState(true)
  const [start, setStart] = useState(0)

  const carsList = state.car.carsList
  const carListCurrentPage = state.car.carListCurrentPage
  // const carsCount = state.car.carsCount
  const carsSortBy = state.car.carsSortBy
  const selectedCar = state.car.selectedCar

  const rowHeight = 225
  const visibleRows = 3

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

  // useEffect(() => {
  //   if (listRef && listRef.current) {
  //     listRef.current.addEventListener('scroll', handleScroll)
  //   }

  //   return function() {
  //     if (listRef && listRef.current) {
  //       listRef.current.removeEventListener('scroll', handleScroll)
  //     }
  //   }
  // }, [carsList, carsCount])

  // const handleScroll = (e: any) => {
  //   const scrollTop = e.target.scrollTop
  //   const scrollHeight = e.target.scrollHeight
  //   const clientHeight = e.target.clientHeight

  //   if (scrollHeight - (scrollTop + clientHeight) < 50
  //     && carsList.length < carsCount) {
  //     setIsFetchingNewCars(true)
  //   }
  // }

  const handleSelectCar = (car: ICar) => {
    dispatch(carActions.selectCar(car))
  }

  useEffect(() => {
    rootRef.current.addEventListener('scroll', onScroll)

    return () => {
      rootRef.current.removeEventListener('scroll', onScroll)
    }
  })

  function onScroll(e: any) {
    setStart(Math.floor(e.target.scrollTop / rowHeight))
  }

  function getTopHeight() {
    return rowHeight * start
  }

  function getBottomHeight() {
    return rowHeight * (carsList.length - (start + visibleRows))
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

    return <div className='cars__row'>{items}</div>
  }

  return (
    <div style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }} ref={rootRef}>
      <div style={{ height: getTopHeight() }} />
      {
        carsList
            .slice(start, start + visibleRows + 1)
            .map((car, i) => {
              return (
                <Row
                  key={'' + i + start + car.id}
                  carItems={carsList}
                  index={start + i}
                />
              )
            })
      }
      <div style={{ height: getBottomHeight() }} />
    </div>
  )
}
