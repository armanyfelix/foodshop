'use client'

import { Ingredient, Price } from '@/types/ingredient'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

interface Props {
  ingredient: Ingredient
  setIngredient: (ingredient: Ingredient) => void
  setPrice: (price: Price) => void
}

export default function FoodCard({ ingredient, setIngredient, setPrice }: Props) {
  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => {
        setIngredient(ingredient)
        setPrice(ingredient.prices[0])
      }}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={ingredient.name}
          className="h-[140px] w-full object-cover"
          src={`/images/${ingredient.group}s/${ingredient.category}s/${ingredient.image}`}
        />
      </CardBody>
      <CardFooter className="justify-between text-small">
        <b>{ingredient.name}</b>
      </CardFooter>
    </Card>
  )
}
