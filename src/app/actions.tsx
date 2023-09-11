'use server'

import { spoonacularKey } from '@/constants/constants'

export async function handleSearch() {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularKey}&query=pasta`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = res.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
