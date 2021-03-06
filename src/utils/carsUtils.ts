export const carsSortOptions = [
  {title: 'Все модели', value: 'Все модели'},
  {title: 'Эконом', value: 'Эконом'},
  {title: 'Премиум', value: 'Премиум'},
]

export const carCheckboxOrtions = [
  {
    title: 'Полный бак, 500р',
    value: 'Полный бак',
    info: 'Топливо 100%',
    cost: 500,
    id: 0,
    isChecked: true
  },
  {
    title: 'Детское кресло, 200р',
    value: 'Детское кресло',
    info: 'Включено',
    cost: 200,
    id: 1,
    isChecked: false
  },
  {
    title: 'Правый руль, 1600р',
    value: 'Правый руль',
    info: 'Включено',
    cost: 1600,
    id: 2,
    isChecked: false
  }
]

export const parseCarNumber = (carNumber: string | undefined) => {
  return [
    carNumber?.slice(0, 1),
    carNumber?.slice(1, 4),
    carNumber?.substring(4, 6),
    carNumber?.slice(6, -1)]
      .join(' ')
}
