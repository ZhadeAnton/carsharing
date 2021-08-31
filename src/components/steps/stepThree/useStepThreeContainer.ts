import { useAppDispatch } from '../../../hooks/usePreTypedHook'
import { ICheckbox, IDate, IRadioButton } from '../../../interfaces/inputInterfaces'
import { changeCarCheckbox } from '../../../redux/car/carActionCreators'
import * as actions from '../../../redux/car/carActionCreators'

export default function useStepThreeContainer() {
  const dispatch = useAppDispatch()

  const handleCheckboxChange = (checkbox:ICheckbox) => {
    dispatch(changeCarCheckbox(checkbox))
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
    handleCheckboxChange,
    handleColorChange,
    handleRateChange,
    handleUpdateDateFrom,
    handleUpdateDateTo,
    handleClearDateFrom,
    handleClearDateTo
  }
}
