import React, { useState, useEffect, useRef } from 'react'

import './styles.scss'
import { ICar } from '../../interfaces/carsInterfaces'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook'
import * as carActions from '../../redux/car/carActionCreators'
import DefaultCar from '../../assets/PNG/default-car.png'
import Car from './carItem'

export default function CarsList() {
  const listRef: any = useRef()
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

  useEffect(() => {
    if (listRef && listRef.current) {
      listRef.current.addEventListener('scroll', handleScroll)
    }

    return function() {
      if (listRef && listRef.current) {
        listRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [carsList, carsCount])

  const handleScroll = (e: any) => {
    const scrollTop = e.target.scrollTop
    const scrollHeight = e.target.scrollHeight
    const clientHeight = e.target.clientHeight

    if (scrollHeight - (scrollTop + clientHeight) < 50
      && carsList.length < carsCount) {
      setIsFetchingNewCars(true)
    }
  }

  const handleSelectCar = (car: ICar) => {
    dispatch(carActions.selectCar(car))
  }

  return (
    <ul className='cars-list' ref={listRef as any}>
      {
        carsList.map((car, i) => {
          if (car.thumbnail.path.includes('/files')) {
            car.thumbnail.path = DefaultCar
          }

          return (
            <Car
              key={i}
              car={car}
              selected={selectedCar?.id === car.id}
              onSelectCart={handleSelectCar}
            />
          )
        })
      }
    </ul>
  )
}
