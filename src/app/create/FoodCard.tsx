'use client'

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

interface Ingredient {
  name: string
  description: string
  image: string
  calorie: number
  protein: number
  fat: number
  type: string
  category: string
  prices: {
    sizes: {
      small: number | null
      medium: number | null
      large: number | null
    }
    liter: number | null
    kilo: number | null
    piece: number | null
  }
}

interface Props {
  ingredient: Ingredient
  setSelected: (selected: Ingredient) => void
}

export default function FoodCard({ ingredient, setSelected }: Props) {
  console.log('🚀 ~ file: FoodCard.tsx:32 ~ FoodCard ~ ingredient:', ingredient)
  return (
    <Card shadow="sm" isPressable onPress={() => setSelected(ingredient)}>
      {/* <CardHeader>
        Make some tacos
      </CardHeader> */}
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={ingredient.name}
          className="h-[140px] w-full object-cover"
          src={`/images/${ingredient.category}s/${ingredient.type}s/${ingredient.image}`}
        />
      </CardBody>
      <CardFooter className="justify-between text-small">
        <b>{ingredient.name}</b>
        {/* <p className="text-default-500"></p> */}
      </CardFooter>
    </Card>
  )
}
