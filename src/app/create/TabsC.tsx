'use client'

import { Ingredient } from '@/types/ingredient'
import { Button, Tab, Tabs, useDisclosure } from '@nextui-org/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Suspense, useEffect, useState } from 'react'
import { create } from 'zustand'
import AddFoodModal from './AddFoodModal'
import CategoryCard from './CategoryCard'

interface Tabs {
  key: string
  title: string
  subtitle: string
}

type Store = {
  dish: {
    ingredients: Ingredient[]
    price: number | null
    recipe: any | null
  }
  addIngredient: (ingredients: Ingredient[]) => void
}

const useDishStore = create<Store>((set) => ({
  dish: {
    ingredients: [],
    price: null,
    recipe: null,
  },
  addIngredient: (ingredients) => set((state) => ({ dish: { ...state.dish, ingredients: ingredients } })),
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
  const [selectedTab, setSelectedTab] = useState<any>('grains')
  const [ingredient, setIngredient] = useState<Ingredient | null>(null)
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [allIngredients, setAllIngredients] = useState<Ingredient[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { dish, addIngredient } = useDishStore()

  const handleOpen = (category: any) => {
    const ingredientsData = allIngredients.filter((i: Ingredient) => i.type === category.key)
    setIngredients(ingredientsData)
    onOpen()
  }

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

  return (
    <>
      <Tabs
        aria-label="Options"
        className="w-full justify-center"
        selectedKey={selectedTab}
        onSelectionChange={setSelectedTab}
        variant="bordered"
        items={tabs}
      >
        {(item: Tabs) => (
          <Tab key={item.key} title={item.title}>
            <CategoryCard currentTab={item} handleOpen={handleOpen} />
            <Suspense>
              <AddFoodModal
                isOpen={isOpen}
                onClose={onClose}
                ingredients={ingredients}
                setIngredient={setIngredient}
                ingredient={ingredient}
                addIngredient={addIngredient}
                dish={dish}
              />
            </Suspense>
          </Tab>
        )}
      </Tabs>
      {dish && dish.ingredients.length > 0 && (
        <div className="fixed bottom-5 right-1/2 z-50 w-96 translate-x-1/2">
          <Button type="button" color="primary" radius="lg" size="lg" className="w-full">
            See Dish ({dish.ingredients.length})
          </Button>
        </div>
      )}
    </>
  )
}
