export interface Ingredient {
  id: number
  name: string
  description: string
  image: string
  calories: number
  protein: number
  fat: number
  type: string
  category: string
  prices: {
    by: string
    value: number
  }[]
}

export interface Price {
  by: string
  value: number
}
;[]
