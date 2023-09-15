import ChevronLeftIcon from '@/svg/ChevronLeftIcon'
import LessIcon from '@/svg/LessIcon'
import PlusIcon from '@/svg/PlusIcon'
import SelectorIcon from '@/svg/SelectorIcon'
import { Ingredient, Price } from '@/types/ingredient'
import { formatMoney, unitAbrevation } from '@/utils/format'
import {
  Accordion,
  AccordionItem,
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
import { useEffect, useState } from 'react'
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

export default function FoodModal({
  isOpen,
  onClose,
  ingredients,
  addIngredient,
  ingredient,
  setIngredient,
  dish,
}: Props) {
  const [price, setPrice] = useState<Price | null>(null)
  const [priceKey, setPriceKey] = useState<Set<string>>(new Set(['0']))
  const [instructions, setInstructions] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(0)
  const [order, setOrder] = useState<any>(null)

  const onAdd = (newQuantity: number) => {
    setQuantity(newQuantity)
    let amount = 0
    if (price) {
      amount = price.by === 'weight' ? (price.amount / 1000) * newQuantity : price.amount * newQuantity
    }
    setOrder({
      ingredient,
      price,
      quantity: newQuantity,
      amount,
    })
  }

  useEffect(() => {
    if (price) {
      onAdd(price.by === 'weight' ? 50 : 1)
    }
  }, [price])
  return (
    <Modal
      isOpen={isOpen}
      size="xl"
      backdrop="blur"
      scrollBehavior="inside"
      placement="center"
      onClose={() => {
        onClose()
        setIngredient(null)
        setPrice(null)
        setPriceKey(new Set(['0']))
      }}
      classNames={{
        closeButton: 'bg-default/90 text-white z-20 mt-3 mr-4 shadow',
        base: 'max-h-full h-full md:h-5/6 md:max-h-none',
        body: 'p-0 rounded-t-xl -mb-16 -translate-y-16',
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
                  setPriceKey(new Set(['0']))
                }}
              >
                {ingredient?.category?.toUpperCase()}S
              </Button>
            )}
          </ModalHeader>
          <ModalBody>
            {ingredient ? (
              <div>
                <Image
                  width="100%"
                  className="h-[200px] w-full object-cover"
                  removeWrapper
                  src={`/images/${ingredient.group}s/${ingredient.category}s/${ingredient.image}`}
                  alt={ingredient.image}
                />
                <div className="px-5">
                  <div className="mb-5 mt-3">
                    <h1 className="mb-3 text-3xl font-bold">{ingredient.name}</h1>
                    <p>{ingredient.description}</p>
                  </div>
                  <Divider />
                  <div className="my-4">
                    <h3 className="mb-3 text-sm font-bold text-gray-200">Prices</h3>
                    {ingredient.prices?.map((p, i) => (
                      <ul key={i} className="flex items-center justify-between">
                        <li>
                          {p.by === 'weight' && ' by Weight:'}
                          {p.by === 'piece' && ' by Piece:'}
                        </li>
                        <li>
                          {formatMoney(price?.amount || 0)}
                          {p.by === 'weight' && '/kg'}
                          {p.by === 'piece' && '/pc'}
                        </li>
                      </ul>
                    ))}
                  </div>
                  <Accordion variant="shadow">
                    <AccordionItem key="1" aria-label="Nutrition Facts" title="Nutrition Facts">
                      <ul className="my-4 flex flex-col justify-center space-y-4">
                        <li>
                          <b>Calories:</b> {ingredient.calories}
                        </li>
                        <li>
                          <b>Protein:</b> {ingredient.protein}
                        </li>
                        <li>
                          <b>Fat:</b> {ingredient.fat}
                        </li>
                      </ul>
                    </AccordionItem>
                  </Accordion>
                  <Textarea
                    label="Instructions"
                    classNames={{
                      label: 'font-bold',
                      input: 'w-full',
                    }}
                    labelPlacement="outside"
                    value={instructions}
                    onValueChange={setInstructions}
                    placeholder="Specify how you want your food to be cooked or served"
                    minRows={3}
                  />
                  {quantity > 0 && (
                    <div className="flex items-center justify-between">
                      <div className="mx-auto flex rounded-2xl bg-zinc-600">
                        <Button
                          isDisabled={
                            (price?.by === 'weight' && quantity === 50) ||
                            (price?.by === 'piece' && quantity === 1)
                          }
                          size="sm"
                          variant="flat"
                          isIconOnly
                          onClick={() => onAdd(price?.by === 'weight' ? quantity - 50 : quantity - 1)}
                          className="h-12 w-12 rounded-2xl text-center ease-in hover:bg-zinc-700 active:scale-105 active:bg-zinc-800"
                        >
                          <LessIcon width="25" height="41" />
                        </Button>
                        {ingredient && ingredient.prices?.length > 1 ? (
                          <div className="flex items-center">
                            <span className="ml-5">{quantity}</span>
                            <Select
                              placeholder="unit"
                              size="sm"
                              radius="lg"
                              disallowEmptySelection
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
                              {quantity}
                              {unitAbrevation(ingredient.prices[0]?.by)}
                            </div>
                          )
                        )}
                        <Button
                          size="sm"
                          variant="flat"
                          isIconOnly
                          onClick={() => onAdd(price?.by === 'weight' ? quantity + 50 : quantity + 1)}
                          className="h-12 w-12 rounded-2xl text-2xl ease-in hover:bg-zinc-700 active:scale-105 active:bg-zinc-800"
                        >
                          <PlusIcon width="25" height="41" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="mt-24 grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4">
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
                onPress={() => {
                  const ingredientsArray = dish.ingredients
                  const newIngredientsArray = ingredientsArray.push({
                    ...order,
                    instructions,
                  })
                  console.log('🚀 ~ file: AddFoodModal.tsx:285 ~ ', {
                    ...order,
                    instructions,
                  })
                  addIngredient(newIngredientsArray)
                  onClose()
                  setIngredient(null)
                  setPrice(null)
                  setPriceKey(new Set(['0']))
                }}
              >
                Add to dish: {order && formatMoney(order?.amount)}
              </Button>
            )}
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  )
}
