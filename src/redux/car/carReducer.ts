import { ICar } from '../../interfaces/carsInterfaces'
import { ICarTypes } from './carActonTypes'
import { IRadioButton } from '../../interfaces/inputInterfaces'
import * as types from './carActonTypes'
import { carsMock } from '../../utils/carsListMock'

interface ICarState {
  carsList: Array<ICar>,
  selectedCar: ICar | null,
  carstSortOptions: Array<IRadioButton>,
  carsSortBy: IRadioButton
}

const INIT_STATE: ICarState = {
  carsList: carsMock,
  selectedCar: null,
  carstSortOptions: [
    {title: 'Все модели', value: 'Все модели'},
    {title: 'Эконом', value: 'Эконом'},
    {title: 'Премиум', value: 'Премиум'},
  ],
  carsSortBy: { title: 'Все модели', value: 'Все модели' }
}

const carReducer = (state = INIT_STATE, action: ICarTypes): ICarState => {
  switch (action.type) {
    case types.SELECT_CAR:
      return {
        ...state,
        selectedCar: action.payload
      }

    case types.SELECT_CAR_QUALITY:
      return {
        ...state,
        carsSortBy: action.payload
      }

    default:
      return state
  }
}

export default carReducer
