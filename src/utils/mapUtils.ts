export const isAddressIncludesValue = (string: string, value: string) => {
  return string.toLocaleLowerCase().includes(value.toLocaleLowerCase())
}
