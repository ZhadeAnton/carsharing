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
  carCurrentPrice: number | undefined,
  carsSortOptions: ICarState['carsSortOptions'],
  carColorOptions: ICarState['carColorOptions'],
  carRateOptions: ICarState['carRateOptions'],
  stepOneOrderFields: Array<IOrderField>,
  stepTwoOrderFields: Array<IOrderField>,
  stepThreeOrderFields: Array<IOrderField>,
  stepFourOrderFields: Array<IOrderField>,
  isOrder: IOrderState['isOrderConfirmed'],
  orderNumber: IOrderState['orderNumber'],
  isFullTank: boolean,
  isTwoStepDisable: boolean,
  isThreeStepDisable: boolean,
  isFourStepDisable: boolean,
  activeTab: string,
  handleChangeActiveTab: (key: string) => void
}
