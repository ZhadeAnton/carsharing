import { createSelector } from 'reselect'
import { RootState } from '../store'

const locationSelector = (state: RootState) => state.location

export const pickUpsSelector = createSelector(
    locationSelector,
    (locationState) => {
      const town = locationState.selectedTown
      return locationState.pickUps.filter((item) => {
        if (item.cityId) return item.cityId.name === town
      })
    }
)

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
