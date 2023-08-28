'use client'

import { Ingredient, Price } from '@/types/ingredient'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

interface Props {
  ingredient: Ingredient
  setSelected: (selected: Ingredient) => void
  setPrice: (price: Price) => void
}

export default function FoodCard({ ingredient, setSelected, setPrice }: Props) {
  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => {
        setSelected(ingredient)
        setPrice(ingredient.prices[0])
      }}
    >
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
