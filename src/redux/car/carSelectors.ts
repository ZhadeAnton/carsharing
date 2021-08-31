import { createSelector } from 'reselect'

import { ICheckbox } from '../../interfaces/inputInterfaces'
import { RootState } from '../store'

const carSelector = (state: RootState) => state.car

const currentCarSelector = createSelector(
    [carSelector],
    (car) => car.selectedCar
)

const carLowPriceSelector = createSelector(
    [currentCarSelector],
    (selectedCar) => selectedCar?.lowPrice
)

const carCheckboxesSelector = createSelector(
    [carSelector],
    (car) => car.carCheckBoxGroup
)

const carCheckboxesCheckedSelector = createSelector(
    [carCheckboxesSelector],
    (checkboxes) => checkboxes.filter((checkbox) => checkbox.isChecked)
)

export const carCheckboxesCostSelector = createSelector(
    [carCheckboxesCheckedSelector],
    (checkboxes) => checkboxes.reduce(
        (acc: number, checkbox: ICheckbox) => acc + checkbox.cost, 0
    )
)

export const totalCarPriceSelector = createSelector(
    carLowPriceSelector,
    carCheckboxesCostSelector,
    (carLowPrice, carCheckboxesCost) => {
      if (carLowPrice) return carLowPrice + carCheckboxesCost
    }
)
