import { createSelector } from 'reselect'
import { RootState } from '../store'

const locationSelector = (state: RootState) => state.location

export const getTownField = createSelector(
    locationSelector,
    (location) => {
      return {
        title: 'Пункт выдачи',
        value: location.town ? `${location.town}, ${location.pickUp}` : 'Не выбрано'}
    }
)

export const isFirstStepDisabledSelector = createSelector(
    locationSelector,
    (location) => !location.town || !location.pickUp
)
