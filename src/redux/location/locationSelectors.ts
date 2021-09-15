import { createSelector } from 'reselect'
import { RootState } from '../store'

const locationSelector = (state: RootState) => state.location

export const getTownField = createSelector(
    locationSelector,
    (location) => {
      return {
        title: 'Пункт выдачи',
        value: location.selectedTown
            ? `${location.selectedTown}, ${location.selectedPickUp}`
            : 'Не выбрано'}
    }
)

export const isFirstStepDisabledSelector = createSelector(
    locationSelector,
    (location) => !location.selectedTown || !location.selectedPickUp
)
