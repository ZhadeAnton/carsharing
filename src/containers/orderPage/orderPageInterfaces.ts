import { IOrderField } from '../../interfaces/orderIntarfaces';
import { ICarState } from '../../redux/car/carReducer';
import { ILocationState } from '../../redux/location/locationReducer';
import { IOrderState } from '../../redux/order/orderReducer';

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
  totalPriceOfSelectedCar: number | undefined,
  carsSortOptions: ICarState['carsSortOptions'],
  carColorOptions: ICarState['carColorOptions'],
  carRateOptions: ICarState['carRateOptions'],
  stepOneOrderFields: Array<IOrderField>,
  stepTwoOrderFields: Array<IOrderField>,
  stepThreeOrderFields: Array<IOrderField>,
  stepFourOrderFields: Array<IOrderField>,
  isOrder: IOrderState['isOrderConfirmed'],
  activeTab: string,
  orderNumber: IOrderState['orderNumber'],
  isFullTank: boolean,
  isSecondStepDisable: boolean,
  isThirdStepDisable: boolean,
  isFourthStepDisable: boolean,
  handleChangeActiveTab: (key: string) => void
}
