'use client'

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

interface Props {
  item: {
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
}

export default function FoodCard({ item }: Props) {
  return (
    <Card shadow="sm" isPressable>
      {/* <CardHeader>
        Make some tacos
      </CardHeader> */}
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={item.name}
          className="h-[140px] w-full object-cover"
          src={`/images/calories/${item.image}`}
        />
      </CardBody>
      <CardFooter className="justify-between text-small">
        <b>{item.name}</b>
        {/* <p className="text-default-500"></p> */}
      </CardFooter>
    </Card>
  )
}
