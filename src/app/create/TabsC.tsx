'use client'

import { Card, CardBody, Tab, Tabs, useDisclosure } from '@nextui-org/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useMemo, useState } from 'react'

interface Ingredient {
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

export default function TabsC() {
  useEffect(() => {
    async function getIngredients() {
      try {
        const supabase = createClientComponentClient()
        const { ingredientsData }: any = await supabase.from('ingredients').select('*')
        setIngredients(ingredientsData)
      } catch {}
    }
    getIngredients()
  }, [])

  // const [order, setOrder] = useState<any>()
  const [ingredients, setIngredients] = useState<Ingredient>({} as Ingredient)
  const [selected, setSelected] = useState<any>(null)
  const [selectedKeys, setSelectedKeys] = useState<any>(new Set(['']))

  const { isOpen, onOpen, onClose } = useDisclosure()

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  )

  const handleOpen = (item: any) => {
    setSelectedKeys(new Set(['']))
    setIngredients(item)
    setSelected(null)
    onOpen()
  }

  return (
    <Tabs aria-label="Options" className="w-full justify-center">
      <Tab key="grains" title="Grains">
        <div>
          <h1>Select the main ingredient of your dish and decide what kind of dish you want</h1>
        </div>
        {/* <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ingredients.map((item, index) => (
            <CategoryCard category={item} key={index} handleOpen={handleOpen} />
          ))}
        </div> */}
        {/* <AddFoodModal
          isOpen={isOpen}
          onClose={onClose}
          ingredients={ingredients}
          setSelected={setSelected}
          selected={selected}
        /> */}
      </Tab>
      <Tab key="proteins" title="Proteins">
        <Card>
          <CardBody>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </CardBody>
        </Card>
      </Tab>
      <Tab key="vegetables" title="Vegetables">
        <Card>
          <CardBody>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </CardBody>
        </Card>
      </Tab>
      <Tab key="fruits" title="Fruits">
        <Card>
          <CardBody>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  )
}
