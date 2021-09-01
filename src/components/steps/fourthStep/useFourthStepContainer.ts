import useToggle from '../../../hooks/useToggle'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { setOrder } from '../../../redux/order/orderActionCreators'
import { getTownField } from '../../../redux/location/locationSelectors'
import {
  getCarColorField,
  getCarLeaseField,
  getCarModelFiled,
  getCarRateField,
  totalCarPriceSelector
} from '../../../redux/car/carSelectors'
import { ICheckbox } from '../../../interfaces/inputInterfaces'

export default function useFourthStepContainer() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [isModal, setIsModal] = useToggle()

  const selectedCar = state.car.selectedCar
  const dateFrom = state.car.dateFrom
  const carCheckBoxGroup = state.car.carCheckBoxGroup

  let isCarFullTank = false
  const totalPriceOfSelectedCar = totalCarPriceSelector(state)

  const townField = getTownField(state)
  const carModelField = getCarModelFiled(state)
  const carColorField = getCarColorField(state)
  const carRateField = getCarRateField(state)
  const carLeaseField = getCarLeaseField(state)

  const fourthStepFields = [
    townField, carModelField, carColorField, carRateField, carLeaseField
  ]

  carCheckBoxGroup.forEach((item: ICheckbox) => {
    if (item.isChecked) fourthStepFields.push({ title: item.value, value: 'Да' })
    if (item.value === 'Полный бак' && item.isChecked) isCarFullTank = !isCarFullTank
  })

  const handleConfirmOrder = () => {
    dispatch(setOrder())
    setIsModal(false)
  }

  const handleCloseModal = () => {
    setIsModal(false)
  }

  const handleOpenModal = () => {
    setIsModal(true)
  }

  return {
    isModal,
    totalPriceOfSelectedCar,
    selectedCar,
    dateFrom,
    fourthStepFields,
    isCarFullTank,
    handleConfirmOrder,
    handleCloseModal,
    handleOpenModal
  }
}
