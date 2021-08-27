import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { selectCar, selectCarQuality } from '../../../redux/car/carActionCreators'
import * as ICar from '../../../interfaces/carsInterfaces'

export default function useStepTwoContainer() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const carsList = state.car.carsList
  const selectedCar = state.car.selectedCar
  const carsSortOptions = state.car.carsSortOptions
  const carsSortBy = state.car.carsSortBy

  const handleSelectCar: ICar.IFnSelectCar = (car) => {
    dispatch(selectCar(car))
  }

  const handleSortCars: ICar.IFnSelectCarQuality = (quality) => {
    dispatch(selectCarQuality(quality))
  }

  return {
    state: {
      carsList, selectedCar, carsSortBy, carsSortOptions
    },
    handlers: {
      handleSelectCar, handleSortCars
    }
  }
}
