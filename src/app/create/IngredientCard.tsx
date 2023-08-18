'use client'

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

interface Props {
  item: {
    name: string
    img: string
    types: Array<object>
  }
  handleOpen: (item: object) => void
}

export default function IngredientCard({ item, handleOpen }: Props) {
  return (
    <Card shadow="sm" isPressable onPress={() => handleOpen(item)}>
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
          src={`/images/${item.img}`}
        />
      </CardBody>
      <CardFooter className="justify-between text-small">
        <b>{item.name}</b>
        {/* <p className="text-default-500"></p> */}
      </CardFooter>
    </Card>
  )
}
