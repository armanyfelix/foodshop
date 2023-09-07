'use client'

import LessIcon from '@/svg/LessIcon'
import SelectorIcon from '@/svg/SelectorIcon'
import TrashIcon from '@/svg/TrashIcon'
import { Dish, Price } from '@/types/ingredient'
import { formatMoney, unitAbrevation } from '@/utils/format'
import { Button, Card, CardBody, Image, Select, SelectItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'

interface Props {
  ingredient: any
  dish: Dish
  addDish: (dish: Dish) => void
}

export default function DishCard({ ingredient, addDish, dish }: Props) {
  // const [price, setPrice] = useState<any>()
  const [priceKey, setPriceKey] = useState<Set<string>>()

  const editIngredient = (quantity: number) => {
    let amount =
      ingredient.price.by === 'weight'
        ? (ingredient.price.amount / 1000) * quantity
        : ingredient.price.amount * quantity
    const newIngredient = {
      ...ingredient,
      quantity,
      amount,
    }
    const key = dish.ingredients.findIndex((i: any) => i.ingredient.id === ingredient.ingredient.id)
    const newDish = dish
    newDish.ingredients.splice(key, 1, newIngredient)
    addDish(newDish)
  }
  // const deleteIngredient = () => {}

  useEffect(() => {
    if (ingredient) {
      const key = ingredient.ingredient.prices.findIndex((p: Price) => p.by === ingredient.price.by)
      // setPrice(ingredient.price)
      setPriceKey(new Set([key.toString()]))
    }
  }, [ingredient])
  return (
    <Card radius="none" shadow="sm">
      <CardBody>
        <div className="flex items-start justify-between">
          <h1 className="text-xl font-semibold text-foreground/90">
            {ingredient.ingredient.name} {ingredient.ingredient.category}
          </h1>
          <Image
            alt={ingredient.ingredient.name}
            className="h-14 object-cover"
            height={80}
            width={80}
            shadow="lg"
            src={`/images/${ingredient.ingredient.group}s/${ingredient.ingredient.category}s/${ingredient.ingredient.image}`}
          />
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-center justify-between">
            <Button
              size="sm"
              isIconOnly
              onClick={() =>
                editIngredient(
                  ingredient.price?.by === 'weight' ? ingredient.quantity - 50 : ingredient.quantity - 1
                )
              }
              className="h-8 w-8 rounded-2xl text-center ease-in hover:bg-zinc-800"
            >
              {(ingredient.price?.by === 'weight' && ingredient.quantity <= 50) ||
              ingredient.quantity <= 1 ? (
                <TrashIcon width="15 " height="31" />
              ) : (
                <LessIcon />
              )}
            </Button>
            {ingredient && ingredient.ingredient.prices?.length > 1 ? (
              <div className="flex items-center">
                <span className="ml-1 text-small">{ingredient.quantity}</span>
                <Select
                  placeholder="unit"
                  size="sm"
                  radius="lg"
                  selectionMode="single"
                  selectedKeys={priceKey}
                  className="max-w-xs"
                  classNames={{
                    trigger: 'bg-transparent h-7 pl-1 pr-0 w-[43px]',
                    popover: 'w-[110px]',
                    selectorIcon: 'right-1',
                  }}
                  aria-labelledby="Format"
                  onSelectionChange={(e: any) => {
                    setPriceKey(e)
                    // const priceIterator = e.values()
                    // const priceIndex = Number(priceIterator.next().value)
                    // setPrice(ingredient?.prices[priceIndex])
                    // onAdd(ingredient?.prices[priceIndex]?.by === 'weight' ? 50 : 1)
                  }}
                  selectorIcon={<SelectorIcon />}
                >
                  {ingredient.ingredient.prices?.map((p: any, i: any) => (
                    <SelectItem key={i} textValue={unitAbrevation(p.by)}>
                      {p.by}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            ) : (
              <div className="flex w-[66px] items-center justify-center">
                {ingredient.quantity}
                {unitAbrevation(ingredient.price.by)}
              </div>
            )}
            <Button
              size="sm"
              isIconOnly
              onClick={() =>
                editIngredient(
                  ingredient.price?.by === 'weight' ? ingredient.quantity + 50 : ingredient.quantity + 1
                )
              }
              className="h-8 w-8 rounded-2xl text-2xl ease-in hover:bg-zinc-800"
            >
              <svg
                width="15"
                height="31"
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
          <h2>{formatMoney(ingredient.amount)}</h2>
        </div>
      </CardBody>
    </Card>
  )
}
