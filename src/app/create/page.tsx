'use client'

// rice
// noddles
// bread
// tortilla
// salad
// soup
// sandwich

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

export default function Create() {
  const list = [
    {
      title: 'Bread',
      img: '/images/bread.jpg',
      price: '$5.00',
    },
    {
      title: 'Noodles',
      img: '/images/noddles.jpg',
      price: '$3.00',
    },
    {
      title: 'Rice',
      img: '/images/rice.jpg',
      price: '$10.00',
    },
    {
      title: 'Tortillas',
      img: '/images/tortillas.jpg',
      price: '$7.50',
    },
    {
      title: 'Salad',
      img: '/images/salad.jpg',
      price: '$5.30',
    },
    {
      title: 'Pasta',
      img: '/images/pasta.jpg',
      price: '$15.70',
    },
    {
      title: 'Soup',
      img: '/images/soup.jpg',
      price: '$5.00',
    },
  ]

  return (
    <div className="p-6 ">
      <p>Choose the carbs of your food and then select the ingredients you want to add to it.</p>
      <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => console.log('item pressed')}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="h-[140px] w-full object-cover"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="justify-between text-small">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
