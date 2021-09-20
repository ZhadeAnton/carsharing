import { createSelector } from 'reselect'
import { ICheckbox, IRadioButton } from '../../interfaces/inputInterfaces'
import { getTimeString, getTimeDifference } from '../../utils/dateUtils'
import { RootState } from '../store'

const carSelector = (state: RootState) => state.car

const carCheckboxesCheckedSelector = createSelector(
    [carSelector],
    (car) => car.carCheckboxOrtions.filter((checkbox) => checkbox.isChecked)
)

const getTimeDifferenceSelector = createSelector(
    carSelector,
    (car) => {
      if (car.dateFrom && car.dateTo) return getTimeDifference(car.dateFrom, car.dateTo)
    }
)

const getLeasePriceSelector = createSelector(
    getTimeDifferenceSelector,
    carSelector,
    (leaseTime, car) => {
      if (leaseTime !== undefined) return leaseTime * car.carRate.price
    }
)

export const carCheckboxesCostSelector = createSelector(
    [carCheckboxesCheckedSelector],
    (checkboxes) => checkboxes.reduce(
        (acc: number, checkbox: ICheckbox) => acc + checkbox.cost, 0
    )
)

export const totalCarPriceSelector = createSelector(
    carSelector,
    carCheckboxesCostSelector,
    getLeasePriceSelector,
    (car, carCheckboxesCost, leasePrice) => {
      if (car.selectedCar?.priceMin) {
        return Math.trunc(
            car.selectedCar?.priceMin + carCheckboxesCost + (leasePrice ?? 0))
      }
    }
)

export const getCarModelFiled = createSelector(
    [carSelector],
    (car) => {
      return { title: 'Модель', value: car.selectedCar?.name ?? 'Не выбрано' }
    }
)

export const getCarRateField = createSelector(
    [carSelector],
    (car) => {
      return { title: 'Тариф', value: car?.carRate.rateTypeId.name }
    }
)

export const getCarColorField = createSelector(
    [carSelector],
    (car) => {
      return { title: 'Цвет', value: car.carColor.value }
    }
)

export const getCarLeaseField = createSelector(
    carSelector,
    (car) => {
      const durationLease = getTimeString(car.dateFrom, car.dateTo)
      return { title: 'Длительность аренды', value: durationLease }
    }
)

export const getCarCheckboxFields = createSelector(
    [carSelector],
    (car) => {
      const checkboxes = car.carCheckboxOrtions
      return checkboxes
          .filter((checkbox) => checkbox.isChecked)
          .map((checkbox) => ({ title: checkbox.value, value: 'Да' }))
    }
)

export const getCarColorsOptions = createSelector(
    [carSelector],
    (car) => {
      const arrayOfCarColors = car.selectedCar?.colors?.map((color) => (
            { title: color, value: color } as IRadioButton
      ))
      arrayOfCarColors?.unshift({title: 'Любой', value: 'Любой'})
      return arrayOfCarColors
    }
)

export const getCarRateOptionsSelector = createSelector(
    [carSelector],
    (car) => car.carRateOptions?.map((rate) => (
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
    [carSelector],
    (car) => !car.selectedCar
)

export const isThirdStepDisabledSelector = createSelector(
    carSelector,
    (car) => !car.dateFrom || !car.dateTo
)
