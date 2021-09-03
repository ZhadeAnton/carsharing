import { createSelector } from 'reselect'
import { ICheckbox } from '../../interfaces/inputInterfaces'
import { getDifferenceTime } from '../../utils/dateUtils'
import { RootState } from '../store'

const carSelector = (state: RootState) => state.car

const currentCarSelector = createSelector(
    [carSelector],
    (carState) => carState.selectedCar
)

const carRateSelector = createSelector(
    [carSelector],
    (carState) => carState.carRate
)

const carColorSelector = createSelector(
    [carSelector],
    (carState) => carState.carColor
)

const carDateFromSelector = createSelector(
    [carSelector],
    (carState) => carState.dateFrom
)

const carDateToSelector = createSelector(
    [carSelector],
    (carState) => carState.dateTo
)

const carLowPriceSelector = createSelector(
    [currentCarSelector],
    (selectedCar) => selectedCar?.priceMin
)

const carCheckboxesSelector = createSelector(
    [carSelector],
    (carState) => carState.carCheckBoxGroup
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

export const getCarModelFiled = createSelector(
    [currentCarSelector],
    (selectedCar) => {
      return { title: 'Модель', value: selectedCar?.name ?? 'Не выбрано' }
    }
)

export const getCarRateField = createSelector(
    [carRateSelector],
    (carRate) => {
      return { title: 'Тариф', value: carRate.value }
    }
)

export const getCarColorField = createSelector(
    [carColorSelector],
    (carColor) => {
      return { title: 'Цвет', value: carColor.value }
    }
)

export const getCarLeaseField = createSelector(
    carDateFromSelector,
    carDateToSelector,
    (dateFrom, dateTo) => {
      const durationLease = getDifferenceTime(dateFrom, dateTo)
      return { title: 'Длительность аренды', value: durationLease }
    }
)

export const isSecondStepDisabledSelector = createSelector(
    [currentCarSelector],
    (selectedCar) => !selectedCar
)

export const isThirdStepDisabledSelector = createSelector(
    carDateFromSelector,
    carDateToSelector,
    (dateFrom, dateTo) => !dateFrom || !dateTo
)
