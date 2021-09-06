import { createSelector } from 'reselect'
import { ICheckbox, IRadioButton } from '../../interfaces/inputInterfaces'
import { getTimeString, getTimeDifference } from '../../utils/dateUtils'
import { RootState } from '../store'

const carSelector = (state: RootState) => state.car

const currentCarSelector = createSelector(
    [carSelector],
    (carState) => carState.selectedCar
)

export const carRateSelector = createSelector(
    [carSelector],
    (carState) => carState.carRate
)

const carRatesOptionsSelector = createSelector(
    [carSelector],
    (carState) => carState.carRateOptions
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
    (carState) => carState.carColorOrtions
)

const carCheckboxesCheckedSelector = createSelector(
    [carCheckboxesSelector],
    (checkboxes) => checkboxes.filter((checkbox) => checkbox.isChecked)
)

const getTimeDifferenceSelector = createSelector(
    carDateFromSelector,
    carDateToSelector,
    (dateFrom, dateTo) => {
      if (dateFrom && dateTo) return getTimeDifference(dateFrom, dateTo)
    }
)

const getLeasePriceSelector = createSelector(
    getTimeDifferenceSelector,
    carRateSelector,
    (leaseTime, currentRate) => {
      if (leaseTime !== undefined) return leaseTime * currentRate.price
    }
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
    getLeasePriceSelector,
    (carLowPrice, carCheckboxesCost, leasePrice) => {
      if (carLowPrice) return carLowPrice + carCheckboxesCost + (leasePrice ?? 0)
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
      return { title: 'Тариф', value: carRate?.rateTypeId.name }
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
      const durationLease = getTimeString(dateFrom, dateTo)
      return { title: 'Длительность аренды', value: durationLease }
    }
)

export const getCarColorsOptions = createSelector(
    [currentCarSelector],
    (selectedCar) => {
      const arrayOfCarColors = selectedCar?.colors.map((color) => (
            { title: color, value: color } as IRadioButton
      ))
      arrayOfCarColors?.unshift({title: 'Любой', value: 'Любой'})
      return arrayOfCarColors
    }
)

export const getCarRateOptionsSelector = createSelector(
    [carRatesOptionsSelector],
    (carRates) => carRates?.map((rate) => (
      {
        title: rate.rateTypeId.name,
        value: rate.rateTypeId.unit,
        price: rate.price,
        id: rate.id,
        rateTypeId: {
          id: rate.rateTypeId.id,
          name: rate.rateTypeId.name,
          inut: rate.rateTypeId.unit
        },
      }
    ))
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
