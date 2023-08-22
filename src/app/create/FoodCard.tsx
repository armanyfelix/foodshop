'use client'

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

interface Selected {
  name: string
  description: string
  image: string
  calorie: number
  protein: number
  fat: number
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
  type: Selected
  setSelected: (selected: Selected) => void
  categoryName: string
}

export default function FoodCard({ type, categoryName, setSelected }: Props) {
  return (
    <Card shadow="sm" isPressable onPress={() => setSelected(type)}>
      {/* <CardHeader>
        Make some tacos
      </CardHeader> */}
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={type.name}
          className="h-[140px] w-full object-cover"
          src={`/images/calories/${categoryName.toLowerCase()}/${type.image}`}
        />
      </CardBody>
      <CardFooter className="justify-between text-small">
        <b>{type.name}</b>
        {/* <p className="text-default-500"></p> */}
      </CardFooter>
    </Card>
  )
}
