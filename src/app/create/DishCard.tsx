'use client'

import LessIcon from '@/svg/LessIcon'
import PlusIcon from '@/svg/PlusIcon'
import SelectorIcon from '@/svg/SelectorIcon'
import TrashIcon from '@/svg/TrashIcon'
import { Dish, Price } from '@/types/ingredient'
import { formatMoney, unitAbrevation } from '@/utils/format'
import { Button, Card, CardBody, Image, Select, SelectItem } from '@nextui-org/react'

interface Props {
  ingredient: any
  dish: Dish
  addDish: (dish: Dish) => void
  onClose: () => void
}

export default function DishCard({ ingredient, addDish, dish, onClose }: Props) {
  const editIngredient = (quantity: number, price = ingredient.price) => {
    let amount = price.by === 'weight' ? (price.amount / 1000) * quantity : price.amount * quantity
    const newIngredient = {
      ...ingredient,
      quantity,
      price,
      amount,
    }
    const index = dish.ingredients.findIndex((i: any) => i.ingredient.id === ingredient.ingredient.id)
    const newDish = dish
    newDish.ingredients.splice(index, 1, newIngredient)
    addDish(newDish)
  }
  const deleteIngredient = () => {
    const index = dish.ingredients.findIndex((i: any) => i.ingredient.id === ingredient.ingredient.id)
    const newDish = dish
    newDish.ingredients.splice(index, 1)
    addDish(newDish)
    if (newDish.ingredients.length === 0) {
      onClose()
    }
  }
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
            src={`/images/${ingredient.ingredient.group}s/${ingredient.ingredient.category}s/${ingredient.ingredient.image}`}
          />
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-center justify-between">
            <Button
              size="sm"
              isIconOnly
              onClick={() =>
                (ingredient.price?.by === 'weight' && ingredient.quantity <= 50) || ingredient.quantity <= 1
                  ? deleteIngredient()
                  : editIngredient(
                      ingredient.price?.by === 'weight' ? ingredient.quantity - 50 : ingredient.quantity - 1
                    )
              }
              className="h-8 w-8 rounded-2xl text-center ease-in hover:bg-zinc-800"
            >
              {(ingredient.price?.by === 'weight' && ingredient.quantity <= 50) ||
              ingredient.quantity <= 1 ? (
                <TrashIcon width="15" height="31" className="text-red-500" />
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
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={
                    new Set([
                      ingredient.ingredient.prices
                        .findIndex((price: Price) => price.by === ingredient.price.by)
                        .toString(),
                    ])
                  }
                  className="max-w-xs"
                  classNames={{
                    trigger: 'bg-transparent h-7 pl-1 pr-0 w-[43px]',
                    popover: 'w-[110px]',
                    selectorIcon: 'right-1',
                  }}
                  aria-labelledby="Format"
                  onSelectionChange={(e: any) => {
                    const priceIterator = e.values()
                    const priceIndex = Number(priceIterator.next().value)
                    editIngredient(
                      ingredient.ingredient.prices[priceIndex]?.by === 'weight' ? 50 : 1,
                      ingredient.ingredient.prices[priceIndex]
                    )
                    return e
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
              <PlusIcon />
            </Button>
          </div>
          <h2>{formatMoney(ingredient.amount)}</h2>
        </div>
      </CardBody>
    </Card>
  )
}
