import { ICheckbox } from '../../interfaces/inputInterfaces'

export const changeCarCheckboxGroup = (array: Array<ICheckbox>, checkbox: ICheckbox) => {
  const newItems = [...array]
  newItems[checkbox.id] = {...checkbox, isChecked: !newItems[checkbox.id].isChecked}
  return newItems
}
