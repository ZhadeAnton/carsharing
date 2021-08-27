import { useAppSelector } from '../../../hooks/usePreTypedHook'

export default function useOrderInfoContainer() {
  // const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const town = state.location.town
  const pickUp = state.location.pickUp
  const coordinatesByPickedTown = state.location.coordinatesByPickedTown
  const markers = state.location.markers

  return {
    state: {
      town, pickUp, coordinatesByPickedTown, markers
    }
  }
}
