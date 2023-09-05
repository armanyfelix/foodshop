import ChevronLeftIcon from '@/svg/ChevronLeftIcon'
import SelectorIcon from '@/svg/SelectorIcon'
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
  Textarea,
} from '@nextui-org/react'
import { useState } from 'react'
import FoodCard from './FoodCard'

interface Props {
  isOpen: boolean
  onClose: () => void
  ingredients: Ingredient[]
  ingredient: Ingredient | null
  setIngredient: (ingredient: Ingredient | null) => void
  addIngredient: (dish: any) => void
  dish: any
}

export default function AddFoodModal({
  isOpen,
  onClose,
  ingredients,
  dish,
  addIngredient,
  ingredient,
  setIngredient,
}: Props) {
  const [price, setPrice] = useState<Price | null>(null)
  const [priceKey, setPriceKey] = useState<any>(new Set(['0']))
  const [amount, setAmount] = useState<number>(1)

  const onAdd = (currentAmount: number) => {
    setAmount(currentAmount)
    const dishIngredients = dish.ingredients
    const index = dishIngredients.findIndex((i: any) => i.ingredient?.id === ingredient?.id)
    if (index !== -1) {
      dishIngredients[index] = {
        ingredient,
        price,
        amount: currentAmount,
        total_price: price?.value || 0 * currentAmount,
      }
    } else {
      dishIngredients.push({
        ingredient,
        price,
        amount,
        total_price: price?.value || 0 * currentAmount,
      })
    }
    addIngredient(dishIngredients)
  }
  return (
    <Modal
      isOpen={isOpen}
      scrollBehavior="inside"
      onClose={() => {
        onClose()
        setIngredient(null)
        setPrice(null)
      }}
      classNames={{
        closeButton: 'bg-default/90 text-white z-20 mt-3 mr-4 shadow',
        base: 'max-h-full min-h-full',
        body: 'p-0',
        header: 'bg-transparent z-10',
      }}
    >
      <ModalContent>
        <>
          <ModalHeader>
            {ingredient && (
              <Button
                variant="flat"
                className="w-fit bg-default/90 font-bold hover:bg-neutral-800"
                size="sm"
                radius="lg"
                startContent={<ChevronLeftIcon />}
                onPress={() => {
                  setIngredient(null)
                  setPrice(null)
                }}
              >
                {ingredient?.type?.toUpperCase()}S
              </Button>
            )}
          </ModalHeader>
          <ModalBody className="-translate-y-16">
            {ingredient ? (
              <>
                <Image
                  radius="none"
                  width="100%"
                  className="h-[200px] w-full object-cover"
                  removeWrapper
                  src={`/images/${ingredient.category}s/${ingredient.type}s/${ingredient.image}`}
                />
                <div className="px-5">
                  <div className="mb-5">
                    <h1 className="mb-3 text-3xl font-bold">{ingredient.name}</h1>
                    <p>{ingredient.description}</p>
                  </div>
                  <Divider />
                  <div className="my-4">
                    <h2 className="mb-3 text-gray-200">Prices</h2>
                    {ingredient.prices?.map((p, i) => (
                      <div key={i} className="flex items-center justify-between font-bold">
                        <span>
                          {p.by === 'weight' && ' by Weight:'}
                          {p.by === 'piece' && ' by Piece:'}
                        </span>
                        <span>
                          {formatMoney(price?.value || 0)}
                          {p.by === 'weight' && '/kg'}
                          {p.by === 'piece' && '/pc'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Divider />
                  <div className="my-4 flex flex-col justify-center space-y-4">
                    <h2 className="text-gray-200">Nutrition Facts</h2>
                    <span>
                      <b>Calories:</b> {ingredient.calories}
                    </span>
                    <span>
                      <b>Protein:</b> {ingredient.protein}
                    </span>
                    <span>
                      <b>Fat:</b> {ingredient.fat}
                    </span>
                  </div>
                  <Divider />
                  <div className="my-4 flex flex-col justify-center space-y-4">
                    <Textarea
                      label="Instructions"
                      labelPlacement="outside"
                      placeholder="Specify how you want your food to be cooked or served"
                      minRows={14}
                    />
                  </div>
                  {amount > 0 && (
                    <div className="flex items-center justify-between">
                      <div className="mx-auto flex rounded-2xl bg-zinc-600">
                        <Button
                          isDisabled={
                            (price?.by === 'weight' && amount === 50) ||
                            (price?.by === 'piece' && amount === 1)
                          }
                          size="sm"
                          variant="flat"
                          isIconOnly
                          onClick={() => {
                            onAdd(price?.by === 'weight' ? amount - 50 : amount - 1)
                          }}
                          className="h-12 w-12 rounded-2xl text-center ease-in hover:bg-zinc-700 active:scale-105 active:bg-zinc-800"
                        >
                          <svg
                            width="25"
                            height="41"
                            className="inline"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="#ffffff" d="M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H5Z" />
                          </svg>
                        </Button>
                        {ingredient && ingredient.prices?.length > 1 ? (
                          <div className="flex">
                            <span className="ml-5">{amount}</span>
                            <Select
                              placeholder="unit"
                              size="sm"
                              radius="lg"
                              selectionMode="single"
                              selectedKeys={priceKey}
                              className="max-w-xs"
                              classNames={{
                                trigger: 'bg-transparent w-[66px]',
                                popover: 'w-[110px]',
                              }}
                              aria-labelledby="Format"
                              onSelectionChange={(e: any) => {
                                setPriceKey(e)
                                const priceIterator = e.values()
                                const priceIndex = Number(priceIterator.next().value)
                                setPrice(ingredient?.prices[priceIndex])
                                onAdd(ingredient?.prices[priceIndex]?.by === 'weight' ? 50 : 1)
                              }}
                              selectorIcon={<SelectorIcon />}
                            >
                              {ingredient.prices?.map((p, i) => (
                                <SelectItem key={i} textValue={unitAbrevation(p.by)}>
                                  {p.by}
                                </SelectItem>
                              ))}
                            </Select>
                          </div>
                        ) : (
                          ingredient && (
                            <div className="flex w-[66px] items-center justify-center">
                              {amount}
                              {unitAbrevation(ingredient.prices[0]?.by)}
                            </div>
                          )
                        )}
                        <Button
                          size="sm"
                          variant="flat"
                          isIconOnly
                          onClick={() => {
                            onAdd(price?.by === 'weight' ? amount + 50 : amount + 1)
                          }}
                          className="h-12 w-12 rounded-2xl text-2xl ease-in hover:bg-zinc-700 active:scale-105 active:bg-zinc-800"
                        >
                          <svg
                            width="25"
                            height="41"
                            className="inline"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="#ffffff">
                              <path d="M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H5Z" />
                              <path d="M9 5a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V5Z" />
                            </g>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {ingredients?.map((ingredient: Ingredient, index: number) => (
                  <FoodCard
                    key={`${ingredient.name}_${index}`}
                    ingredient={ingredient}
                    setIngredient={setIngredient}
                    setPrice={setPrice}
                  />
                ))}
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            {ingredient && (
              <Button
                color="primary"
                variant="shadow"
                size="lg"
                radius="lg"
                className="w-full"
                onPress={() => onAdd(price?.by === 'weight' ? 50 : 1)}
              >
                Add to dish
              </Button>
            )}
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  )
}
