export function unitAbrevation(unit: string) {
  switch (unit) {
    case 'weight':
      return 'g'
    case 'piece':
      return 'pc'
    default:
      return unit
  }
}

export function formatMoney(number: number) {
  let string = number.toFixed(2)
  let [integer, decimal] = string.split('.')
  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return '$' + integer + '.' + decimal
}

export function isEmpty(obj: any) {
  return Object.keys(obj).length === 0
}
