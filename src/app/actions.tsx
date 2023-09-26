'use server'

import { spoonacularKey } from '@/constants/constants'

export async function getRandomRecipes() {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${spoonacularKey}&limitLicense=false&number=12&tags=mexican`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'force-cache', // active for testing for the limit of request on the free plan
      }
    )
    const data = await res.json()
    // revalidatePath('/')
    return data
  } catch (error) {
    return error
  }
}

export async function onSearch(fd: FormData) {
  const query = fd.get('search')
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularKey}&query=${query}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return res.json()
  } catch (error) {
    console.error(error)
  }
}
