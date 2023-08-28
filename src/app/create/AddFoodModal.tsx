import { SelectorIcon } from '@/svg/SelectorIcon'
import { Ingredient, Price } from '@/types/ingredient'
import { formatMoney, unitAbrevation } from '@/utils/format'
import {
  Button,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from '@nextui-org/react'
import { useState } from 'react'
import FoodCard from './FoodCard'

interface Props {
  isOpen: boolean
  onClose: () => void
  ingredients: Ingredient[]
  selected: Ingredient
  setSelected: (selected: Ingredient) => void
  addIngredient: (dish: any) => void
  dish: any
}

export default function AddFoodModal({
  isOpen,
  onClose,
  ingredients,
  dish,
  addIngredient,
  selected,
  setSelected,
}: Props) {
  const [price, setPrice] = useState<Price>(selected?.prices[0])
  const [priceKey, setPriceKey] = useState<any>(new Set(['0']))
  const [amount, setAmount] = useState<number>(0)

  const onAdd = (currentAmount: number) => {
    const dishIngredients = dish.ingredients
    const index = dishIngredients.findIndex((i: any) => i.ingredient.id === selected.id)
    console.log(index)
    if (index !== -1) {
      dishIngredients[index] = {
        ingredient: selected,
        price,
        amount: currentAmount,
        total_price: price.value * amount,
      }
    } else {
      dishIngredients.push({
        ingredient: selected,
        price,
        amount,
        total_price: price.value * amount,
      })
    }
    setAmount(currentAmount)
    addIngredient(dishIngredients)
  }
  return (
    <Modal
      size="full"
      isOpen={isOpen}
      scrollBehavior="inside"
      onClose={onClose}
      classNames={{
        closeButton: 'bg-white text-black m-3',
        base: 'bg-black max-h-full',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className={`mt-12 flex flex-col gap-1 bg-cover text-xl`}>
              {selected && (
                <Image
                  shadow="sm"
                  width="100%"
                  alt={selected.name}
                  className="h-[240px] w-full object-cover"
                  src={`/images/${selected.category}s/${selected.type}s/${selected.image}`}
                />
              )}
            </ModalHeader>
            <ModalBody>
              {!selected ? (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {ingredients?.map((ingredient: Ingredient, index: any) => (
                    <FoodCard
                      key={`${ingredient.name}_${index}`}
                      ingredient={ingredient}
                      setSelected={setSelected}
                      setPrice={setPrice}
                    />
                  ))}
                </div>
              ) : (
                <div>
                  <div className="mb-5">
                    <h1 className="mb-5 text-3xl font-bold">{selected.name}</h1>
                    <p>{selected.description}</p>
                  </div>
                  <Divider />
                  <div className="my-5 text-xl">
                    <h2 className="mb-5 text-sm text-gray-400">Information</h2>
                    {selected.prices.map((p, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-gray-400">
                          Price
                          {p.by === 'weight' && ' by Kg:'}
                          {p.by === 'piece' && ' by Piece:'}
                        </span>
                        <span>
                          {formatMoney(price?.value)}
                          {p.by === 'weight' && '/kg'}
                          {p.by === 'piece' && '/pc'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Divider />
                  <div className="my-5 flex flex-col justify-center space-y-4">
                    <h2 className="text-sm text-gray-400">Nutrition Facts</h2>
                    <span>
                      <b>Calories:</b> {selected.calories}
                    </span>
                    <span>
                      <b>Protein:</b> {selected.protein}
                    </span>
                    <p>
                      <b>Fat:</b> {selected.fat}
                    </p>
                  </div>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              {amount > 0 && (
                <>
                  <div className="mx-auto flex w-64 items-center justify-between rounded-2xl bg-zinc-600">
                    <button
                      onClick={() => {
                        onAdd(price.by === 'weight' ? amount - 50 : amount - 1)
                      }}
                      className="h-12 w-12 rounded-2xl text-2xl ease-in hover:bg-zinc-700 active:scale-105 active:bg-zinc-800"
                    >
                      -
                    </button>
                    <span>{amount}</span>
                    <button
                      onClick={() => {
                        onAdd(price.by === 'weight' ? amount + 50 : amount + 1)
                      }}
                      className="h-12 w-12 rounded-2xl text-2xl ease-in hover:bg-zinc-700 active:scale-105 active:bg-zinc-800"
                    >
                      +
                    </button>
                  </div>
                  {selected.prices?.length > 1 ? (
                    <Select
                      placeholder="unit"
                      size="sm"
                      radius="lg"
                      selectionMode="single"
                      selectedKeys={priceKey}
                      className="max-w-xs"
                      classNames={{
                        trigger: 'bg-transparent w-[66px]',
                        popover: 'bg-transparent w-[110px]',
                      }}
                      onSelectionChange={(e: any) => {
                        setPriceKey(e)
                        const priceIterator = e.values()
                        const priceIndex = Number(priceIterator.next().value)
                        setPrice(selected.prices[priceIndex])
                        onAdd(price.by === 'weight' ? amount + 50 : amount + 1)
                      }}
                      selectorIcon={<SelectorIcon />}
                    >
                      {selected.prices?.map((price, i) => (
                        <SelectItem key={i} textValue={unitAbrevation(price.by)}>
                          {price.by}
                        </SelectItem>
                      ))}
                    </Select>
                  ) : (
                    <div>{unitAbrevation(selected.prices[0].by)}</div>
                  )}
                </>
              )}
              {selected && amount <= 0 && (
                <Button
                  color="primary"
                  size="lg"
                  radius="lg"
                  className="w-full"
                  onPress={() => {
                    onAdd(price.by === 'weight' ? amount + 50 : amount + 1)
                  }}
                >
                  Add to dish
                </Button>
              )}
              {selected && amount > 0 && (
                <Button color="primary" size="lg" radius="lg" className="w-full" onPress={onClose}>
                  Continue
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
