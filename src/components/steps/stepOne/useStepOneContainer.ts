import { useAppSelector } from '../../../hooks/usePreTypedHook'

export default function useStepOneContainer() {
  const state = useAppSelector((state) => state)

  const town = state.location.town
  const pickUp = state.location.pickUp

  return {
    state: {
      town, pickUp
    }
  }
}
