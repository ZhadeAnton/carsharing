import { useAppDispatch } from '../../../hooks/usePreTypedHook'
import { IFnSelectCar, IFnSelectCarQuality } from '../../../interfaces/carsInterfaces'
import { selectCar, selectCarQuality } from '../../../redux/car/carActionCreators'

export default function useStepTwoContainer() {
  const dispatch = useAppDispatch()

  const handleSelectCar: IFnSelectCar = (car) => {
    dispatch(selectCar(car))
  }

  const handleSortCars: IFnSelectCarQuality = (quality) => {
    dispatch(selectCarQuality(quality))
  }

  return {
    handleSelectCar, handleSortCars
  }
}
