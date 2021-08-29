import { ICheckbox } from '../../interfaces/inputInterfaces';
import { IOrderField } from '../../interfaces/orderIntarfaces';
import { ICarState } from '../../redux/car/carReducer';
import { ILocationState } from '../../redux/location/locationReducer';

export interface IOrderPageContainer {
  town: ILocationState['town'],
  pickUp: ILocationState['pickUp'],
  carsList: ICarState['carsList'],
  selectedCar: ICarState['selectedCar'],
  carColor: ICarState['carColor'],
  carRate: ICarState['carRate'],
  carsSortBy: ICarState['carsSortBy'],
  carCheckBoxGroup: ICarState['carCheckBoxGroup'],
  dateFrom: ICarState['dateFrom'],
  dateTo: ICarState['dateTo'],
  carsSortOptions: ICarState['carsSortOptions'],
  carColorOptions: ICarState['carColorOptions'],
  carRateOptions: ICarState['carRateOptions'],
  stepOneOrderFields: Array<IOrderField>,
  stepTwoOrderFields: Array<IOrderField>,
  stepThreeOrderFields: Array<IOrderField>,
  isTwoStepDisable: boolean,
  isThreeStepDisable: boolean,
  isFourStepDisable: boolean,
  activeTab: string,
  handleChangeActiveTab: (key: string) => void,
  handleCheckboxChange: (checkbox: ICheckbox) => void
}
