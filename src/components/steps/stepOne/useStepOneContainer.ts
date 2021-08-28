import { useAppSelector } from '../../../hooks/usePreTypedHook'

export default function useStepOneContainer() {
  const state = useAppSelector((state) => state)

  const town = state.location.town
  const pickUp = state.location.pickUp

  const orderFields = [
    { title: 'Город', value: town ? `${town}, ${pickUp}` : 'Не выбрано' }
  ]

  return {
    state: {
      town, pickUp, orderFields
    }
  }
}
