import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { getTownField } from '../../../redux/location/locationSelectors'
import { setCurrentTab } from '../../../redux/order/orderActionCreators'

export default function useFirstStepContainer() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const town = state.location.town
  const pickUp = state.location.pickUp

  const townField = getTownField(state)
  const firstStepFields = [townField]
  const isSecondStepDisable = !town || !pickUp

  const handleChangeActiveTab = () => {
    dispatch(setCurrentTab('2'))
  }

  return (
    {
      state: {
        town, pickUp, firstStepFields, isSecondStepDisable
      },
      handlers: {
        handleChangeActiveTab
      }
    }
  )
}
