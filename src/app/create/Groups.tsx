'use client'

import { Dish, Ingredient } from '@/types/ingredient'
import { Button, Tab, Tabs, useDisclosure } from '@nextui-org/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Suspense, useEffect, useState } from 'react'
import { create } from 'zustand'
import AddFoodModal from './AddFoodModal'
import CategoryCard from './CategoryCard'
import DishModal from './DishModal'

interface Tabs {
  key: string
  title: string
  subtitle: string
}

type Store = {
  dish: Dish
  addIngredient: (ingredients: Ingredient[]) => void
}

const useDishStore = create<Store>(() => ({
  dish: {
    ingredients: [],
    amount: null,
    recipe: null,
  },
  addIngredient: (ingredients) => ingredients,
}))

export default function Groups() {
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
  const { isOpen: isFoodOpen, onOpen: onFoodOpen, onClose: onFoodClose } = useDisclosure()
  const { isOpen: isDishOpen, onOpen: onDishOpen, onOpenChange: onDishOpenChange } = useDisclosure()
  const { dish, addIngredient } = useDishStore()

  const handleFoodOpen = (category: any) => {
    const ingredientsData = allIngredients.filter((i: Ingredient) => i.category === category.key)
    setIngredients(ingredientsData)
    onFoodOpen()
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
            <CategoryCard currentTab={item} handleOpen={handleFoodOpen} />
            <Suspense>
              <AddFoodModal
                isOpen={isFoodOpen}
                onClose={onFoodClose}
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
        <div className="fixed bottom-5 right-1/2 z-50 w-[90vw] translate-x-1/2">
          <Button
            type="button"
            variant="shadow"
            color="primary"
            radius="lg"
            size="lg"
            className="w-full"
            onPress={() => onDishOpen()}
          >
            See Dish ({dish.ingredients.length})
          </Button>
          <DishModal isOpen={isDishOpen} onOpenChange={onDishOpenChange} dish={dish} />
        </div>
      )}
    </>
  )
}
