'use client'

import { Card, CardBody, Tab, Tabs, useDisclosure } from '@nextui-org/react'
import { useMemo, useState } from 'react'
import AddFoodModal from './AddFoodModal'
import CategoryCard from './CategoryCard'

interface Main {
  name: string
  description: string
  image: string
  types: {
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
  }[]
}

export default function Create() {
  const calories = [
    {
      name: 'Breads',
      description: 'This is a bread',
      image: 'breads.jpg',
      types: [
        {
          name: 'Burger',
          description: 'This is a burger',
          image: 'burger.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'White',
          description: 'This is a white bread',
          image: 'white.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Multigrain',
          description: 'This is a multigram bread',
          image: 'multigrain.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Bagel',
          description: 'This is a bagel',
          image: 'bagel.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Baguette',
          description: 'This is a baguette',
          image: 'baguette.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
      ],
    },
    {
      name: 'Rices',
      description: 'This is a bread',
      image: 'rices.jpg',
      types: [
        {
          name: 'White',
          description: 'This is a white rice',
          image: 'white.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Integral',
          description: 'This is a integral rice',
          image: 'integral.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Fried',
          description: 'This is a fried rice',
          image: 'fried.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Red',
          description: 'This is a red rice',
          image: 'red.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
      ],
    },
    {
      name: 'Tortillas',
      description: 'This is a bread',
      image: 'tortillas.jpg',
      types: [
        {
          name: 'Corn',
          description: 'This is a corn tortillas',
          image: 'corn.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Yellow',
          description: 'This is a corn yellow tortillas',
          image: 'yellow.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'flour',
          description: 'This is a flour tortillas',
          image: 'flour.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'nopal',
          description: 'This is a nopal tortillas',
          image: 'nopal.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
      ],
    },
    {
      name: 'Salads',
      description: 'This is a bread',
      image: 'salads.jpg',
      types: [
        {
          name: 'lettuce',
          description: 'This is a lettuce salad',
          image: 'lettuce.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Cabbage',
          description: 'This is a cabbage salad',
          image: 'cabbage.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Potato',
          description: 'This is a potato salad',
          image: 'potato.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Mix',
          description: 'This is a mix salad',
          image: 'mix.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
      ],
    },
    {
      name: 'Pastas',
      description: 'This is a bread',
      image: 'pastas.jpg',
      types: [
        {
          name: 'Spaghetti',
          description: 'This is a spaghetti',
          image: 'spaghetti.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Fusilli',
          description: 'This is a fusilli',
          image: 'fusilli.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Chow Mein',
          description: 'This is a chow mein',
          image: 'chowmein.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Soba',
          description: 'This is a soba',
          image: 'soba.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Rice noddles',
          description: 'This is a rice',
          image: 'ricenoddles.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Penne',
          description: 'This is a penne',
          image: 'penne.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Macaroni',
          description: 'This is a macaroni',
          image: 'macaroni.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Fettuccine',
          description: 'This is a fettuccine',
          image: 'fettuccine.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
      ],
    },
    {
      name: 'Soups',
      description: 'This is a bread',
      image: 'soups.jpg',
      types: [
        {
          name: 'Chicken',
          description: 'This is a chicken soup',
          image: 'chicken.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Beef',
          description: 'This is a beef soup',
          image: 'beef.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Shrimp',
          description: 'This is a vegetable soup',
          image: 'shrimp.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Tomato',
          description: 'This is a tomato soup',
          image: 'tomato.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Ramen',
          description: 'This is a ramen soup',
          image: 'ramen.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Miso',
          description: 'This is a miso soup',
          image: 'miso.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Pho',
          description: 'This is a udon soup',
          image: 'pho.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Tortilla',
          description: 'This is a tortilla soup',
          image: 'tortilla.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
        {
          name: 'Cheese',
          description: 'This is a cheese soup',
          image: 'cheese.jpg',
          calorie: 100,
          protein: 20,
          fat: 10,
          prices: {
            sizes: {
              small: 10,
              medium: 15,
              large: 20,
            },
            liter: 60,
            kilo: null,
            piece: null,
          },
        },
      ],
    },
  ]

  const [order, setOrder] = useState<any>()
  const [main, setMain] = useState<Main>({} as Main)
  const [selected, setSelected] = useState<any>(null)
  const [selectedKeys, setSelectedKeys] = useState<any>(new Set(['']))

  const { isOpen, onOpen, onClose } = useDisclosure()

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  )

  const handleOpen = (item: any) => {
    setSelectedKeys(new Set(['']))
    setMain(item)
    setSelected(null)
    onOpen()
  }

  return (
    <div className="min-h-screen p-3">
      <Tabs aria-label="Options" className="w-full justify-center">
        <Tab key="calorie" title="Calorie">
          <div>
            <h1>Select the main ingredient of your dish and decide what kind of dish you want</h1>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {calories.map((item, index) => (
              <CategoryCard item={item} key={index} handleOpen={handleOpen} />
            ))}
          </div>
          <AddFoodModal
            isOpen={isOpen}
            onClose={onClose}
            main={main}
            setSelected={setSelected}
            selected={selected}
          />
        </Tab>
        <Tab key="protein" title="Protein">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="fat" title="Fat">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="vegetables" title="Vegetables">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}
