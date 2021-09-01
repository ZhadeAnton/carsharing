import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { setCurrentTab } from '../../../redux/order/orderActionCreators'
import {
  getTownField,
  isFirstStepDisabledSelector
} from '../../../redux/location/locationSelectors'

export default function useFirstStepContainer() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const town = state.location.town
  const pickUp = state.location.pickUp

  const townField = getTownField(state)
  const firstStepFields = [townField]
  const isFirstStepDisabled = isFirstStepDisabledSelector(state)

  const handleChangeActiveTab = () => {
    dispatch(setCurrentTab('2'))
  }

  return {
    town, pickUp, firstStepFields, isFirstStepDisabled, handleChangeActiveTab
  }
}
