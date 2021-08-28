import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { ICheckbox, IDate, IRadioButton } from '../../../interfaces/inputInterfaces'
import * as actions from '../../../redux/car/carActionCreators'

export default function useStepThreeContainer() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const carCheckBoxGroup = state.car.carCheckBoxGroup

  const handleCheckboxChange = (checkbox: ICheckbox) => {
    const newItes = [...carCheckBoxGroup]
    newItes[checkbox.id] = {...checkbox, isChecked: !newItes[checkbox.id].isChecked}
    dispatch(actions.changeCarCheckbox(newItes))
  }

  const handleColorChange = (color: IRadioButton) => {
    dispatch(actions.setCarColor(color))
  }

  const handleRateChange = (rate: IRadioButton) => {
    dispatch(actions.setCarRate(rate))
  }

  const handleUpdateDateFrom = (date: IDate) => {
    dispatch(actions.setDateFrom(date))
  }

  const handleUpdateDateTo = (date: IDate) => {
    dispatch(actions.setDateTo(date))
  }

  const handleClearDateFrom = () => {
    dispatch(actions.setDateFrom(null))
  }

  const handleClearDateTo = () => {
    dispatch(actions.setDateTo(null))
  }

  return {
    state: {
      carCheckBoxGroup,
    },
    handlers: {
      handleCheckboxChange,
      handleColorChange,
      handleRateChange,
      handleUpdateDateFrom,
      handleUpdateDateTo,
      handleClearDateFrom,
      handleClearDateTo
    }
  }
}
