'use client'

import { Ingredient } from '@/types/ingredient'
import { Tab, Tabs, useDisclosure } from '@nextui-org/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import { create } from 'zustand'
import AddFoodModal from './AddFoodModal'
import CategoryCard from './CategoryCard'

type Store = {
  dish: any[]
  addIngredient: () => void
}

const useDishStore = create<any>((set: any) => ({
  dish: {
    ingredients: [],
    price: null,
    recipe: null,
  },
  addIngredient: (ingredients: any) =>
    set((state: any) => ({ dish: { ...state.dish, ingredients: ingredients } })),
}))

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

  const addIngredient = useDishStore((state: any) => state.addIngredient)
  const dish = useDishStore((state: any) => state.dish)
  console.log('🚀 ~ file: TabsC.tsx:43 ~ TabsC ~ dish:', dish)

  useEffect(() => {
    async function getIngredients() {
      try {
        const supabase = createClientComponentClient()
        const { data }: any = await supabase.from('ingredients').select('*')
        setAllIngredients(data)
      } catch (error) {
        console.log(error)
      }
    }
    getIngredients()
  }, [])

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
    <>
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
              <h1>{dish.length}</h1>
            </div>
            <CategoryCard currentTab={item} handleOpen={handleOpen} />
            <AddFoodModal
              isOpen={isOpen}
              onClose={onClose}
              ingredients={ingredients}
              setSelected={setSelected}
              selected={selected}
              addIngredient={addIngredient}
              dish={dish}
            />
          </Tab>
        )}
      </Tabs>
      {/* <div className="fixed bottom-5 right-1/2 translate-x-1/2 w-96">
        <Button type="button" onClick={addIngredient} color="primary" radius="lg" size="lg" className="w-full">
          Add to Dish
        </Button>
      </div> */}
    </>
  )
}
