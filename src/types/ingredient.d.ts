export interface Price {
  by: string
  amount: number
}

export interface Ingredient {
  id: number
  name: string
  description: string
  image: string
  calories: number
  protein: number
  fat: number
  group: string
  category: string
  prices: Price[]
}

export interface Dish {
  ingredients: Ingredient[]
  recipe: any
  amount: number | null
}
