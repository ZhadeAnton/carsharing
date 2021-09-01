import { useAppSelector } from './../../../hooks/usePreTypedHook';
import { useAppDispatch } from '../../../hooks/usePreTypedHook'
import { IFnSelectCar, IFnSelectCarQuality } from '../../../interfaces/carsInterfaces'
import { selectCar, selectCarQuality } from '../../../redux/car/carActionCreators'
import { getTownField } from '../../../redux/location/locationSelectors';
import { getCarModelFiled as getCarModelField } from '../../../redux/car/carSelectors';
import { setCurrentTab } from '../../../redux/order/orderActionCreators';

export default function useStepTwoContainer() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const carsList = state.car.carsList
  const selectedCar = state.car.selectedCar
  const carsSortOptions = state.car.carsSortOptions
  const carsSortBy = state.car.carsSortBy

  const townField = getTownField(state)
  const carModelField = getCarModelField(state)
  const secondStepFields = [townField, carModelField]
  const isThirdStepDisable = !carsList

  const handleSelectCar: IFnSelectCar = (car) => {
    dispatch(selectCar(car))
  }

  const handleSortCars: IFnSelectCarQuality = (quality) => {
    dispatch(selectCarQuality(quality))
  }

  const handleChangeActiveTab = () => {
    dispatch(setCurrentTab('3'))
  }

  return {
    state: {
      carsList,
      selectedCar,
      carsSortOptions,
      carsSortBy,
      secondStepFields,
      isThirdStepDisable
    },
    handlers: {
      handleSelectCar, handleSortCars, handleChangeActiveTab
    }
  }
}
