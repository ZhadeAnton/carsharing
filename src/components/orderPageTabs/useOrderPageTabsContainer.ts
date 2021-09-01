import { isFirstStepDisabledSelector } from '../../redux/location/locationSelectors';
import { setCurrentTab } from '../../redux/order/orderActionCreators';
import { useAppDispatch, useAppSelector } from './../../hooks/usePreTypedHook';
import {
  isSecondStepDisabledSelector,
  isThirdStepDisabledSelector
} from '../../redux/car/carSelectors';

export default function useOrderPageTabsContainer() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const currentTabPosition = state.order.currentTabPosition

  const isFirstStepDisabled = isFirstStepDisabledSelector(state)
  const isSecondStepDisabled = isSecondStepDisabledSelector(state)
  const isThirdStepDisable = isThirdStepDisabledSelector(state)

  const isSecondTabDisabled = isFirstStepDisabled
  const isThirdTabDisabled = isSecondTabDisabled || isSecondStepDisabled
  const isFourthTabDisabled = isThirdTabDisabled || isThirdStepDisable

  const handleChangeActiveTab = (key: string) => {
    dispatch(setCurrentTab(key))
  }

  return {
    isSecondTabDisabled,
    isThirdTabDisabled,
    isFourthTabDisabled,
    currentTabPosition,
    handleChangeActiveTab
  }
}
