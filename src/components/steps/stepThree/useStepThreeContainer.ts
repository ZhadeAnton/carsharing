import { useAppDispatch } from '../../../hooks/usePreTypedHook'
import { IDate, IRadioButton } from '../../../interfaces/inputInterfaces'
import * as actions from '../../../redux/car/carActionCreators'

export default function useStepThreeContainer() {
  const dispatch = useAppDispatch()

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
    handleColorChange,
    handleRateChange,
    handleUpdateDateFrom,
    handleUpdateDateTo,
    handleClearDateFrom,
    handleClearDateTo
  }
}
