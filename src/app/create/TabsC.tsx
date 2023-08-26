'use client'

import { Tab, Tabs, useDisclosure } from '@nextui-org/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import AddFoodModal from './AddFoodModal'
import CategoryCard from './CategoryCard'

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

export default function TabsC() {
  const tabs = [
    {
      key: 'grain',
      title: 'Grains',
      subtitle: 'Select the base of your dish and decide what kind of dish you want',
    },
    {
      key: 'protein',
      title: 'Proteins',
      subtitle: '',
    },
    {
      key: 'vegetable',
      title: 'Vegetables',
      subtitle: '',
    },
  ]
  // useEffect(() => {
  async function getIngredients() {
    try {
      const supabase = createClientComponentClient()
      const { data }: any = await supabase.from('ingredients').select('*')
      setAllIngredients(data)
    } catch {}
  }
  getIngredients()
  // }, [])

  const [selectedTab, setSelectedTab] = useState<any>('grains')
  const [selected, setSelected] = useState<any>()
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [allIngredients, setAllIngredients] = useState<Ingredient[]>([])

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpen = (category: any) => {
    const ingredientsData = allIngredients.filter((i: Ingredient) => i.type === category.key)
    setIngredients(ingredientsData)
    onOpen()
  }

  return (
    <Tabs
      aria-label="Options"
      className="w-full justify-center"
      selectedKey={selectedTab}
      onSelectionChange={setSelectedTab}
      items={tabs}
    >
      {(item: any) => (
        <Tab key={item.key} title={item.title}>
          <div>
            <h1>{item.subtitle}</h1>
          </div>
          <CategoryCard currentTab={item} handleOpen={handleOpen} />
          <AddFoodModal
            isOpen={isOpen}
            onClose={onClose}
            ingredients={ingredients}
            setSelected={setSelected}
            selected={selected}
          />
        </Tab>
      )}
    </Tabs>
  )
}
