import { createSelector } from 'reselect'
import { RootState } from '../store'

const locationSelector = (state: RootState) => state.location

const townSelector = createSelector(
    [locationSelector],
    (locationState) => locationState.town
)

const pickUpSelector = createSelector(
    [locationSelector],
    (locationState) => locationState.pickUp
)

export const getTownField = createSelector(
    townSelector,
    pickUpSelector,
    (town, pickUp) => {
      return {title: 'Пункт выдачи', value: town ? `${town}, ${pickUp}` : 'Не выбрано'}
    }
)

export const isFirstStepDisabledSelector = createSelector(
    townSelector,
    pickUpSelector,
    (town, pickUp) => !town || !pickUp
)
